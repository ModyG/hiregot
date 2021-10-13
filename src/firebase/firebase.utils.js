import firebase from 'firebase/compat/app';
import 'firebase/compat/firestore';
import 'firebase/compat/auth';

const config = {
    apiKey: "AIzaSyAqpzVUX4wcYuaeUo4nu3vv-zTqAE6n8lo",
    authDomain: "monkeyisland-c1cd6.firebaseapp.com",
    projectId: "monkeyisland-c1cd6",
    storageBucket: "monkeyisland-c1cd6.appspot.com",
    messagingSenderId: "1056124009422",
    appId: "1:1056124009422:web:b14ee70d267a7b7622c99f",
    measurementId: "G-X4KYWRLKT9"
  };

  firebase.initializeApp(config);

  export const auth = firebase.auth();
  export const firestore = firebase.firestore();

  const provider = new firebase.auth.GoogleAuthProvider();
  provider.setCustomParameters({ prompt: 'select_account'});
  export const signInWithGoogle = () => auth.signInWithPopup(provider);

  export default firebase;
