import type { NextPage } from 'next'
import Head from 'next/head'
import { FormEvent, useState } from 'react'
import { Container, Row, Button, Form, Col } from 'react-bootstrap'

const Home: NextPage = () => {
  const [validated, setValidated] = useState(false)

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    const form = event.currentTarget
    if (!form.checkValidity()) {
      event.preventDefault()
      event.stopPropagation()
    }
    setValidated(true)
  }

  return (
    <Container className="container">
      <Head>
        <title>ReactJS with react-bootstrap</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Form noValidate validated={validated} onSubmit={handleSubmit}>
        <Form.Group controlId="yourname" className="mb-3">
          <Row className="justify-content-center">
            <Col md="2">
              <Form.Label>名前</Form.Label>
            </Col>
            <Col md="6">
              <Form.Control type="text" placeholder="Enter name" required />
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
