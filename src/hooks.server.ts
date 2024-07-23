import { createServerClient } from '@supabase/ssr';

import type { Handle } from '@sveltejs/kit';

let url = import.meta.env.VITE_SUPABASE_URL;
let key = import.meta.env.VITE_SUPABASE_KEY;

export const handle: Handle = async({ event, resolve }) => {
    
    event.locals.supabase = createServerClient(url, key, {
        cookies: {
            getAll: () => event.cookies.getAll(),
            setAll: (cookiesTBD) => {
                cookiesTBD.forEach(({ name, value, options }) => {
                event.cookies.set(name, value, { ...options, path: '/'})
            })
            },
        },
    })

    event.locals.safeGetSession = async () => {
        const {
            data: { session },
        } = await event.locals.supabase.auth.getSession()

        if(!session) {
            return {session: null, user: null}
        }
        const {
            data: { user },
            error,
        } = await event.locals.supabase.auth.getUser()
        if (error) {
            return { session: null, user:null }
        }

        return {session, user}
    }

    return resolve(event, {
        filterSerializedResponseHeaders(name: any) {
            return name === 'content-range' || name === 'x-supabase-api-version'
        },
    })
    
}