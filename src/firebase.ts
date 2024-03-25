import { initializeApp } from 'firebase/app';
import { getFirestore, collection, getDocs } from 'firebase/firestore/lite';
import { getStorage } from 'firebase/storage';
// Follow this pattern to import other Firebase services
// import { } from 'firebase/<service>';

// TODO: Replace the following with your app's Firebase project configuration
const firebaseConfig = {
  apiKey: "AIzaSyCEXLBj3MqQi4DmEtt_kvdVNhBBp6E88kQ",
  authDomain: "travelpal-bt3103.firebaseapp.com",
  projectId: "travelpal-bt3103",
  storageBucket: "travelpal-bt3103.appspot.com",
  messagingSenderId: "356625691288",
  appId: "1:356625691288:web:0547868dfe171ffa8dd6ed"
};


const firebaseApp = initializeApp(firebaseConfig);

const db = getFirestore(firebaseApp)
export const storage = getStorage(firebaseApp)
export default { firebaseApp, db, storage }
// export default firebaseApp
