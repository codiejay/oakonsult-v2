import firebase, { auth, firestore } from "./config";

export const OnCreateUserProfileDocument = async (userAuth, additionalData) => {
  if (!userAuth) return;
  const userRef = firestore.doc(`auths/${userAuth.uid}`);
  const snapShot = await userRef.get();
  if (!snapShot.exists) {
    const { displayName, email, uid } = userAuth;
    const createdAt = new Date();
    try {
      await userRef.set({
        id: uid,
        displayName,
        email,
        createdAt,
        photoURL: `https://api.adorable.io/avatars/285/${uid}.png`,
        role: "user",
        ...additionalData,
      });
      console.log("Success");
    } catch (error) {
      console.log("error creating user", error.message);
    }
  }
  return userRef;
};

const googleProvider = new firebase.auth.GoogleAuthProvider();
googleProvider.setCustomParameters({
  prompt: "select_account",
});

export const signInWithGoogle = () => auth.signInWithPopup(googleProvider);
