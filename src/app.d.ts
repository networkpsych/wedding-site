// See https://kit.svelte.dev/docs/types#app
// for information about these interfaces
// and what to do when importing types
import { SupabaseClient, Session, User} from '@supabase/supabase-js'

declare namespace App {
	interface Locals {
		supabase: SupabaseClient
		safeGetSession(): Promise<{ session: Session | null; user: User | null }>
	}
	interface PageData {
		session: Session | null
		user: User | null
	}
	// interface Error {}
	// interface Platform {}
}
