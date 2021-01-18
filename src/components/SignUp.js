import React from 'react';

function SignUp(props) {
  return (
    <div className="container">
      <h1>Sign Up</h1>
      <form data-ms-form="signup">
        <div className="form-group">
          <label htmlFor="email">Email Address</label>
          <input data-ms-member="email" type="email" id="email" placeholder="email@address.com" name="email" required />
        </div>
        <div className="form-group">
          <label htmlFor="password">Password</label>
          <input data-ms-member="password" type="password" minlength="8" placeholder="Create Password (min. 8 characters)" required />
        </div>
        <button type="submit">Enter</button>
      </form>
      <p>Already have an account? Login <a className='link-text' href='/login'>here</a></p>
    </div>
  );
}

export default SignUp;
