import { createClient } from '@supabase/supabase-js'

const supabaseUrl = import.meta.env.VITE_SUPABASE_URL;
let supabaseKey;
let supabaseAnonKey

try{
    supabaseKey = import.meta.env.VITE_SUPABASE_KEY
    supabaseAnonKey = import.meta.env.VITE_SERVICEROLE_KEY
}
catch {
    supabaseKey = process.env.VITE_SUPABASE_KEY
    supabaseAnonKey = process.env.VITE_SERVICEROLE_KEY
}

export const supabase = createClient(supabaseUrl, supabaseKey)
export const supaEmail = createClient(supabaseUrl, supabaseAnonKey)
export const supabaseDB = import.meta.env.VITE_SUPABASE_DB_GUESTS
export const supabaseDB_food = import.meta.env.VITE_SUPABASE_DB_FOOD