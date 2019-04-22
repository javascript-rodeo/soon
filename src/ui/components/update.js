import React, { useState } from 'react'
import { Form, EmailInput, Button } from 'react-form-elements'

const encode = data => {
  return Object.keys(data)
    .map(key => encodeURIComponent(key) + '=' + encodeURIComponent(data[key]))
    .join('&')
}
const UpdateForm = () => {
  const [result, setResult] = useState(false)

  return (
    <div>
      <div>To keep updated sign up to our newsletter</div>
      <Form
        name="update"
        hidden={result}
        onSubmit={values => {
          console.info('update', values)
          fetch('/', {
            method: 'POST',
            headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
            body: encode({ 'form-name': 'update', ...values }),
          })
            .then(() => {
              setResult(true)
            })
            .catch(error => {
              console.error('post error', error)
            })
        }}
      >
        <EmailInput
          name="email"
          label=""
          initialValue=""
          placeholder="email@example.com"
        />

        <Button>Send</Button>
      </Form>
    </div>
  )
}

export default UpdateForm
