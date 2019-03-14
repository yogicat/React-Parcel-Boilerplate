import React from 'react'
import ReactDOM from 'react-dom'
import { Router, Link } from '@reach/router'

import 'milligram/dist/milligram.min.css'
import './App.scss'

import Home from './Home'

const App = () => (
  <React.StrictMode>
    <div className="App">
      <header className="container">
        <div className="row">
          <Link to="/" className="column">
            Home
          </Link>
          <Link to="/" className="column">
            Home
          </Link>
          <Link to="/" className="column">
            Home
          </Link>
          <Link to="/" className="column">
            Home
          </Link>
        </div>
      </header>
      <Router>
        <Home path="/" />
      </Router>
    </div>
  </React.StrictMode>
)

ReactDOM.render(<App />, document.getElementById('root'))
