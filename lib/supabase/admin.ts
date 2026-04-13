import { createClient } from "@supabase/supabase-js";

// Use this client strictly in backend server environments (e.g. webhooks)
// where you need to bypass Row Level Security.
export const supabaseAdmin = createClient(
  process.env.NEXT_PUBLIC_SUPABASE_URL!,
  process.env.SUPABASE_SERVICE_ROLE_KEY!
);
