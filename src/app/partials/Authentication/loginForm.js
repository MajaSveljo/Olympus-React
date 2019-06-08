import React from 'react';
import {Link} from 'react-router-dom';

import Button from '../../components/button';

class LoginForm extends React.Component {

  render() {
      return (
        <div className="tab-content" id="2">
            <h2>Login to your Account</h2>
            <form method="POST" action="homepage.html">
                <input type="email" placeholder="Your Email" />
                <input type="password" placeholder="Your Password" />
                <div className="inline-always">
                    <div className="checkbox-container">
                        <input id="remember" type="checkbox" checked />
                        <label htmlFor="remember">Remember Me</label>
                    </div>
                    <div>
                        <a href="#">Forgot my Password</a>
                    </div>
                </div>
                <Link to={'/homepage'}>
                    <Button
                        className={'btn-orange'}
                        onClick={''}
                        buttonText="Login"
                        type={''}
                    >
                    </Button>
                </Link>
            </form>
            <button className="btn-facebook">
                <ion-icon name="logo-facebook"></ion-icon>
                <span>Login with Facebook</span>
            </button>
            <button className="btn-twitter">
                <ion-icon name="logo-twitter"></ion-icon>
                <span>Login with Twitter</span>
            </button>
            <p>Dont't you have an account? <span>Register Now!</span> it's really simple
                and you can start enjoying all the benefits!
            </p>
        </div>
      );
  }
}

export default LoginForm;