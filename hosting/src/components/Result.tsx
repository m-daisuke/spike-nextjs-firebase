import { FC, useEffect, useState } from 'react'
import { Typography, Button, Box } from '@mui/material'
import { Steps, UserInput } from '../lib/types'

type Props = {
  userInput: UserInput
  setStep: React.Dispatch<React.SetStateAction<Steps>>
}

export const Result: FC<Props> = (props) => {
  const [answer, setAnswer] = useState('')
  const fetchData = async () => {
    const response = await fetch(process.env.API_URL + '/addNumber', {
      method: 'POST',
      mode: 'cors',
      cache: 'no-cache',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(props.userInput),
    })
    const resJson = await response.json()
    console.log(resJson.answer)
    if ('answer' in resJson) {
      setAnswer(resJson.answer)
    }
  }
  useEffect(() => {
    fetchData()
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])
  return (
    <>
      <Typography variant="h6" gutterBottom>
        結果表示
      </Typography>
      <p>The answer is {answer}</p>
      <Box sx={{ display: 'flex', justifyContent: 'center' }}>
        <Button
          variant="contained"
          onClick={() => {
            props.setStep('情報入力')
          }}
          sx={{ mt: 3 }}
        >
          Topに戻る
        </Button>
      </Box>
    </>
  )
}
