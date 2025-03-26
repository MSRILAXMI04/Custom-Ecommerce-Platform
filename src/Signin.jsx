import { useState } from 'react'
import './App.css'
import './styles.css'

function Signin() {
  const [count, setCount] = useState(0)

  return (
    <>
<div class="container">
        <h1>LIORA</h1>
        <h2>SIGN IN</h2>
        <form>
            <label for="email">Email</label>
            <input type="email" id="email" name="email" placeholder="Email" required/>

            <label for="password">Password</label>
            <input type="password" id="password" name="password" placeholder="Password" required/>

            <button type="submit">Sign In</button>
        </form>
        <p>No Registered Account? <a href="signup.html">Create an account</a></p>
    </div>
    </>
  )
}

export default Signin


