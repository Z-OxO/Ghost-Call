export const supabaseConfig = {
  url: process.env.NEXT_PUBLIC_SUPABASE_URL || "YOUR_SUPABASE_URL",
  anonKey: process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY || "YOUR_SUPABASE_ANON_KEY",
}

// Database table names
export const TABLES = {
  ACCOUNTS: "accounts",
  CREDITS: "credits",
  CALLS: "calls",
} as const
