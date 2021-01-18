import React from 'react';

function Login({setPath}) {
  return (

    <div className="container">
      <h1>Login</h1>
      <form data-ms-form="login">
        <div className="form-group">
          <label htmlFor="email">Email Address</label>
          <input data-ms-member="email" type="email" id="email" placeholder="Enter Email Address" name="email" required />
        </div>
        <div className="form-group">
          <label htmlFor="password">Password</label>
          <input data-ms-member="password" type="password" minlength="8" placeholder="Enter Password" required />
        </div>
        <button type="submit">Enter</button>
      </form>
      <p>New user? Sign up <a className='link-text' href='/signup'>here</a></p>
    </div>
  );
}

export default Login;