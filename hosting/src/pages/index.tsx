import type { NextPage } from 'next'
import { Dispatch, SetStateAction, useState } from 'react'
import {
  CssBaseline,
  AppBar,
  Container,
  Toolbar,
  Paper,
  Stepper,
  Step,
  StepLabel,
  Typography,
  createTheme,
  ThemeProvider,
} from '@mui/material'
import { UserInputForm } from '../components/UserInputForm'
import { Review } from '../components/Review'
import { Result } from '../components/Result'
import { Steps, UserInput } from '../lib/types'

const steps: Steps[] = ['情報入力', '内容確認', '結果表示'] // indexが若い順に左から表示する

const getStepContent = (
  step: Steps,
  userInput: UserInput,
  setUserInput: Dispatch<SetStateAction<UserInput>>,
  setStep: Dispatch<SetStateAction<Steps>>
) => {
  switch (step) {
    case '情報入力':
      return (
        <UserInputForm
          userInput={userInput}
          setUserInput={setUserInput}
          setStep={setStep}
        />
      )
    case '内容確認':
      return <Review userInput={userInput} setStep={setStep} />
    case '結果表示':
      return <Result userInput={userInput} setStep={setStep} />
    default:
      // eslint-disable-next-line no-unused-vars
      const _exhaustiveCheck: never = step
  }
}

const theme = createTheme()

const Home: NextPage = () => {
  const [activeStep, setActiveStep] = useState<Steps>('情報入力')
  const [userInput, setUserInput] = useState<UserInput>({
    name: '',
    number1: '',
    number2: '',
  })

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <AppBar
        position="absolute"
        color="default"
        elevation={0}
        sx={{
          position: 'relative',
          borderBottom: (t) => `1px solid ${t.palette.divider}`,
        }}
      >
        <Toolbar>
          <Typography variant="h6" color="inherit" noWrap>
            Sample
          </Typography>
        </Toolbar>
      </AppBar>
      <Container component="main" maxWidth="sm" sx={{ mb: 4 }}>
        <Paper
          variant="outlined"
          sx={{ my: { xs: 3, md: 6 }, p: { xs: 2, md: 3 } }}
        >
          <Stepper activeStep={steps.indexOf(activeStep)} sx={{ pt: 3, pb: 5 }}>
            {steps.map((label) => (
              <Step key={label}>
                <StepLabel>{label}</StepLabel>
              </Step>
            ))}
          </Stepper>
          <>
            {getStepContent(activeStep, userInput, setUserInput, setActiveStep)}
          </>
        </Paper>
      </Container>
    </ThemeProvider>
  )
}

export default Home
