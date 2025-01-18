
import { initializeApp } from "https://www.gstatic.com/firebasejs/11.2.0/firebase-app.js";
import{
    getAuth,
    createUserWithEmailAndPassword}from "https://www.gstatic.com/firebasejs/11.2.0/firebase-auth.js";

const firebaseConfig = {
  apiKey: "AIzaSyAIy1eZBCWR-885uAOK0KCBGEtFMPposNk",
  authDomain: "authentication-form-379fd.firebaseapp.com",
  projectId: "authentication-form-379fd",
  storageBucket: "authentication-form-379fd.firebasestorage.app",
  messagingSenderId: "583217669441",
  appId: "1:583217669441:web:d14f9a9f9e94b535106dc0",
  measurementId: "G-00WVGHZDSC"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const signup=() => {
    const email = document.getElementById("email").value;
    const password = document.getElementById("password").value;
if (email && password) {
    createUserWithEmailAndPassword(auth,email,password)
    .then((userCredentials) => {
        console.log(userCredentials);
    })
    .catch((error) => {
     console.log(error);
    })
}};
const button = document.getElementById("Signup");
button.addEventListener("click", signup);