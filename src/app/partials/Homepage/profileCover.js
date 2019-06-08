import React from 'react';

import Cover2 from '../../../images/cover.jpg';

class ProfileCover extends React.Component {
  render() {
      return (
        <section className="profile">
            <div className="cover-container">
                <div>
                    <img src={Cover2} />
                </div>
                <div className="icons-container">
                    <div><ion-icon name="contact"></ion-icon></div>
                    <div><ion-icon name="chatboxes"></ion-icon></div>
                    <div><ion-icon name="barcode"></ion-icon></div>
                </div>
            </div>
            <div className="links-container">
                <ul>
                    <li><a href="#">Timeline</a></li>
                    <li><a href="#">About</a></li>
                    <li><a href="#">Friends</a></li>
                </ul>
                
                <div className="profile-vertical responsive-remove">
                    <div></div>
                    <p>Ida Vanderboom</p>
                    <p>Sombor, RS</p>
                </div>

                <ul>
                    <li><a href="#">Photos</a></li>
                    <li><a href="#">Videos</a></li>
                    <li><a href="#">. . .</a></li>
                </ul>

                <div className="profile-vertical responsive-add">
                    <div></div>
                    <p>Ida Vanderboom</p>
                    <p>Sombor, RS</p>
                </div>

            </div>
        </section>
      );
  }
}

export default ProfileCover;
