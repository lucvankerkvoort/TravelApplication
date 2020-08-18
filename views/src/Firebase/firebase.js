import app from "firebase/app";
import "firebase/auth";
import "firebase/storage";
import "firebase/firestore";

// const config = {
//   apiKey: "AIzaSyD2kq3RcSEUQiOe8k31U9WzCilbDzv7F3A",
//   authDomain: "locals-568f6.firebaseapp.com",
//   databaseURL: "https://locals-568f6.firebaseio.com",
//   projectId: "locals-568f6",
//   storageBucket: "locals-568f6.appspot.com",
//   messagingSenderId: 42138978699,
// };

const config = {
  apiKey: process.env.REACT_APP_API_KEY,
  authDomain: process.env.REACT_APP_AUTH_DOMAIN,
  databaseURL: process.env.REACT_APP_DATABASE_URL,
  projectId: process.env.REACT_APP_PROJECT_ID,
  storageBucket: process.env.REACT_APP_STORAGE_BUCKET,
  messagingSenderId: process.env.REACT_APP_MESSAGING_SENDER_ID,
};

app.initializeApp(config);
// app.initializeApp(config);

const db = app.firestore();
const storage = app.storage();

class Firebase {
  constructor() {
    this.auth = app.auth();
  }
  doCreateUserWithEmailAndPassword = (email, password) =>
    this.auth.createUserWithEmailAndPassword(email, password);

  doSignInWithEmailAndPassword = (email, password) =>
    this.auth.signInWithEmailAndPassword(email, password);

  doSignOut = () => this.auth.signOut();

  doPasswordReset = (email) => this.auth.sendPasswordResetEmail(email);

  doPasswordUpdate = (password) =>
    this.auth.currentUser.updatePassword(password);
}

export default Firebase;

export { storage, db };
