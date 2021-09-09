import type { NextApiRequest, NextApiResponse } from 'next'
import { Data } from '../../lib/types'
import { isUserInputs } from '../../lib/utils'

export const handler = (req: NextApiRequest, res: NextApiResponse<Data>) => {
  if (req.method === 'POST' && isUserInputs(req.body)) {
    const userInputs = req.body
    try {
      const answer = Number(userInputs.number1) + Number(userInputs.number2)
      res.status(200).json({ answer: answer })
    } catch (e) {
      res.status(400)
    }
  }
}

export default handler
