import React from 'react';

import ProfilePhoto1 from '../../../images/profile1.jpeg';
import ProfilePhoto2 from '../../../images/profile2.jpeg';

class PollSection extends React.Component {
  render() {
      return (
        <div className="poll-container responsive-remove">
            <div className="poll-container__head">Ida's Poll</div>
            <form className="poll-container__body">
                
                <p>
                    If you could choose, who would you choose to sit on the throne?
                </p>

                <div className="option-container">
                    <input type="radio" name="option" value="tyrion" />Tyrion
                </div>
                <div className="percentage-container">62%</div>
                <div className="votes-bar">
                    <div className="votes-bar__background"></div>
                    <div className="votes-bar__amount"></div>
                </div>
                <div className="voters">
                    12 friends voted for this
                    <img src={ProfilePhoto1} />
                    <img src={ProfilePhoto2} />
                    <img src={ProfilePhoto1} />
                    <img src={ProfilePhoto2} />
                    <img src={ProfilePhoto1} />
                    <img src={ProfilePhoto2} />
                    <img src={ProfilePhoto1} />
                    <span>+3</span>
                </div>

                <div className="option-container">
                    <input type="radio" name="option" value="jon" />Jon
                </div>
                <div className="percentage-container">27%</div>
                <div className="votes-bar">
                    <div className="votes-bar__background"></div>
                    <div className="votes-bar__amount"></div>
                </div>
                <div className="voters">
                    7 friends voted for this
                    <img src={ProfilePhoto1} />
                    <img src={ProfilePhoto2} />
                    <img src={ProfilePhoto1} />
                    <img src={ProfilePhoto2} />
                    <img src={ProfilePhoto1} />
                    <img src={ProfilePhoto2} />
                    <img src={ProfilePhoto1} />
                </div>
                
                <div className="option-container">
                    <input type="radio" name="option" value="night_king" />Night King
                </div>
                <div className="percentage-container">11%</div>
                <div className="votes-bar">
                    <div className="votes-bar__background"></div>
                    <div className="votes-bar__amount"></div>
                </div>
                <div className="voters">
                    2 friends voted for this
                    <img src={ProfilePhoto1} />
                    <img src={ProfilePhoto2} />
                </div>

                <button type="submit">Vote Now!</button>
            </form>
        </div>
      );
  }
}

export default PollSection;
