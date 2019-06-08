import React from 'react';
import Logo from '../../../images/logo.png';

class AuthHeader extends React.Component {
  render() {
      return (
        <div className="background">
            <header className="authentication">
                <div className="logo-main">
                    <img src={Logo} />
                    <div className="logo-main__text-container">
                        <p>Olympus</p>
                        <p>Social Network</p>
                    </div>
                </div>
                
                <div className="logo-bars">
                    <ion-icon name="menu"></ion-icon>
                </div>
            </header>
        </div>
      );
  }
}

export default AuthHeader;
