// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getAuth, GoogleAuthProvider} from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyD2YKMPxKqGlXUlROUulMny2Mv2pMkvm0k",
  authDomain: "news-01-paper.firebaseapp.com",
  databaseURL: "https://news-01-paper-default-rtdb.firebaseio.com",
  projectId: "news-01-paper",
  storageBucket: "news-01-paper.appspot.com",
  messagingSenderId: "144642394067",
  appId: "1:144642394067:web:1b2ad05404d504f8801126"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app)
const provider = new GoogleAuthProvider();
export {auth, provider};




// const [value, setValue] = useState('')
    // const handleClick = () => {
    //     signInWithPopup(auth, provider).then(data => {
    //         setValue(data.user.email)
    //         localStorage.setItem("email", data.user.email)

    //     })
    // }