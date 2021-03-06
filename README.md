# spike-nextjs-firebase

Sample code for Next.js and Firebase

## フォルダ構成

確認コマンド
`tree -a --dirsfirst -L 2 -I "node_modules|.git|dist|out|.next|ui-debug.log"`

<pre>
.
├── functions
│   ├── src
│   ├── .gitignore
│   ├── .prettierignore
│   ├── .prettierrc
│   ├── package.json
│   ├── tsconfig.json
│   └── tsconfig.prod.json
├── hosting
│   ├── public
│   ├── src
│   ├── .eslintrc.json
│   ├── .gitignore
│   ├── .prettierignore
│   ├── .prettierrc
│   └── package.json
├── .eslintrc.json
├── .firebaserc
├── .gitignore
├── README.md
├── firebase.json
├── package.json
└── yarn.lock
</pre>

### functions

Firebase Cloud Functions で行う処理をまとめたフォルダ

src/ 下に cloud function の処理を実装していき、index.ts 内で全て export する形にしている

- `yarn workspace functions build:dev` で ts ファイルを development 用にコンパイル
- `yarn workspace functions build:prod` で ts ファイルを production 用にコンパイル
- `yarn workspace functions serve` で ts ファイルをコンパイル && Firebase Cloud Functions の emulator を起動

### hosting

Firebase Hosting で serve する静的ファイルを、 Next.js を利用して作成するための処理をまとめたフォルダ

1. `yarn workspace hosting build:dev`で Next.js アプリを development 用にビルドし、静的ファイルを hosting/out/下に出力
1. `yarn workspace hosting serve`で上記の処理に加えて Firebase Hosting の emulator を起動

## 本リポジトリの利用方法

1. node, yarn を install

   Firebase Cloud Functions の [sdk がサポートしている node のバージョン](https://firebase.google.com/docs/functions/manage-functions?hl=ja#set_nodejs_version)は最高で 14(2021/9/18 現在)なので、v14 系を install する

1. `yarn install`を実行して依存パッケージを install
1. `yarn build:dev`で functions,hosting 下のファイルをコンパイル
1. `firebase functions:config:get > functions/.runtimeconfig.json` で Cloud Functions で定義されている環境変数を local に保存
1. `yarn serve`で Firebase Hosting, Cloud Functions の emulator を立ち上げる
