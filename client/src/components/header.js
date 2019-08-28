import React from 'react'
import { Link } from 'react-router-dom'

export default Header

function Header({ user, onLogout }) {
  return (
    <nav>
      <h4><Link to="/">Digital Journal</Link></h4>
      <p>Create A Note</p>
      <ul>
        {user ? (
          <li><button onClick={onLogout}>Logout</button></li>
        ) : (
          <>
            <li><Link to="/login">Sign in</Link></li>
            <li><Link to="/register">Register</Link></li>
          </>
        )}
      </ul>
    </nav>
  )
}
