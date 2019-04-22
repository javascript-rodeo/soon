import React from 'react'
import Logo from '../components/logo'
import UpdateForm from '../components/update'
export default () => {
  console.info('home')
  return (
    <main>
      <Logo />
      <h1>JavaScript Rodeo</h1>
      <h2>Coming Soon</h2>
      <div>
        <UpdateForm />
      </div>
    </main>
  )
}
