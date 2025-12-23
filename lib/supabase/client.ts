import { createBrowserClient } from "@supabase/ssr"
import { supabaseConfig } from "./config"

let supabaseInstance: ReturnType<typeof createBrowserClient> | null = null

export function getSupabaseClient() {
  if (!supabaseInstance) {
    supabaseInstance = createBrowserClient(supabaseConfig.url, supabaseConfig.anonKey)
  }
  return supabaseInstance
}
