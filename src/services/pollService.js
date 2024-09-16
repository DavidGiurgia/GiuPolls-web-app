import { collection, addDoc, getDocs } from 'firebase/firestore';
import { db } from './firebase'; // Importă configurarea Firebase

// Funcție pentru a adăuga un poll
export const addPoll = async (poll) => {
  try {
    const docRef = await addDoc(collection(db, 'polls'), poll); // Adaugă un poll în colecția 'polls'
    console.log("Poll added with ID: ", docRef.id);
    return docRef;
  } catch (e) {
    console.error("Error adding document: ", e);
  }
};

// Funcție pentru a obține toate poll-urile
export const getPolls = async () => {
  try {
    const querySnapshot = await getDocs(collection(db, 'polls'));
    let polls = [];
    querySnapshot.forEach((doc) => {
      polls.push({ id: doc.id, ...doc.data() });
    });
    return polls; // Returnează un array cu poll-urile
  } catch (e) {
    console.error("Error fetching polls: ", e);
  }
};
