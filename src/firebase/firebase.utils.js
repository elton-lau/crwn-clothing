import firebase from 'firebase/app';
import 'firebase/firestore'
import 'firebase/auth'

const config = {
    apiKey: "AIzaSyBLBL4kmbGj_YiaV2zN2KwoJjXII_vczec",
    authDomain: "crwn-db-2d0b8.firebaseapp.com",
    projectId: "crwn-db-2d0b8",
    storageBucket: "crwn-db-2d0b8.appspot.com",
    messagingSenderId: "521950750197",
    appId: "1:521950750197:web:91a5d980664760724cecbc",
    measurementId: "G-4918J75B9Y"
};
  
firebase.initializeApp(config)

export const createUserProfileDocument = async (userAuth, additionalData) => {
  if (!userAuth) return

  const userRef = firestore.doc(`users/${userAuth.uid}`)
    const snapshot = await userRef.get()
    if (!snapshot.exists) {
        const { displayName, email } = userAuth;
        const createdAt = new Date()

        try {
            await userRef.set({
                displayName,
                email,
                createdAt,
                ...additionalData
            })
        } catch (error) {
            console.log(`error creating user`, error.message)
        }  
    }

    return userRef
} 


export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider()
provider.setCustomParameters({ prompt: 'select_account' })
export const signInWithGoogle = () => auth.signInWithPopup(provider)

export default firebase;