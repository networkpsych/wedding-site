import type { Actions } from '@sveltejs/kit';
import { addRSVP, addMeal, checkEmail, type Reservation, type Meal } from '$lib/firebase/database';
import type { PostgrestError } from '@supabase/supabase-js';

let reserved: Reservation;
let meal: Meal;

type Data = {
	success: boolean;
	errors: Record<string, string>;
};

function validateEmail(email: string) {
	if (email.length > 50) {
		return false;
	}

	const emailPattern =
		/^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|.(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
	return emailPattern.test(email);
}

function errorUpdate(
	resp: PostgrestError | undefined,
	err: Record<string, string>,
	errType: string | undefined,
) {
	let status = '';
	let reason = '';
	if (resp != undefined){
		status = '409';
		if (resp?.code == '23505') {
			reason = 'Email entry already exists';
		} else if (resp?.code == '23502') {
			reason = 'Please check that that the form is filled'
		}

	} else {
		status = '409';
		if (errType === 'email-invalid') {
			reason = 'email is invalid';
		} else if (errType == 'missing-form') {
			reason = 'form is required';
		} else if (errType == 'low-guests') {
			reason = 'Please enter 1 or more guests'
		} else if (errType == 'high-guests'){
			reason = 'Guest limit is set at 10 people. If you need more, please contact the wedding couple.'
		} else {
			status = '500';
			reason = 'An internal error occurred. If this issue continues, please contact the admin.'; //'An error occurred. If the issue persists, please contact the admin.'
		}
	}
	err.status = status;
	err.reason = reason;
	return err;
}

export const actions: Actions = {
	emailCheck: async ({request}) =>{
		const data = await request.formData();
		console.log(data);
		const form: Data = {
			success: false,
			errors: {}
		};

		if (!data) {
			errorUpdate(undefined, form.errors, 'missing-form');
			return form;
		} else if (!validateEmail(String(data.get('email')))) {
			errorUpdate(undefined, form.errors, 'email-invalid');
			return form;
		}

		const resp = await checkEmail(String(data.get('email')))
		console.log(resp)
		if (resp !== null){
			console.log(resp)
			if (resp == true || resp == false){
				form.success = true
			form.errors = {status:'200', reason:'Email exists'}
			} else {
				errorUpdate(resp, form.errors, undefined);
			}
		} else {
			form.success = true
			form.errors = {status:'200', reason:'Email does not exist'}
		}
		return form
	},
	guest: async ({ request }) => {
		const data = await request.formData();
		console.log(data);
		const form: Data = {
			success: false,
			errors: {}
		};

		reserved = {
			first_name: String(data.get('first_name')),
			last_name: String(data.get('last_name')),
			email: String(data.get('email')),
			attending: Boolean(data.get('slider')),
			note: String(data.get('note')),
			guests: Number(data.get('guests'))
		};
		if (reserved.attending && reserved.guests < 1){
			errorUpdate(undefined, form.errors, 'low-guests')
			return form
		} else if (reserved.attending && reserved.guests > 10){
			errorUpdate(undefined, form.errors, 'high-guests')
			return form
		}

		console.log(reserved);
		const resp = await addRSVP(reserved);

		if (resp != null) {
			console.log(resp);
			errorUpdate(resp, form.errors, undefined);
		}else {
			form.success = true;
		}
		return form;
	},
	meal: async ({ request }) => {
		const data = await request.formData();
		console.log(data);
		const form: Data = {
			success: false,
			errors: {}
		};

		if (!data) {
			errorUpdate(undefined, form.errors, 'missing-form');
			return form;
		}
		meal = {
			email: String(data.get('email')),
			entree: String(data.get('entree')),
			has_allergy: Boolean(data.get('has_allergies')),
			allergy_type: String(data.get('allergy_types'))
		};

		console.log(meal);
		console.log('Past the meal');
		const resp = await addMeal(meal);

		console.log(resp?.message);
		if (resp != null) {
			console.log(resp);
			errorUpdate(resp, form.errors, undefined);
		} else {
			form.success = true;
		}
		return form;
	}
};
