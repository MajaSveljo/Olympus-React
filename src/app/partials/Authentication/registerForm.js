import React from 'react';
import {Link} from 'react-router-dom';
import Button from '../../components/button';

class RegisterForm extends React.Component {
  render() {
      return (
        
        <div className="tab-content" id="1">
            <h2>Register to Olympus</h2>
            <form method="POST" action="homepage.html">
                <div className="inline-responsive">
                    <input type="text" placeholder="First Name" />
                    <input type="text" placeholder="Last Name" />
                </div>
                <input type="email" placeholder="Your Email" />
                <input type="password" placeholder="Your Password" />
                <div className="input-container">
                    <label>Your Birthday</label>
                    <input type="date" value="1984-10-24" />
                    <span><ion-icon name="calendar"></ion-icon></span>
                </div>
                <div className="input-container">
                    <label>Your Gender</label>
                    <select>
                        <option>Male</option>
                        <option>Female</option>
                        <option>Other</option>
                    </select>
                </div>
                <div className="checkbox-container">
                    <input id="terms" type="checkbox" checked />
                    <label htmlFor="terms">
                        I accept the <a href="#">Terms and contitions</a> of the
                        website
                    </label>
                </div>

                <Link to={'/homepage'}>
                    <Button
                        className={"btn-purple"}
                        onClick={''}
                        buttonText={'Complete Registration!'}
                        type={'submit'}
                    ></Button>
                </Link>
            </form>
        </div>
        
      );
  }
}

export default RegisterForm;
