import React from 'react';

class BadgesSection extends React.Component {
  render() {
      return (
        <div className="badges-container responsive-remove">
            <div className="badges-container__head">Ida's Badges</div>
            <div className="badges-container__body">
                
                <div><span className="indicator --red">3</span></div>
                <div><span className="indicator --blue">1</span></div>
                <div><span className="indicator --pink">4</span></div>
                <div><span className="indicator --yellow">1</span></div>
                <div><span className="indicator --orange">5</span></div>
                <div><span className="indicator --brown">9</span></div>
                <div><span className="indicator --green">2</span></div>
                <div><span className="indicator --purple">6</span></div>
            </div>
        </div>
      );
  }
}

export default BadgesSection;
