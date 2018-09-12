import React from "react";

const Signup = props => {
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
      <button onClick={props.handleSignUp}>Sign Up</button>
    </form>
  );
}

export default Signup;
