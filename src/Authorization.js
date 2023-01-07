import {
  createUserWithEmailAndPassword,
  updateProfile,
  signInWithEmailAndPassword,
} from 'firebase/auth'
import { setDoc, doc } from 'firebase/firestore'

import { auth, db } from './firebase.config'

import { toast } from 'react-toastify'

export const createEmailAccount = async (user) => {
  const { email, password, username } = user

  try {
    const userCredentials = await createUserWithEmailAndPassword(
      auth,
      email,
      password
    )
    const userObject = userCredentials.user

    // update profile
    updateProfile(userObject, {
      displayName: username,
    })

    //store user data in firestore database
    setDoc(doc(db, 'users', userObject.uid), {
      uid: userObject.uid,
      username,
      email,
    })

    toast.success('Account created succesfully')
    return userObject
  } catch (error) {
    toast.error(error.message)
  }
}

export const logInWithEmail = async (email, password) => {
  try {
    const userCredentials = await signInWithEmailAndPassword(
      auth,
      email,
      password
    )
    const user = userCredentials.user

    return user
  } catch (error) {
    toast.error(error.message)
  }
}
