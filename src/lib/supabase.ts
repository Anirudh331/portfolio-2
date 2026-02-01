import { createClient } from '@supabase/supabase-js';

// These can be overridden via environment variables for different hosts (Cloudflare, Vercel, etc.)
const supabaseUrl = import.meta.env.VITE_SUPABASE_URL || 'https://xosopefwwzarfzpeefdv.supabase.co';
const supabaseAnonKey = import.meta.env.VITE_SUPABASE_ANON_KEY || 'sb_publishable_ksZuAsdCbS5ijCIm3ATLUg_11-G33Bj';

export const supabase = createClient(supabaseUrl, supabaseAnonKey);

// Types for blog stats
export interface BlogStats {
  id: string;
  slug: string;
  likes: number;
  views: number;
  created_at: string;
  updated_at: string;
}
