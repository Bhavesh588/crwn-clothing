import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

const config = {
    apiKey: "AIzaSyCrdSBGpit0VDu_OEcrE3iQKteelEnEV-s",
    authDomain: "crwn-clothing-db-fa6f7.firebaseapp.com",
    databaseURL: "https://crwn-clothing-db-fa6f7.firebaseio.com",
    projectId: "crwn-clothing-db-fa6f7",
    storageBucket: "crwn-clothing-db-fa6f7.appspot.com",
    messagingSenderId: "125256518660",
    appId: "1:125256518660:web:a6165e49739da9bd297951",
    measurementId: "G-GZQRSVC9S9"
};

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: 'select_account' });
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;