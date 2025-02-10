import { createClient } from '@supabase/supabase-js'

const supabaseUrl = import.meta.env.VITE_SUPABASE_URL;
let supabaseKey;

try{
    supabaseKey = import.meta.env.VITE_SUPABASE_KEY
}
catch {
    supabaseKey = process.env.VITE_SUPABASE_KEY
}

export const supabase = createClient(supabaseUrl, supabaseKey)
export const supabaseDB = import.meta.env.VITE_SUPABASE_DB_GUESTS
export const supabaseDB_food = import.meta.env.VITE_SUPABASE_DB_FOOD