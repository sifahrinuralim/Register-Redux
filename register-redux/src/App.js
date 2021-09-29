import logo from './logo.svg';
import './App.css';
import './style/register.css'

function App() {
  return (
    <form>
      <div class="container">
        <h2>
          Register Form
        </h2>

        <p>Please fill in this form to create an account.</p>

        <label htmlFor="firstNameInput"><b>First Name: </b></label>
        <input id="firstNameInput" type="text" placeholder="John"></input>

        <label htmlFor="lastNameInput"><b>Last Name: </b></label>
        <input id="lastNameInput" type="text" placeholder="Doe"></input>

        <label htmlFor="emailInput"><b>Email: </b></label>
        <input id="emailInput" type="email" placeholder="john@gmail.com"></input>
        
        <label htmlFor="phoneNumInput"><b>Phone Number: </b></label>
        <input id="phoneNumInput" type="text" placeholder="08112282277"></input>

        <label htmlFor="passInput"><b>Password:</b></label>
        <input id="passInput" type="password"></input>

        <p>By creating an account you agree to our <a href="#">Terms & Privacy</a>.</p>
        <input type="submit" class="registerbtn" value="Register"></input>

        <div class="container signin">
          <p>Already have an account? <a href="#">Sign in</a>.</p>
        </div>
      </div>
    </form>
  );
}

export default App;
