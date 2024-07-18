import type { LayoutLoad } from './$types'
import { createBrowserClient, createServerClient, isBrowser} from '@supabase/ssr'

const URL = import.meta.env.VITE_SUPABASE_URL
const KEY = import.meta.env.VITE_SUPABASE_KEY
export const load: LayoutLoad = async ({ fetch, data, depends}) => {
    depends('supabase:auth')

    const supabase = isBrowser() ?
        createBrowserClient(URL, KEY, {
            global: {
                fetch
            },
        })
        : createServerClient(URL, KEY, {
            global: {
                fetch,
            },
            cookies: {
                getAll() {
                    return data.cookies
                }
            }
        })

        const { 
            data: { session },
        } = await supabase.auth.getSession()

        return { supabase, session }
}
