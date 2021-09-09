import { UserInputs } from './types'

export const isUserInputs = (arg: unknown): arg is UserInputs =>
  typeof arg === 'object' &&
  arg !== null &&
  'name' in arg &&
  'number1' in arg &&
  'number2' in arg
