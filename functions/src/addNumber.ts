import * as functions from 'firebase-functions'
import corsLib from 'cors'
import { isUserInput } from './lib/util'
import { writeUserInput } from './lib/firebase'

export const addNumber = functions
  .region('asia-northeast1')
  .https.onRequest((req, res) => {
    functions.logger.info(`Request received!`)
    const cors = corsLib()
    cors(req, res, () => {
      if (isUserInput(req.body)) {
        const userInput = req.body
        writeUserInput(userInput)
        try {
          const answer = Number(userInput.number1) + Number(userInput.number2)
          res.status(200).json({ answer: answer })
          functions.logger.info(`The answer is ${answer}`)
        } catch (e) {
          res.status(400).json('Invalid Request!')
          functions.logger.info(`Invalid Request!`)
        }
      } else {
        res.status(400).json('Invalid Request!!')
        functions.logger.info(`Invalid Request!!`)
      }
    })
  })
