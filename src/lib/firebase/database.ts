import type { PostgrestError } from '@supabase/supabase-js';
import { supabase, supaEmail } from './supabase';
import { createClient } from '@supabase/supabase-js'
// import { resolveRoute } from '$app/paths';

export type Reservation = {
	first_name: string;
	last_name: string;
	email: string;
	attending: boolean;
	note: string;
	guests: number;
};

export type Meal = {
	email: string;
	entree: string;
	has_allergy: boolean;
	allergy_type: string;
};

export async function addRSVP(reservation: Reservation): Promise<PostgrestError | null> {
	try {
		// If using .select(), then the RLS needs to have
		// an allowance to use select.
		const { data, error } = await supabase.from('wedding_guests').insert({
			first_name: reservation.first_name,
			last_name: reservation.last_name,
			email: reservation.email,
			attending: reservation.attending,
			note: reservation.note,
			guests: reservation.guests
		});
		console.log(reservation);

		if (!error) {
			console.log('data ', data);
		}
		console.log('error ', error);
		return error;
	} catch (e) {
		console.error('Error with item: ', e.stack);
	}

	return null;
}

export async function addMeal(meals: Meal): Promise<PostgrestError | null> {
	try {
		const { data, error } = await supabase.from('wedding_guest_meals').insert({
			email: meals.email,
			entree: meals.entree,
			has_allergy: meals.has_allergy,
			allergy_type: meals.allergy_type
		});
		console.log(meals);
		if (!error) {
			console.log('data ', data);
			console.log('error ', error);
		}
		return error;
	} catch (e) {
		console.error('Error with item: ', e.stack);
	}

	return null;
}

export async function checkEmail(email: string): Promise<PostgrestError | boolean | null >{
	
	try{
		const {data, error} = await supaEmail
			.from('wedding_guests')
			.select('attending')
			.eq('email', email)
		console.log(data)
		if (data != undefined){
			console.log(data[0]?.attending)
			return data[0].attending
		}
		if (error){
			console.error("Error with item: ", error.stack)
			return error
		}
	} catch (e){
		if (e instanceof TypeError) {
			return null
		} else {
			console.error('Error with item: ', e.stack)
		}
	}
	return null
}