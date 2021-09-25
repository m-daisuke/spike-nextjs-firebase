import { initializeApp } from 'firebase/app'
import {
  getFirestore,
  connectFirestoreEmulator,
  doc,
  setDoc,
} from 'firebase/firestore/lite'
import { UserInput } from './types'
import * as functions from 'firebase-functions'

const firebaseConfig = {
  apiKey: functions.config().api.key,
  projectId: 'spike-nextjs-firebase',
}

const app = initializeApp(firebaseConfig)

const db = getFirestore(app)
if (functions.config().api.is_local) {
  connectFirestoreEmulator(db, 'localhost', 8080)
}

export const writeUserInput = async (userInput: UserInput): Promise<void> => {
  const now = Date.now().toString()
  setDoc(doc(db, 'UserInput', now), {
    name: userInput.name,
    number1: userInput.number1,
    number2: userInput.number2,
  })
}
