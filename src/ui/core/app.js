import React, { Component, Fragment } from 'react'
import { Router } from '@reach/router'

const About = React.lazy(() => import('../features/about'))
const Home = React.lazy(() => import('../features/home'))
const Contact = React.lazy(() => import('../features/contact'))
const Signup = React.lazy(() => import('../features/signup'))
export default class App extends Component {
  render() {
    return (
      <Fragment>
        <React.Suspense fallback={<div>Loading</div>}>
          <Router>
            <Home path="/" />
            <About path="/about" />
            <Contact path="/contact" />
            <Signup path="/register" />
          </Router>
        </React.Suspense>
      </Fragment>
    )
  }
}
