export type Data = {
  answer: number
}

export type UserInputs = {
  name: string
  number1: number | '' // 初期値としてnull | undefinedを入れてしまうとuncontrolled input warningが出てしまうため空文字('')を入れる
  number2: number | ''
}
