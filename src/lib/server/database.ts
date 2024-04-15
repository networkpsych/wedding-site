type Reservation = {
    id: number
    name: string
    email: string
    attendance: boolean
    guests: number
}

let rsvp_list: Reservation[] = [];

export function getRSVP() {
    return rsvp_list;
}

export function addRSVP(
    name: string, email:string, attendance: boolean, guests: number){
        const rsvp: Reservation = {
            id: Date.now(),
            name: name,
            email: email,
            attendance: attendance,
            guests: guests,
            }
        rsvp_list.push(rsvp)
}

export function clearRSVP(){
    rsvp_list = [
        {
            id: Date.now(),
            name: "",
            email: "",
            attendance: true,
            guests: 0,
        }
    ]
}