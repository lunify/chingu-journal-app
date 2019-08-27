import React, { useState } from 'react'

export default Login

function Login() {
  const [username, setUsername] = useState('')
  const [password, setPassword] = useState('')

  return (
    <div>
      <header>
        <h2>Login form</h2>
      </header>
      <form>
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

        <button>Sign in</button>
      </form>
    </div>
  );
}

