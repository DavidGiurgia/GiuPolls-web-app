import { initializeApp } from 'firebase/app';
import { getFirestore } from 'firebase/firestore';

const firebaseConfig = {
    apiKey: "AIzaSyAfZIY_dgMOV5wPd1J_b7HmJA79oqqlLUo",
    authDomain: "giupolls.firebaseapp.com",
    projectId: "giupolls",
    storageBucket: "giupolls.appspot.com",
    messagingSenderId: "464654102051",
    appId: "1:464654102051:web:94c2d75c91f7bcffb74b96",
    measurementId: "G-0XCR5KQ8HW"
  };

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

export { db };
