create extension if not exists "pgcrypto";

create table public.presentations (
  id uuid primary key default gen_random_uuid(),
  slug text not null unique,
  year integer not null default 2026,
  title_en text not null,
  title_de text not null,
  description_en text,
  description_de text,
  is_published boolean not null default false,
  created_by uuid references auth.users(id) on delete set null,
  created_at timestamptz not null default now(),
  updated_at timestamptz not null default now()
);

create table public.events (
  id uuid primary key default gen_random_uuid(),
  presentation_id uuid not null references public.presentations(id) on delete cascade,
  month integer not null check (month between 1 and 12),
  event_date date,
  region text not null,
  title_en text not null,
  title_de text not null,
  summary_en text not null,
  summary_de text not null,
  image_url text,
  sort_order integer not null default 0,
  created_at timestamptz not null default now()
);

create table public.slides (
  id uuid primary key default gen_random_uuid(),
  presentation_id uuid not null references public.presentations(id) on delete cascade,
  event_id uuid references public.events(id) on delete set null,
  title_en text not null,
  title_de text not null,
  body_en text not null,
  body_de text not null,
  sort_order integer not null default 0,
  created_at timestamptz not null default now()
);

create table public.quiz_questions (
  id uuid primary key default gen_random_uuid(),
  presentation_id uuid not null references public.presentations(id) on delete cascade,
  slide_id uuid references public.slides(id) on delete set null,
  question_en text not null,
  question_de text not null,
  explanation_en text,
  explanation_de text,
  points integer not null default 100 check (points > 0),
  sort_order integer not null default 0,
  is_active boolean not null default true,
  created_at timestamptz not null default now()
);

create table public.quiz_options (
  id uuid primary key default gen_random_uuid(),
  question_id uuid not null references public.quiz_questions(id) on delete cascade,
  option_en text not null,
  option_de text not null,
  is_correct boolean not null default false,
  sort_order integer not null default 0
);

create table public.rooms (
  id uuid primary key default gen_random_uuid(),
  presentation_id uuid not null references public.presentations(id) on delete cascade,
  code text not null unique check (code ~ '^[A-Z0-9]{4,8}$'),
  status text not null default 'lobby' check (status in ('lobby', 'presentation', 'quiz', 'finished')),
  current_slide integer not null default 0,
  current_question integer not null default 0,
  language text not null default 'en' check (language in ('en', 'de')),
  started_by uuid references auth.users(id) on delete set null,
  created_at timestamptz not null default now(),
  updated_at timestamptz not null default now()
);

create table public.participants (
  id uuid primary key default gen_random_uuid(),
  room_id uuid not null references public.rooms(id) on delete cascade,
  nickname text not null check (char_length(nickname) between 2 and 40),
  total_score integer not null default 0,
  joined_at timestamptz not null default now(),
  completed_at timestamptz,
  unique (room_id, nickname)
);

create table public.answers (
  id uuid primary key default gen_random_uuid(),
  participant_id uuid not null references public.participants(id) on delete cascade,
  question_id uuid not null references public.quiz_questions(id) on delete cascade,
  option_id uuid not null references public.quiz_options(id) on delete restrict,
  is_correct boolean not null default false,
  response_ms integer check (response_ms >= 0),
  points_awarded integer not null default 0,
  answered_at timestamptz not null default now(),
  unique (participant_id, question_id)
);

create index events_presentation_order on public.events(presentation_id, month, sort_order);
create index slides_presentation_order on public.slides(presentation_id, sort_order);
create index questions_presentation_order on public.quiz_questions(presentation_id, sort_order);
create index participants_room_score on public.participants(room_id, total_score desc);

alter table public.presentations enable row level security;
alter table public.events enable row level security;
alter table public.slides enable row level security;
alter table public.quiz_questions enable row level security;
alter table public.quiz_options enable row level security;
alter table public.rooms enable row level security;
alter table public.participants enable row level security;
alter table public.answers enable row level security;

create policy "Published presentations are public" on public.presentations
  for select using (is_published = true or auth.uid() = created_by);
create policy "Admins manage presentations" on public.presentations
  for all using (auth.uid() = created_by) with check (auth.uid() = created_by);

create policy "Published events are public" on public.events
  for select using (exists (
    select 1 from public.presentations
    where presentations.id = events.presentation_id
    and (presentations.is_published = true or presentations.created_by = auth.uid())
  ));
create policy "Admins manage events" on public.events
  for all using (exists (
    select 1 from public.presentations
    where presentations.id = events.presentation_id and presentations.created_by = auth.uid()
  )) with check (exists (
    select 1 from public.presentations
    where presentations.id = events.presentation_id and presentations.created_by = auth.uid()
  ));

create policy "Published slides are public" on public.slides
  for select using (exists (
    select 1 from public.presentations
    where presentations.id = slides.presentation_id
    and (presentations.is_published = true or presentations.created_by = auth.uid())
  ));
create policy "Admins manage slides" on public.slides
  for all using (exists (
    select 1 from public.presentations
    where presentations.id = slides.presentation_id and presentations.created_by = auth.uid()
  )) with check (exists (
    select 1 from public.presentations
    where presentations.id = slides.presentation_id and presentations.created_by = auth.uid()
  ));

create policy "Published questions are public" on public.quiz_questions
  for select using (exists (
    select 1 from public.presentations
    where presentations.id = quiz_questions.presentation_id
    and (presentations.is_published = true or presentations.created_by = auth.uid())
  ));
create policy "Admins manage questions" on public.quiz_questions
  for all using (exists (
    select 1 from public.presentations
    where presentations.id = quiz_questions.presentation_id and presentations.created_by = auth.uid()
  )) with check (exists (
    select 1 from public.presentations
    where presentations.id = quiz_questions.presentation_id and presentations.created_by = auth.uid()
  ));

create policy "Published options are public" on public.quiz_options
  for select using (exists (
    select 1 from public.quiz_questions
    join public.presentations on presentations.id = quiz_questions.presentation_id
    where quiz_questions.id = quiz_options.question_id
    and (presentations.is_published = true or presentations.created_by = auth.uid())
  ));
create policy "Admins manage options" on public.quiz_options
  for all using (exists (
    select 1 from public.quiz_questions
    join public.presentations on presentations.id = quiz_questions.presentation_id
    where quiz_questions.id = quiz_options.question_id and presentations.created_by = auth.uid()
  )) with check (exists (
    select 1 from public.quiz_questions
    join public.presentations on presentations.id = quiz_questions.presentation_id
    where quiz_questions.id = quiz_options.question_id and presentations.created_by = auth.uid()
  ));

create policy "Rooms are joinable" on public.rooms for select using (true);
create policy "Anyone can create a room" on public.rooms for insert with check (true);
create policy "Presenters manage rooms" on public.rooms for update using (auth.uid() = started_by);

create policy "Anyone can join a room" on public.participants for insert with check (true);
create policy "Room participants are visible" on public.participants for select using (true);
create policy "Participants update their score" on public.participants for update using (true) with check (true);

create policy "Participants submit answers" on public.answers for insert with check (true);
create policy "Room answers are visible" on public.answers for select using (true);

alter publication supabase_realtime add table public.rooms;
alter publication supabase_realtime add table public.participants;
alter publication supabase_realtime add table public.answers;