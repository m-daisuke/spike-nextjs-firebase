import type {
  NextPage,
  GetServerSideProps,
  InferGetServerSidePropsType,
} from 'next'
import Link from 'next/link'

const Result: NextPage = ({
  answer,
}: InferGetServerSidePropsType<typeof getServerSideProps>) => {
  return (
    <>
      <p>Result Page!!</p>
      <p>The answer is {answer}</p>
      <Link href="/">
        <a>Home</a>
      </Link>
    </>
  )
}

export const getServerSideProps: GetServerSideProps = async (context) => {
  const answer = context.query.answer
  return {
    props: {
      answer,
    },
  }
}

export default Result
