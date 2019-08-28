import React from 'react'
import { Link } from 'react-router-dom'

export default Splash

function Splash() {
  return (
    <div>
      <h2>A skeletal journal app with authentication</h2>
      <p>Where you can create and manage your personal notes.</p>

      <p>
        Access the app by either <Link to="/login">logging in</Link> or{' '}
        <Link to="/register">registering</Link>
      </p>
    </div>
  );
}
