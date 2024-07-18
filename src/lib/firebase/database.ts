import { collection, addDoc, Timestamp} from 'firebase/firestore';
import { fbDB } from './firebase.app';

import {supabase, supabaseDB} from './supabase'
import { resolveRoute } from '$app/paths';

export type Reservation = {
	name: string;
	email: string;
	attending: boolean;
	guests: number;
};

export async function addRSVP(reservation: Reservation): Promise<void> {

	try {

		// If using .select(), then the RLS needs to have
		// an allowance to use select.
		const { data, error } = await supabase
			.from("wedding_rsvp")
			.insert({
				name: reservation.name,
				email: reservation.email,
				attending: reservation.attending,
				guests: reservation.guests,
			})
		console.log(reservation)
		console.log(data)
		console.log(error)

	}
	catch (e: any) {
		console.error("Error with item: ", e.stack)
	}
}

