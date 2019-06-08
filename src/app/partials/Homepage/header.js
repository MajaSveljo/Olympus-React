import React from 'react';

import Logo from '../../../images/logo.png';

class HomeHeader extends React.Component {
  render() {
      return (
        <header className="homepage-header">

            <div className="homepage-header__left responsive-remove">
                <span><img src={Logo} /></span>
                <span>Profile page</span>
                <span className="search-container">
                    <input placeholder="Search here people or pages..." />
                    <ion-icon name="search"></ion-icon>
                </span>
                <span>Find friends</span>
            </div>
            <div className="homepage-header__right responsive-remove">
                <span className="number-container">
                    <ion-icon name="contact"></ion-icon>
                    <div>6</div>
                </span>
                <span className="number-container">
                    <ion-icon name="chatboxes"></ion-icon>
                    <div>24</div>
                </span>
                <span className="number-container">
                    <ion-icon name="thunderstorm"></ion-icon>
                    <div>2</div>
                </span>
                <span>
                    <div className="profile-horizontal">
                        <span className="profile-photo">
                            <div className="status"></div>
                        </span>
                        <span className="profile-info">
                            <p>Ida Vanderboom</p>
                            <p>Fortune teller</p>
                        </span>
                        <span><ion-icon name="arrow-dropdown"></ion-icon></span>
                    </div>
                </span>
            </div>

            <div className="homepage-header__center responsive-add">
                <span><img src="images/logo.png" /></span>                
                <span className="number-container">
                        <ion-icon name="contact"></ion-icon>
                        <div>6</div>
                    </span>
                    <span className="number-container">
                        <ion-icon name="chatboxes"></ion-icon>
                        <div>24</div>
                    </span>
                    <span className="number-container">
                        <ion-icon name="thunderstorm"></ion-icon>
                        <div>2</div>
                    </span>
                <span><ion-icon name="chatboxes"></ion-icon></span>
            </div>

        </header>
      );
  }
}

export default HomeHeader;
