import { initializeApp } from "firebase/app"
import { getFirestore } from "firebase/firebase-firestore"

const firebaseConfig = {
  apiKey: "AIzaSyC26V3IMtNd0qlbmXYoDBIUfEkjb-0Y0Ds",
  authDomain: "e-shop-c5779.firebaseapp.com",
  projectId: "e-shop-c5779",
  storageBucket: "e-shop-c5779.appspot.com",
  messagingSenderId: "588791907825",
  appId: "1:588791907825:web:ce6be050336390f2e6b050",
  measurementId: "G-5PP51VE3NW",
}

const app = initializeApp(firebaseConfig)
export const db = getFirestore(app)
