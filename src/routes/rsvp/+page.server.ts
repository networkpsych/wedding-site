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

	let emailPattern = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|.(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
	return emailPattern.test(email)
}

export const actions: Actions = {
	default: async({ request }) => {
		const data = await request.formData();

		const form: Data = {
			success: false,
			errors: {}
		};

		if (!data) {
			form.errors.status = '400';
			form.errors.reason = 'form is required';
			return form;
		}

		else if (!validateEmail(String(data.get('email')))){
			form.errors.status = '400';
			form.errors.reason = 'email is invalid';
			return form;
		}
		else {
			reserved = {
				name: String(data.get('name')),
				email: String(data.get('email')),
				attending: Boolean(data.get('attending')),
				guests: Number(data.get('guests')),
			}
			
			const userRes = await addRSVP(reserved);
			form.success = true;
			return form
		}
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
