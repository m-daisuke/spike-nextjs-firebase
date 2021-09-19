import type { NextPage } from 'next'
import Head from 'next/head'
import { useRouter } from 'next/router'
import { FormEvent, useState } from 'react'
import { Container, Row, Button, Form, Col } from 'react-bootstrap'
import { UserInputs } from 'common'

const Home: NextPage = () => {
  const [validated, setValidated] = useState(false)
  const [state, setState] = useState<UserInputs>({
    name: '',
    number1: '',
    number2: '',
  })

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setState({ ...state, [event.target.id]: event.target.value })
  }

  const router = useRouter()

  const handleSubmit = async (event: FormEvent<HTMLFormElement>) => {
    setValidated(true)
    event.preventDefault()
    event.stopPropagation()
    const form = event.currentTarget
    if (form.checkValidity()) {
      const response = await fetch(process.env.API_URL + '/addNumber', {
        method: 'POST',
        mode: 'cors',
        cache: 'no-cache',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(state),
      })
      const resJson = await response.json()
      if ('answer' in (await resJson)) {
        router.push({
          pathname: '/result',
          query: { answer: resJson.answer },
        })
      }
    }
  }

  return (
    <Container className="container">
      <Head>
        <title>ReactJS with react-bootstrap</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Form noValidate validated={validated} onSubmit={handleSubmit}>
        <Form.Group controlId="name" className="mb-3">
          <Row className="justify-content-center">
            <Col md="2">
              <Form.Label className="m-0 align-middle">名前</Form.Label>
            </Col>
            <Col md="6">
              <Form.Control
                type="text"
                placeholder="Enter name"
                required
                value={state.name}
                onChange={handleChange}
              />
              <Form.Control.Feedback type="invalid">
                名前を入力してください
              </Form.Control.Feedback>
            </Col>
          </Row>
        </Form.Group>
        <Row className="justify-content-center mb-3">
          <Col md="4">
            <Form.Group controlId="number1">
              <Row>
                <Col>
                  <Form.Label>数字1</Form.Label>
                </Col>
                <Col>
                  <Form.Control
                    type="number"
                    placeholder="Enter number1"
                    required
                    value={state.number1}
                    onChange={handleChange}
                  />
                  <Form.Control.Feedback type="invalid">
                    数字を入力してください
                  </Form.Control.Feedback>
                </Col>
              </Row>
            </Form.Group>
          </Col>
          <Col md="4">
            <Form.Group controlId="number2">
              <Row>
                <Col>
                  <Form.Label>数字2</Form.Label>
                </Col>
                <Col>
                  <Form.Control
                    type="number"
                    placeholder="Enter number2"
                    required
                    value={state.number2}
                    onChange={handleChange}
                  />
                  <Form.Control.Feedback type="invalid">
                    数字を入力してください
                  </Form.Control.Feedback>
                </Col>
              </Row>
            </Form.Group>
          </Col>
        </Row>
        <Button type="submit">送信</Button>
      </Form>
    </Container>
  )
}

export default Home
