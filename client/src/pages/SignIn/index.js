import React from "react";

const Signin = props => {
  return ( 
    <form>
      <label htmlFor="email">Email</label>
      <input 
        name="email" 
        onChange={props.handleChange} 
        type="text" 
        value={props.email}
      />
      <label htmlFor="email">Password</label>
      <input 
        name="password" 
        onChange={props.handleChange} 
        type="password" 
        value={props.password}
      />
      <button onClick={props.handleSignIn}>Sign In</button>
    </form>
  );
}

export default Signin;
