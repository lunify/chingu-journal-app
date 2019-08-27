import React, { useState } from 'react'
import { auth } from '../services/api'

export default Register

function Register({ onRegister }) {
  // state ********************
  const [username, setUsername] = useState('')
  const [password, setPassword] = useState('')
  const [errors, setErrors] = useState([])
  const [loading, setLoading] = useState(false)

  // methods ********************
  async function handleSubmit(e) {
    e.preventDefault()
    setLoading(true)

    const { errors, user } = await auth.register({ username, password })

    if (errors) {
      setLoading(false)
      return setErrors(errors)
    }

    onRegister(user)
  }

  // render ********************
  return (
    <div>
      <header>
        <h2>Register form</h2>
        {errors && errors.map(error => (
          <p key={error}>{error}</p>
        ))}
      </header>
      <form onSubmit={handleSubmit}>
        <label htmlFor="username">Username</label>
        <input
          onChange={e => setUsername(e.target.value)}
          value={username}
          type="username"
          name="username"
          id="username"
          autoComplete="username"
          required
        />

        <label htmlFor="password">Password</label>
        <input
          onChange={e => setPassword(e.target.value)}
          value={password}
          type="password"
          name="password"
          id="password"
          autoComplete="new-password"
          required
        />

        <button disabled={loading}>Sign up</button>
      </form>
    </div>
  );
}
