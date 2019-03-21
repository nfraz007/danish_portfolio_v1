import * as firebase from 'firebase';
import firestore from 'firebase/firestore'

const settings = {timestampsInSnapshots: true};

const config = {
    apiKey: "AIzaSyCaf9YPdsMY2Ig_j2vWbpl9EVgVOOvkKWk",
    authDomain: "gouherdanish-d91ea.firebaseapp.com",
    databaseURL: "https://gouherdanish-d91ea.firebaseio.com",
    projectId: "gouherdanish-d91ea",
    storageBucket: "gouherdanish-d91ea.appspot.com",
    messagingSenderId: "811281262218"
};
const db = firebase.initializeApp(config).firestore();

export default db;