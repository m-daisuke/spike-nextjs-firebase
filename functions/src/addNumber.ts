import * as functions from 'firebase-functions'
import * as corsLib from 'cors'

export const addNumber = functions
  .region('asia-northeast1')
  .https.onRequest((req, res) => {
    functions.logger.info(`Request received!`)
    const cors = corsLib()
    cors(req, res, () => {
      if ('number1' in req.body && 'number2' in req.body) {
        const userInputs = req.body
        try {
          const answer = Number(userInputs.number1) + Number(userInputs.number2)
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
