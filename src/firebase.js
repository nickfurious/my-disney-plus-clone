import firebase from "firebase";

const firebaseConfig = {
  apiKey: "AIzaSyDmKB3CbO_ORAKUawsiBaVe2sknHzeQXlE",
  authDomain: "instagram-clone-react-760ef.firebaseapp.com",
  databaseURL:
    "https://instagram-clone-react-760ef-default-rtdb.firebaseio.com",
  projectId: "instagram-clone-react-760ef",
  storageBucket: "instagram-clone-react-760ef.appspot.com",
  messagingSenderId: "625404884337",
  appId: "1:625404884337:web:d4e7978a8eba05e414b2d0",
  measurementId: "G-W5JLSHMDK0",
};

const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
const auth = firebase.auth();
const provider = new firebase.auth.GoogleAuthProvider();
const storage = firebase.storage();

export { auth, provider, storage };
export default db;
