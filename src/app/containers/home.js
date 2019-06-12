import React from 'react';

import HomeHeader from '../partials/Homepage/header';
import ProfileCover from '../partials/Homepage/profileCover';
import BadgesSection from '../partials/Homepage/badgesSection';
import SpotifySection from '../partials/Homepage/spotifySection';
import PhotosSection from '../partials/Homepage/photosSection';
import PollSection from '../partials/Homepage/pollSection';
import SidebarLeft from '../partials/Homepage/sidebarLeft';
import SidebarRight from '../partials/Homepage/sidebarRight';
import Posts from '../partials/Homepage/posts';

class Home extends React.Component {

    toTop = () => {
        window.scrollTo({top: 0, behavior: 'smooth'});
    }

  render() {
      return (
        <div className="background-homepage">
            
            <HomeHeader />
        
            <ProfileCover />

        <div className="grid-container">

            <div className="grid-left">
                
                <BadgesSection />
    
                <SpotifySection />

            </div>

            <div className="grid-right">

                <PhotosSection />

                <PollSection />

            </div>

            <Posts />

            <SidebarLeft />

            <SidebarRight />

            <div className="to-top" onClick={() => this.toTop()}><ion-icon name="arrow-up"></ion-icon></div>
        </div>

        </div>
      );
  }
}

export default Home;