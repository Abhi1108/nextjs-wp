import firebase from "firebase/app";
require("firebase/firestore");
require("firebase/auth");

const firebaseConfig = {
  apiKey: "AIzaSyCYNQDZ64k1EMkS9MyvlT_UjrB6jLkC0s0",
  authDomain: "whats-app-clone-cf382.firebaseapp.com",
  databaseURL: "https://whats-app-clone-cf382.firebaseio.com",
  projectId: "whats-app-clone-cf382",
  storageBucket: "whats-app-clone-cf382.appspot.com",
  messagingSenderId: "332682018297",
  appId: "1:332682018297:web:7ae6e00154bf3cacacd128",
  measurementId: "G-DPVB2M64D7",
};

const app = !firebase.apps.length
  ? firebase.initializeApp(firebaseConfig)
  : firebase.app();

const db = firebase.firestore();
const auth = firebase.auth();
const provider = new firebase.auth.GoogleAuthProvider();

export { db, auth, provider };
