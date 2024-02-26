import { db, auth } from './firebase';
import { collection, doc, getDoc, getDocs, query, where } from "firebase/firestore";
import { createUserWithEmailAndPassword, signInWithEmailAndPassword } from "firebase/auth";

const signUpUser = async (email, password) => {
    try {
        const userCredential = await createUserWithEmailAndPassword(auth, email, password);
        // Signed up 
        const user = userCredential.user;
        return user;
    } catch (error) {
        const errorCode = error.code;
        const errorMessage = error.message;
        console.error(errorCode, errorMessage);
    }
}

const signInUser = async (userCredentials) => {
    const email = userCredentials.email;
    const password = userCredentials.password;

    try {
        const userCredential = await signInWithEmailAndPassword(auth, email, password);
        // Signed in
        console.log('user signed in');
        return ({ error: undefined });
    } catch (error) {
        const errorCode = error.code;
        const errorMessage = error.message;
        console.error(errorCode, errorMessage);
        return ({ error: errorMessage });
    }
}

// temporary to upload questions to the database
// const uploadData = async () => {
//     const data = [
//         {
//             id: 180,
//             question: "What's a lesson you learned from a stranger?",
//             usedbefore: false
//         },
//         // format continues
//     ];

//     console.log('uploaddata called');

//     const batch = writeBatch(db);

//     data.forEach((item) => {
//         const docRef = doc(collection(db, "qotd")); // automatically generate unique id
//         batch.set(docRef, item);
//     });

//     try {
//         await batch.commit();
//         console.log('Data uploaded successfully.');
//     } catch (error) {
//         console.error('Error uploading data:', error);
//     }
// };

const getQotd = async (questionId) => {
    const qotdCollection = collection(db, "qotd");
    const q = query(qotdCollection, where("id", "==", questionId));

    const querySnapshot = await getDocs(q);

    if (!querySnapshot.empty) {
        const doc = querySnapshot.docs[0];
        console.log("Question:", doc.data().question);
        return doc.data().question;
    } else {
        console.log("No such document!");
        return null;
    }
}

// const addNote = async (userId) => {
//     const noteCollection = collection(db, "notes");
//     await addDoc(noteCollection, note);
// }

export {
    getQotd,
    signUpUser,
    signInUser
};