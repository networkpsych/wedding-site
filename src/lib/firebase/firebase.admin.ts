import { cert, getApps, initializeApp } from "firebase-admin/app"
import { getAuth } from 'firebase-admin/auth';
import { getFirestore } from 'firebase-admin/firestore';



function init(){
    try {
        const fbAdmin = getApps();

        if (fbAdmin.length > 0) {
            return fbAdmin[0]!;
        }

        return initializeApp({
            credential: credentials.cert({
            projectId: import.meta.env.VITE_FB_ADMIN_PROJECT_ID,
            privateKey: import.meta.env.VITE_FB_ADMIN_PRIVATE_KEY,
            clientEmail: import.meta.env.VITE_FB_ADMIN_CLIENT_EMAIL
            })
        });
    }
    catch (e: any) {
        if (!/already exists/u.test(e.message)) {
            console.error('Firebase Admin Error: ', e.stack)
        }
    }
}

export const fbAdmApp = init()
export const adminAuth = getAuth(fbAdmApp);
export const adminDB = getFirestore();