// src/lib/supabase.ts
import { createClient } from '@supabase/supabase-js';

const supabaseUrl = 'https://qpqcaqjuymwxrjfkljgq.supabase.co';
const supabaseAnonKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InFwcWNhcWp1eW13eHJqZmtsamdxIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MzA1Nzk5OTMsImV4cCI6MjA0NjE1NTk5M30.5ngFWEeTWOVd42tlkNgEc4MZIQGK1jlxCxdv3gBEWfY';

export const supabase = createClient(supabaseUrl, supabaseAnonKey);