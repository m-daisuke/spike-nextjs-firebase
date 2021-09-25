import { UserInput } from './types'
export const isUserInput = (arg: unknown): arg is UserInput =>
  typeof arg === 'object' &&
  arg !== null &&
  'name' in arg &&
  'number1' in arg &&
  'number2' in arg
