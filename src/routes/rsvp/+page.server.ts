import type { Actions } from '@sveltejs/kit';
import { addRSVP, type Reservation } from '$lib/firebase/database';

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
	default: async({ request }) => {
		const data = await request.formData();

		const status: Data = {
			success: false,
			errors: {}
		};

		if (!data) {
			status.errors.status = '400';
			status.errors.rsvpForm = 'required';
			return status;
		}

		if (!validateEmail(String(data.get('email')))){
			status.errors.status = '400';
			status.errors.email = 'email is invalid';
			return status;
		}

		const reservation: Reservation = {
			name: String(data.get('name')),
			email: String(data.get('email')),
			attendance: Boolean(data.get('attending')),
			guests: Number(data.get('guests')),
		}
		addRSVP(reservation);
		status.success = true;
		console.log(reservation)
		return status
	}
}


/*export const actions: Actions = {
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

		if (!attendance) {
			// logical not operator was doing the opposite of what I wanted????
			const guests = Number(form.get('guests'));
			addRSVP(name, email, attendance, guests);
			
		} else {
			// 0 == zero guests
			addRSVP(name, email, attendance, 0);
		}
		
		data.success = true;
		//rsvpForm = formData.getAll('chips');
		// console.log(form);
		// console.log(getRSVP());
		// console.log(name, email, attendance, address, city, state, zipcode, guests);
		form.get('chips');
		event
		// clearRSVP();
		return data;
		//return json(data)
	}
};*/
