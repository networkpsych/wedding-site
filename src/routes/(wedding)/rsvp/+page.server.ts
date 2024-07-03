import type { Actions } from '@sveltejs/kit';
import { collection, query, doc, 
	getDocs, setDoc, addDoc, getFirestore, Timestamp} from 'firebase/firestore';
import { addRSVP, getRSVP, clearRSVP, type Reservation } from '$lib/firebase/database';

let reserved: Reservation;

type Data = {
	success: boolean;
	errors: Record<string, string>;
};

function validateEmail(email: string){
	
	if (email.length > 50){
		return false;
	}
	return String(email)
		.toLowerCase()
		.match(
			/^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|.(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
		)
}

export const actions: Actions = {
	default: async (event) => {
		const form = await event.request.formData();

		const data: Data = {
			success: false,
			errors: {}
		};

		if (!form) {
			data.errors.status = '400';
			data.errors.rsvpForm = 'required';
			return data;
		}

		const name = String(form.get('name'));
		const email = String(form.get('email'));

		if (!validateEmail(email)){
			data.errors.status = '401';
			data.errors.rsvpForm = 'Validation error'
		}

		// TODO: fix attendance variables logic
		let attendance =
			Boolean(form.get('attending')) === true
				? Boolean(form.get('attending'))
				: Boolean(form.get('not_attending'));

		if (!form.get('not_attending')) {
			// logical not operator was doing the opposite of what I wanted????
			const guests = Number(form.get('guests'));
			addRSVP(name, email, attendance, guests);
			
		} else {
			attendance = false;
			// 0 == zero guests
			addRSVP(name, email, attendance, 0);
		}
		
		data.success = true;
		//rsvpForm = formData.getAll('chips');
		console.log(form);
		// console.log(getRSVP());
		// console.log(name, email, attendance, address, city, state, zipcode, guests);
		form.get('chips');
		// clearRSVP();
		return data;
		//return json(data)
	}
};
