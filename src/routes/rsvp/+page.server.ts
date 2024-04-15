import type {Actions} from '@sveltejs/kit'
import { addRSVP, getRSVP, clearRSVP } from '$lib/server/database';

type Data = {
    success: boolean
    errors: Record<string, string>
}

// export async function POST({request}) {
//     
// }

export const actions: Actions = {
    default: async (event) => {
        const form = await event.request.formData();

        const data: Data = {
            success: false,
            errors: {}
        }

        if (!form) {
            data.errors.status = '400'
            data.errors.rsvpForm = 'required'
            return data
        }

        const name = String(form.get('name'));
        const email = String(form.get('email'));
        // TODO: fix attendance variables logic
        let attendance = (Boolean(form.get('attending'))===true) ? Boolean(form.get('attending')) : Boolean(form.get('not_attending'));

        if (!form.get('not_attending')){ // logical not operator was doing the opposite of what I wanted????
            const guests = Number(form.get('guests'));
            addRSVP(name, email, attendance, guests)
            console.log(name, email, attendance, guests);
        }
        else {
            attendance = false;
            console.log(name, email, attendance, 0);
            // 0 == zero guests
            addRSVP(name, email, attendance, 0)
        }

        data.success = true

        //rsvpForm = formData.getAll('chips');
        console.log(form)
        console.log(getRSVP())
        // console.log(name, email, attendance, address, city, state, zipcode, guests);
        form.get('chips');
        clearRSVP();
        return data
        //return json(data)
    }
}