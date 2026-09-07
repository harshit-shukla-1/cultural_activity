# cultural_activity
Project for cultural activity

## Local setup

This is the Sanskriti Sabha activity app for the July-September 2026 Indian cultural calendar.

1. Copy `.env.example` to `.env.local`.
2. Add the Supabase project URL and publishable key.
3. Run `supabase/migrations/20260907000000_initial_schema.sql` in the Supabase SQL editor.
4. Start the app with `npm run dev`.

The first screens are available at `/`, `/join`, `/present`, and `/admin`. The live room and admin actions will use Supabase after the project credentials are configured.
