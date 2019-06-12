import React from 'react';
import AuthHeader from '../partials/Authentication/header'
import WelcomeSections from '../partials/Authentication/welcomeSections';

class Authentication extends React.Component {

  render() {
      return (
        <div className="background">
          <AuthHeader></AuthHeader>
          <WelcomeSections></WelcomeSections>
        </div>
      );
  }
}

export default Authentication;
