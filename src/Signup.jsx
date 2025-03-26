import { useState } from 'react';
//import { Link } from 'react-router-dom';
import './App.css';
import './styles.css';

function Signup() {
  const [count, setCount] = useState(0);

  return (
    <>
    <div className="container">
      <h1>LIORA</h1>
      <h2>SIGNUP</h2>
      <form>
        <label htmlFor="fname">First Name</label>
        <input type="text" id="fname" name="fname" placeholder="First Name" required/>

        <label htmlFor="lname">Last Name</label>
        <input type="text" id="lname" name="lname" placeholder="Last Name" required/>

        <label htmlFor="email">Email</label>
        <input type="email" id="email" name="email" placeholder="Email" required/>

        <label htmlFor="password">Password</label>
        <input type="password" id="password" name="password" placeholder="Password" required/>

        <label htmlFor="repassword">Re-enter Password</label>
        <input type="password" id="repassword" name="repassword" placeholder="Re-enter Password" required/>

        <label htmlFor="contact">Contact</label>
        <input type="text" id="contact" name="contact" placeholder="Contact" required/>

        <label htmlFor="gender">Gender</label>
        <select id="gender" name="gender" required>
          <option value="">Choose...</option>
          <option value="male">Male</option>
          <option value="female">Female</option>
          <option value="other">Other</option>
        </select>

        <label htmlFor="dob">Date of Birth</label>
        <input type="date" id="dob" name="dob" required/>

        <button type="submit">Signup</button>
      </form>
      <p>Already have an account? <a href="signin.html">Sign in</a></p>
      {/* <p className="signin-text">
        Already have an account? <Link to="/signin">Sign in</Link>
      </p> */}
    </div>
    </>
  );
}

export default Signup;





