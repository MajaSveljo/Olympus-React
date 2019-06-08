import React from 'react';
import Button from '../../components/button';

class Welcome extends React.Component {
  render() {
      return (
        <div className="welcome">
            <h1>
                Welcome to the Biggest Social Network in the World
            </h1>
            <p>
                We are the best and biggest social network with 5 billion active users all
                around the world. Share your thoughts, write blog posts, show your
                favorite music via Spotify, earn badges and much more!
            </p>
            <Button
                className={''}
                onClick={() => this.openTab(1)}
                buttonText="Register Now!"
                type={''}
            >
            </Button>
        </div>
      );
  }
}

export default Welcome;
