import { Dispatch, SetStateAction, FC } from 'react'
import {
  Typography,
  Grid,
  TextField,
  Button,
  Box,
  InputAdornment,
} from '@mui/material'
import { Steps, UserInput } from '../lib/types'

type Props = {
  userInput: UserInput
  setStep: Dispatch<SetStateAction<Steps>>
}

export const Review: FC<Props> = (props) => {
  console.log(props.userInput)
  return (
    <>
      <Typography variant="h6" gutterBottom>
        内容確認
      </Typography>
      <Grid container spacing={3}>
        <Grid item xs={12}>
          <TextField
            label="name"
            fullWidth
            variant="standard"
            value={props.userInput.name}
            InputProps={{
              readOnly: true,
              endAdornment: (
                <InputAdornment position="end">単位</InputAdornment>
              ),
            }}
          />
        </Grid>
        <Grid item xs={12}>
          <TextField
            label="number1"
            fullWidth
            variant="standard"
            value={props.userInput.number1}
            InputProps={{
              readOnly: true,
              endAdornment: <InputAdornment position="end">m</InputAdornment>,
            }}
          />
        </Grid>
        <Grid item xs={12}>
          <TextField
            label="number2"
            fullWidth
            variant="standard"
            value={props.userInput.number2}
            InputProps={{
              readOnly: true,
              endAdornment: <InputAdornment position="end">㎡</InputAdornment>,
            }}
          />
        </Grid>
      </Grid>
      <Box sx={{ display: 'flex', justifyContent: 'center' }}>
        <Button
          variant="contained"
          onClick={() => {
            props.setStep('情報入力')
          }}
          sx={{ mt: 3 }}
        >
          入力内容の修正
        </Button>
        <Button
          variant="contained"
          onClick={() => {
            props.setStep('結果表示')
          }}
          sx={{ mt: 3, ml: 1 }}
        >
          確定
        </Button>
      </Box>
    </>
  )
}
