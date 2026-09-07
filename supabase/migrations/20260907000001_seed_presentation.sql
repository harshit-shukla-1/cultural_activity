insert into public.presentations (
  slug,
  year,
  title_en,
  title_de,
  description_en,
  description_de,
  is_published
)
values (
  'india-2026',
  2026,
  'India in celebration',
  'Indien in Feierlaune',
  'A shared cultural journey through India''s July to September festivals.',
  'Eine gemeinsame kulturelle Reise durch Indiens Feste von Juli bis September.',
  true
)
on conflict (slug) do update set
  title_en = excluded.title_en,
  title_de = excluded.title_de,
  description_en = excluded.description_en,
  description_de = excluded.description_de,
  is_published = true;
