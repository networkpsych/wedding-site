/*import { getStorage, ref, uploadBytesResumable } from "firebase/storage";

const currDate = new Date();
const storage = getStorage();


export const actions = {
    upload: async ({ request }) => {
        const data = await request.formData();
        const imageFile = data.get('file-upload');

        const imageRef = ref(storage, 'file-upload');
        const file = ref(storage, 'imgages/file.jpg');

        const metadata = {
            contentType: "image/jpg",
            dateUploaded: currDate.toString().slice(0,24)
        }

        const uploadTask = uploadBytesResumable(imageRef, file, metadata)


        uploadTask.on('state_changed', (snapshot) => {
            const progress = (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
            console.log(`Upload is ${progress}% done`);
            switch(snapshot.state) {
                case 'paused':
                    console.log('Upload in paused');
                    break;
                case 'running':
                    console.log('Upload is running');
                    break;
                
            }
            },
            (error) => {
                switch (error.code) {
                    case 'storage/unauthorized' :
            
                        break;
                    case 'storage/canceled' :
                        console.log('User cancelled upload');
                        break;
                    case 'storage/unknown' :
                        console.log('an unknown error occured');
                        break;
                }
            },
        )

        if (imageFile === null){
            return { error: 400, message: "File image was null" }
        }
        else {
            return { success: 200 }
        }
    }
}
*/

