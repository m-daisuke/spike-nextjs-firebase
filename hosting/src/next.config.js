/** @type {import('next').NextConfig} */
const isProd = process.env.NODE_ENV === 'production'
module.exports = {
  reactStrictMode: true,
  distDir: '../.next',
  env: {
    API_URL: isProd
      ? 'https://asia-northeast1-spike-nextjs-firebase.cloudfunctions.net'
      : 'http://localhost:5001/spike-nextjs-firebase/asia-northeast1',
  },
}
