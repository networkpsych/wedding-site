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



