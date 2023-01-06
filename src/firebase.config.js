import { initializeApp } from 'firebase/app'
import { getAuth } from 'firebase/auth'
import { getFirestore } from 'firebase/firestore'
import { getStorage } from 'firebase/storage'

const firebaseConfig = {
  apiKey: 'AIzaSyADemnoKJvn6EYJBz5WO4zfgRLofwbnGdA',
  authDomain: 'maltistores-79782.firebaseapp.com',
  projectId: 'maltistores-79782',
  storageBucket: 'maltistores-79782.appspot.com',
  messagingSenderId: '377232904956',
  appId: '1:377232904956:web:9ca522ba2b0ca6cd557d79',
}

// Initialize Firebase
const app = initializeApp(firebaseConfig)
export const auth = getAuth(app)

export const db = getFirestore(app)
export const storage = getStorage(app)

export default app
