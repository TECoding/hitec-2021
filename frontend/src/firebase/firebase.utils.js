import firebase from 'firebase/app';
import 'firebase/firestore';

// Config KEY
const config = {
  apiKey: "AIzaSyAS5h9tKBsXucVEeKBHulZWdonnVYW27R4",
  authDomain: "hi-tec-7faf3.firebaseapp.com",
  projectId: "hi-tec-7faf3",
  storageBucket: "hi-tec-7faf3.appspot.com",
  messagingSenderId: "718247724123",
  appId: "1:718247724123:web:2573c7dd673704567eab7e",
  measurementId: "G-174PT4BPEV",
};

// Add Document funciton
/*
    * How to use it?
    1.- Import it
    import { createQuestionDocument } from '../firebase/firebase.utils';

    2.- Call it anywhere you like
    createQuestionDocument('<Event Name: String>');
*/
export const createQuestionDocument = (answer) => {
    if (answer.length === 0) return;

    firestore
      .collection("questions")
      .add({
        answer: answer,
        number: 7,
        year: "2021",
      })
      .then((docRef) => {
        console.log("Document written with ID: ", docRef.id);
      })
      .catch((error) => {
        console.error("Error adding document: ", error);
      });
};

firebase.initializeApp(config);

export const firestore = firebase.firestore();

export default firebase;