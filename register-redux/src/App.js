import React, { useState } from 'react'
import './App.css';
import './style/register.css'
import store from './store/index'

import userAction from './store/actions/userAction';

function App() {

  const [firstName, setFirstName] = useState("")
  const [lastName, setLastName] = useState("")
  const [email, setEmail] = useState("")
  const [phoneNumber, setPhoneNumber] = useState(0)
  const [password, setPassword] = useState("")

  function handleSubmit(e) {
    e.preventDefault()

    // console.log(firstName, lastName, email, phoneNumber, password);
    userAction.setAll({
      firstName,
      lastName,
      email,
      phoneNumber,
      password
    })
  }

  return (
    <div>
      <div className="container">
        <h2>
          Register Form
        </h2>

        <p>Please fill in this form to create an account.</p>

        <form onSubmit={(e) => handleSubmit(e)}
          target="#"
        >
          <label htmlFor="firstNameInput"><b>First Name: </b></label>
          <input id="firstNameInput" onChange={(e) => setFirstName(e.target.value)} type="text" placeholder="John"></input>

          <label htmlFor="lastNameInput"><b>Last Name: </b></label>
          <input id="lastNameInput" onChange={(e) => setLastName(e.target.value)} type="text" placeholder="Doe"></input>

          <label htmlFor="emailInput"><b>Email: </b></label>
          <input id="emailInput" onChange={(e) => setEmail(e.target.value)} type="email" placeholder="john@gmail.com"></input>

          <label htmlFor="phoneNumInput"><b>Phone Number: </b></label>
          <input id="phoneNumInput" onChange={(e) => setPhoneNumber(e.target.value)} type="text" placeholder="08112282277"></input>

          <label htmlFor="passInput"><b>Password:</b></label>
          <input id="passInput" onChange={(e) => setPassword(e.target.value)} type="password"></input>

          <p>By creating an account you agree to our <a href="#">Terms & Privacy</a>.</p>
          <input type="submit" class="registerbtn" value="Register"></input>

        </form>
      </div>
    </div>
  );
}

export default App;
