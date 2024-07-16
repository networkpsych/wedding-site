import { collection, addDoc, Timestamp} from 'firebase/firestore';
import { fbDB } from './firebase.app';

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





export type Reservation = {
	name: string;
	email: string;
	attending: boolean;
	guests: number;
};

export async function addRSVP(reservation: Reservation): Promise<void> {

	try {

		const { data, error } = await supabase
			.from(supabaseDB)
			.insert([{
				name: reservation.name,
				email: reservation.email,
				attending: reservation.attending,
				guests: reservation.guests,
			}])
			.select()

		console.log(reservation)
		console.log(data)
		if (error){
			console.log(error)
		}
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

