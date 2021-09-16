import type { NextPage } from 'next'
import { useRouter } from 'next/router'
import Link from 'next/link'

const Result: NextPage = () => {
  const router = useRouter()
  const { answer } = router.query
  return (
    <div className="text-center">
      <p>Result Page!!</p>
      <p>The answer is {answer}</p>
      <Link href="/">
        <a>Home</a>
      </Link>
    </div>
  )
}

export default Result
