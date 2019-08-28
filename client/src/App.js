import React, { useState } from 'react'
import { BrowserRouter as Router, Redirect, Route } from 'react-router-dom'
import Header from './components/header'
import Home from './components/home'
import Login from './components/login'
import Register from './components/register'
import Splash from './components/splash'

function App() {
  // state ********************
  const [user, setUser] = useState(null)

  // methods ********************
  function updateNotes(notes) {
    setUser({ ...user, notes })
  }

  // render ********************
  return (
    <Router>
      <Header user={user} onLogout={() => setUser(null)} />
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
      <Route
        exact
        path="/"
        render={() =>
          user ? <Home user={user} updateNotes={updateNotes} /> : <Splash />
        }
      />
    </Router>
  )
}

export default App;
