-- ============================================================
-- 52 Questions — Family Journal
-- Run this in your Supabase SQL Editor
-- ============================================================

-- Families
create table if not exists families (
  id uuid primary key default gen_random_uuid(),
  name text not null,
  invite_code text unique default substring(gen_random_uuid()::text, 1, 8),
  created_at timestamptz default now()
);

-- Family members (kids, parents, grandparents…)
create table if not exists members (
  id uuid primary key default gen_random_uuid(),
  family_id uuid references families(id) on delete cascade not null,
  name text not null,
  emoji text default '🌟',
  dob text,
  created_at timestamptz default now()
);

-- Links auth users to a family
create table if not exists user_families (
  user_id uuid references auth.users(id) on delete cascade not null,
  family_id uuid references families(id) on delete cascade not null,
  role text default 'member', -- 'owner' | 'member'
  primary key (user_id, family_id)
);

-- Journal answers (with optional photo)
create table if not exists answers (
  id uuid primary key default gen_random_uuid(),
  family_id uuid references families(id) on delete cascade not null,
  member_id uuid references members(id) on delete set null,
  question_idx integer not null check (question_idx >= 0 and question_idx <= 51),
  answer text not null,
  age_at_time integer,
  photo_url text,
  answered_at timestamptz default now(),
  created_at timestamptz default now()
);

-- ── RLS (Row Level Security) ─────────────────────────────────
alter table families      enable row level security;
alter table members       enable row level security;
alter table user_families enable row level security;
alter table answers       enable row level security;

-- Families: visible to members of that family
create policy "Family members can read" on families
  for select using (
    id in (select family_id from user_families where user_id = auth.uid())
  );
create policy "Family members can update" on families
  for update using (
    id in (select family_id from user_families where user_id = auth.uid())
  );
create policy "Authenticated users can create families" on families
  for insert with check (auth.uid() is not null);

-- Members: visible/editable to family members
create policy "Family members can read members" on members
  for select using (
    family_id in (select family_id from user_families where user_id = auth.uid())
  );
create policy "Family members can insert members" on members
  for insert with check (
    family_id in (select family_id from user_families where user_id = auth.uid())
  );
create policy "Family members can update members" on members
  for update using (
    family_id in (select family_id from user_families where user_id = auth.uid())
  );
create policy "Family members can delete members" on members
  for delete using (
    family_id in (select family_id from user_families where user_id = auth.uid())
  );

-- User families
create policy "Users can read own family links" on user_families
  for select using (user_id = auth.uid());
create policy "Users can insert own family links" on user_families
  for insert with check (user_id = auth.uid());

-- Answers
create policy "Family members can read answers" on answers
  for select using (
    family_id in (select family_id from user_families where user_id = auth.uid())
  );
create policy "Family members can insert answers" on answers
  for insert with check (
    family_id in (select family_id from user_families where user_id = auth.uid())
  );
create policy "Family members can update answers" on answers
  for update using (
    family_id in (select family_id from user_families where user_id = auth.uid())
  );
create policy "Family members can delete answers" on answers
  for delete using (
    family_id in (select family_id from user_families where user_id = auth.uid())
  );

-- ── Storage bucket ────────────────────────────────────────────
-- Run these too:
insert into storage.buckets (id, name, public)
values ('photos', 'photos', true)
on conflict (id) do nothing;

create policy "Family members can upload photos" on storage.objects
  for insert with check (bucket_id = 'photos' and auth.uid() is not null);

create policy "Anyone can view photos" on storage.objects
  for select using (bucket_id = 'photos');

create policy "Uploaders can delete photos" on storage.objects
  for delete using (bucket_id = 'photos' and auth.uid() is not null);
