export type Steps = '情報入力' | '内容確認' | '結果表示'

export type UserInput = {
  name: string
  number1: number | '' // 初期値としてnull | undefinedを入れてしまうとuncontrolled input warningが出てしまうため空文字('')を入れる
  number2: number | ''
}
