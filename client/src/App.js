import React from 'react'
import { BrowserRouter as Router, Route } from 'react-router-dom'
import Login from './components/login'
import Register from './components/register'

function App() {
  return (
    <Router>
      <Route path="/register" component={Register} />
      <Route path="/login" component={Login} />
    </Router>
  )
}

export default App;
