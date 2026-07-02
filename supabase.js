<!DOCTYPE supabase.js>
<supabase.js>
  
const SUPABASE_URL = "https://rzkjwejvzrumsmnohxxy.supabase.co";
const SUPABASE_ANON_KEY = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InJ6a2p3ZWp2enJ1bXNtbm9oeHh5Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3ODI4OTE5MTcsImV4cCI6MjA5ODQ2NzkxN30.L0qnYwFWtmSZ9eIxlkwAk_39Ost2Fdu82-Etw_KNceg";

window.supabase = supabase.createClient(
  SUPABASE_URL,
  SUPABASE_ANON_KEY
);
