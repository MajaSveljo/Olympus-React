import React from 'react';
import Badges from '../../components/badge'

class BadgesSection extends React.Component {
  render() {
      return (
        <div className="badges-container responsive-remove">
            <div className="badges-container__head">Ida's Badges</div>
            <Badges />
        </div>
      );
  }
}

export default BadgesSection;
