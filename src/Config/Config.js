import * as firebase from 'firebase'

import 'firebase/storage';
import 'firebase/firestore';
import 'firebase/auth'

// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyDw4zYAIkgJ5IxRosqa_E0wcN_3MBz0ftM",
    authDomain: "proyectoalpha-9bb45.firebaseapp.com",
    databaseURL: "https://proyectoalpha-9bb45-default-rtdb.firebaseio.com",
    projectId: "proyectoalpha-9bb45",
    storageBucket: "proyectoalpha-9bb45.appspot.com",
    messagingSenderId: "1064051475631",
    appId: "1:1064051475631:web:c75f712c352242dfa9005a",
    measurementId: "G-4K0CSJ6RP6"
};

firebase.initializeApp(firebaseConfig);

const auth = firebase.auth();
const db = firebase.firestore();
const storage = firebase.storage();

export { auth, db, storage }