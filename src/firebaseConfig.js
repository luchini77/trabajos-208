import { initializeApp } from "firebase/app";
import { getAuth } from 'firebase/auth';

const firebaseConfig = {
  apiKey: "AIzaSyAd9QQQXtEGO_GFUm55gaeveTBs-4dWMk4",
  authDomain: "trabajos-208.firebaseapp.com",
  projectId: "trabajos-208",
  storageBucket: "trabajos-208.appspot.com",
  messagingSenderId: "1017198006291",
  appId: "1:1017198006291:web:2f30f6980a8c57664cafe6"
};


initializeApp(firebaseConfig);

const auth = getAuth();

export { auth }