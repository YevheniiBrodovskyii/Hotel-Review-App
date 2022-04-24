import { initializeApp } from "https://www.gstatic.com/firebasejs/9.6.0/firebase-app.js";
import { getFirestore } from "https://www.gstatic.com/firebasejs/9.6.0/firebase-firestore.js";
import { getAuth } from "https://www.gstatic.com/firebasejs/9.6.0/firebase-auth.js";
import { getStorage  } from "https://www.gstatic.com/firebasejs/9.6.0/firebase-storage.js";


const firebaseConfig = {
  apiKey: "AIzaSyCO-E6PrAYku1hc6qS9jmfT66aIgNfyNgI",
  authDomain: "hotelreviewapp2.firebaseapp.com",
  projectId: "hotelreviewapp2",
  storageBucket: "hotelreviewapp2.appspot.com",
  messagingSenderId: "679131312916",
  appId: "1:679131312916:web:602c8a4da4b2600d2c8801"
};
  
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);
const auth = getAuth(app);
const storage = getStorage(app);

export {firebaseConfig, app, db, auth, storage};