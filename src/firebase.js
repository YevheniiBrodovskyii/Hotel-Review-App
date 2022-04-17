// import { initializeApp } from "https://www.gstatic.com/firebasejs/9.6.0/firebase-app.js";
// import { getFirestore, collection, getDocs, addDoc } from "https://www.gstatic.com/firebasejs/9.6.0/firebase-firestore.js";
// import { getAuth, signInWithEmailAndPassword, createUserWithEmailAndPassword, onAuthStateChanged, signOut  } from "https://www.gstatic.com/firebasejs/9.6.0/firebase-auth.js";

//     const firebaseConfig = {
//         apiKey: "AIzaSyCHr3-x82i4RcGewtRs3XQ02Ps15Vm6ukQ",
//         authDomain: "webapp-48b9a.firebaseapp.com",
//         projectId: "webapp-48b9a",
//         storageBucket: "webapp-48b9a.appspot.com",
//         messagingSenderId: "889223227604",
//         appId: "1:889223227604:web:aca93f8aa7b031fdfe7341"
//       };
      
//     const app = initializeApp(firebaseConfig);
//     const db = getFirestore(app);
//     const auth = getAuth(app);


//       const querySnapshot = await getDocs(collection(db, "reviews"));
//       querySnapshot.forEach((doc) => {
//         console.log(doc.data()["hotel_name"]);
//       });


// async function addReview(event) {
//     event.preventDefault()
//     const hotel_name = document.getElementById("hotel_name").value
//     const docRef = await addDoc(collection(db, "reviews"), {
//         hotel_name: hotel_name,
//         author: "Test2"
//       });
//     window.location.reload()

// }
// const form = document.getElementById('form')
// form.addEventListener("submit", addReview)



// onAuthStateChanged(auth, (user) =>{
//     console.log(user.email)
// })

// function register(event){
//     event.preventDefault()
//     const email = registerForm['email'].value
//     const password = registerForm['password'].value
//     createUserWithEmailAndPassword(auth, email, password)
// }

// function login(event){
//     event.preventDefault()
//     const email = loginForm['login_email'].value
//     const password = loginForm["login_password"].value
//     signInWithEmailAndPassword(auth, email, password)
// }

// function logout(event){
//     signOut(auth)
// }
