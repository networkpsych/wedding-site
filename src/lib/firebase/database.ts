import { collection, query, doc, 
		getDocs, setDoc, addDoc, getFirestore, Timestamp} from 'firebase/firestore';

import { fbDB } from './firebase.app';

export type Reservation = {
	date: number;
	name: string;
	email: string;
	attendance: boolean;
	guests: number;
};

let rsvp_list: Reservation[] = [];

export function getRSVP() {
	return rsvp_list;
}

export async function addRSVP(name: string, email: string, attendance: boolean, guests?: number): Promise<void> {

	try {
		
		//const db = getFirestore(fbDB);

		/*await addDoc(collection(fbDB, "wedding_rsvp"), {
			attending: attendance, 
			date: Timestamp.fromDate(new Date(Date.now())),
			name: name,
			email: email,
			guests: guests ? guests : 0
		});*/

		const item = await addDoc(collection(fbDB, "test_collection"), {
			attending: attendance, 
			date: Timestamp.fromDate(new Date(Date.now())),
			name: name,
			email: email,
			guests: guests
		});

		console.log(item)
		console.log(item.id)
		console.log("Added item");

	}
	catch (e: any) {
		console.error("Error with item: ", e.stack)
	}
		
	const rsvp: Reservation = {
		date: Date.now(),
		name: name,
		email: email,
		attendance: attendance,
		guests: guests ? guests : 0
	};
	rsvp_list.push(rsvp);
}

export function clearRSVP() {
	rsvp_list = [
		{
			date: Date.now(),
			name: '',
			email: '',
			attendance: true,
			guests: 0
		}
	];
}
