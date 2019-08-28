import React, { useState } from 'react'
import { BrowserRouter as Router, Route } from 'react-router-dom'
import Login from './components/login'
import Register from './components/register'

function App() {
  const [user, setUser] = useState([])
  return (
    <Router>
      <Route path="/register" render={() => <Register onRegister={setUser} />} />
      <Route path="/login" render={() => <Login onLogin={setUser} />} />
    </Router>
  )
}

export default App;
