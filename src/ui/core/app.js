import React, { Component, Fragment } from 'react'
import { LocationProvider, Router, createHistory } from '@reach/router'

import createHashSource from 'hash-source'
const About = React.lazy(() => import('../features/about'))
const Home = React.lazy(() => import('../features/home'))
const Contact = React.lazy(() => import('../features/contact'))
const Signup = React.lazy(() => import('../features/signup'))

const source = createHashSource()
const history = createHistory(source)
export default class App extends Component {
  render() {
    return (
      <Fragment>
        <LocationProvider history={history}>
          <React.Suspense fallback={<div>Loading</div>}>
            <Router>
              <Home path="/" />
              <About path="/about" />
              <Contact path="/contact" />
              <Signup path="/register" />
            </Router>
          </React.Suspense>
        </LocationProvider>
      </Fragment>
    )
  }
}
