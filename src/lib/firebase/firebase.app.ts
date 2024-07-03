// Import the functions you need from the SDKs you need
import { initializeApp, getApps, type FirebaseApp } from 'firebase/app';
// import { initializeApp as init, getApps as getAdminApps } from 'firebase-admin/app';
import { getStorage, type FirebaseStorage } from 'firebase/storage';
import { getFirestore } from 'firebase/firestore';
// import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional

const fbConfig = {
	apiKey: import.meta.env.VITE_API_KEY,
	authDomain: import.meta.env.VITE_AUTH_DOMAIN,
	projectId: import.meta.env.VITE_PROJECT_ID,
	storageBucket: import.meta.env.VITE_STORAGE_BUCKET,
	messagingSenderId: import.meta.env.VITE_MESSAGING_SENDER_ID,
	appId: import.meta.env.VITE_APP_ID,
	measurementId: import.meta.env.VITE_MEASUREMENT_ID
};

// const fbAdminConfig = {
// 	credential: import.meta.env.VITE_ADMIN_KEY,
// 	storageBucket: import.meta.env.VITE_STORAGE_BUCKET
// }

// Initialize Firebase
let fbApp: FirebaseApp | undefined;
//let fbAdmin: any;
let fbStorage: FirebaseStorage | undefined;
//let fbDB: any;
let fbDB: any;

if (!getApps().length) {
	if (!getApps().length){
		//fbAdmin = init(fbAdminConfig);
		fbApp = initializeApp(fbConfig);
		fbStorage = getStorage(fbApp);
		fbDB = getFirestore(fbApp);

	}
} else {
	fbApp = getApps()[0];
}

export { fbApp, fbDB, fbStorage };
