-- À coller dans Supabase > SQL Editor > Run (une seule fois)
create table if not exists orders    (id text primary key, data jsonb not null, updated_at timestamptz default now());
create table if not exists products  (id text primary key, data jsonb not null, updated_at timestamptz default now());
create table if not exists customers (id text primary key, data jsonb not null, updated_at timestamptz default now());
create table if not exists invoices  (id text primary key, data jsonb not null, updated_at timestamptz default now());
create table if not exists events    (id bigint generated always as identity primary key, type text not null, data jsonb default '{}', created_at timestamptz default now());
alter table orders enable row level security; alter table products enable row level security;
alter table customers enable row level security; alter table invoices enable row level security; alter table events enable row level security;
create policy "owner orders"    on orders    for all to authenticated using (true) with check (true);
create policy "owner products"  on products  for all to authenticated using (true) with check (true);
create policy "owner customers" on customers for all to authenticated using (true) with check (true);
create policy "owner invoices"  on invoices  for all to authenticated using (true) with check (true);
create policy "visitors add events" on events for insert to anon, authenticated with check (true);
create policy "owner reads events"  on events for select to authenticated using (true);
create policy "owner deletes events" on events for delete to authenticated using (true);
