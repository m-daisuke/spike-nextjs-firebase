import { initializeApp } from 'firebase/app'
import {
  getFirestore,
  collection,
  doc,
  getDocs,
  setDoc,
} from 'firebase/firestore/lite'
import { UserInputs } from '../lib/types'

const firebaseConfig = {
  apiKey: process.env.PRIVATE_KEY,
  projectId: 'nextjs-firebase-sample-8d2aa',
}

const app = initializeApp(firebaseConfig)
const db = getFirestore(app)

export const getTests = async () => {
  const testsCol = collection(db, 'tests')
  const testSnapshot = await getDocs(testsCol)
  const testList = testSnapshot.docs.map((doc) => doc.data())
  return testList
}

export const setTests = async (userInputs: UserInputs) => {
  const now = Date.now().toString()
  setDoc(doc(db, 'tests', now), {
    name: userInputs.name,
    number1: userInputs.number1,
    number2: userInputs.number2,
  })
}
