import { Dispatch, SetStateAction, FC } from 'react'
import {
  Grid,
  Typography,
  TextField,
  Button,
  Box,
  InputAdornment,
} from '@mui/material'
import { useForm, Controller, Control, FormState } from 'react-hook-form'
import { UserInputs } from 'common'
import { Steps } from '../lib/types'

type CustomInputProps = {
  name: keyof UserInputs
  unit: string
  control: Control<UserInputs, object>
  formState: FormState<UserInputs>
}

const CustomInput: FC<CustomInputProps> = (props) => {
  const errors = props.formState.errors
  return (
    <Controller
      control={props.control}
      name={props.name}
      rules={{ required: { value: true, message: 'Invalid input' } }}
      render={({ field }) => (
        <TextField
          {...field}
          label={field.name}
          fullWidth
          variant="standard"
          error={Boolean(errors[field.name])}
          helperText={errors[field.name] && errors[field.name]?.message}
          InputProps={{
            endAdornment: (
              <InputAdornment position="end">{props.unit}</InputAdornment>
            ),
          }}
        />
      )}
    />
  )
}

type UserInputFormProps = {
  userInputs: UserInputs
  setUserInputs: Dispatch<SetStateAction<UserInputs>>
  setStep: Dispatch<SetStateAction<Steps>>
}

export const UserInputForm: FC<UserInputFormProps> = (props) => {
  const { control, handleSubmit, formState } = useForm<UserInputs>({
    mode: 'onChange',
    reValidateMode: 'onChange',
    defaultValues: props.userInputs,
  })

  const onSubmit = (data: UserInputs) => {
    props.setUserInputs({ ...data })
    props.setStep('内容確認')
  }
  return (
    <>
      <Typography variant="h6" gutterBottom>
        情報入力
      </Typography>
      <form onSubmit={handleSubmit(onSubmit)}>
        <Grid container spacing={3}>
          <Grid item xs={12}>
            <CustomInput
              name="name"
              unit="単位"
              control={control}
              formState={formState}
            />
          </Grid>
          <Grid item xs={12}>
            <CustomInput
              name="number1"
              unit="m"
              control={control}
              formState={formState}
            />
          </Grid>
          <Grid item xs={12}>
            <CustomInput
              name="number2"
              unit="㎡"
              control={control}
              formState={formState}
            />
          </Grid>
        </Grid>
        <Box sx={{ display: 'flex', justifyContent: 'center' }}>
          <Button type="submit" variant="contained" sx={{ mt: 3 }}>
            入力内容の確認
          </Button>
        </Box>
      </form>
    </>
  )
}
