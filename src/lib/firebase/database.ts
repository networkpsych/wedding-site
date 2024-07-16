import { collection, addDoc, Timestamp} from 'firebase/firestore';
import { fbDB } from './firebase.app';

import {supabase, supabaseDB} from './supabase'





export type Reservation = {
	name: string;
	email: string;
	attending: boolean;
	guests: number;
};

export async function addRSVP(reservation: Reservation): Promise<void> {

	try {

		const { error } = await supabase
			.from(supabaseDB)
			.insert(reservation)

		console.log(error)
		//const item = await addDoc(collection(fbDB, "test_collection"), {
		//	date: Timestamp.fromDate(new Date(Date.now())),
		//	attendance: reservation.attendance,
		//	name: reservation.name,
		//	email: reservation.email,
		//	guests: reservation.guests,
		//});

		//console.log(item)
		//console.log(item.id)
		//console.log("Added item");
		//console.log(item)

	}
	catch (e: any) {
		console.error("Error with item: ", e.stack)
	}
}

