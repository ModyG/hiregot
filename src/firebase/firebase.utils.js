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

export const createUserProfileDocument = async (userAuth, additionalData) => {
  if (!userAuth) return;

  const userRef = firestore.doc(`users/${userAuth.uid}`);

  const snapShot = await userRef.get();

  if (!snapShot.exists) {
    const { displayName, email } = userAuth;
    const createdAt = new Date();
    try {
      await userRef.set({
        displayName,
        email,
        createdAt,
        ...additionalData
      });
    } catch (error) {
      console.log('error creating user', error.message);
    }
  }

  return userRef;
};

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: 'select_account' });
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;