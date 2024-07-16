import { createClient } from '@supabase/supabase-js'

const supabaseUrl = 'https://gqynqdjirfndnfbtsaqe.supabase.co';
let supabaseKey;

try{
    supabaseKey = import.meta.env.VITE_SUPABASE_KEY
}
catch {
    supabaseKey = process.env.VITE_SUPABASE_KEY
}

export const supabase = createClient(supabaseUrl, supabaseKey)
export const supabaseDB = import.meta.env.VITE_SUPABASE_DB