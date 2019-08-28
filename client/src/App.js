import React, { useState } from 'react'
import { BrowserRouter as Router, Redirect, Route } from 'react-router-dom'
import Login from './components/login'
import Register from './components/register'

function App() {
  const [user, setUser] = useState(null)
  return (
    <Router>
      <Route
        path="/register"
        render={() =>
          user ? <Redirect to="/" /> : <Register onRegister={setUser} />
        }
      />
      <Route
        path="/login"
        render={() =>
          user ? <Redirect to="/" /> : <Login onLogin={setUser} />
        }
      />
    </Router>
  )
}

export default App;
