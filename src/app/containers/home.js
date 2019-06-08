import React from 'react';

import HomeHeader from '../partials/Homepage/header';
import ProfileCover from '../partials/Homepage/profileCover';
import BadgesSection from '../partials/Homepage/badgesSection';
import SpotifySection from '../partials/Homepage/spotifySection';
import PhotosSection from '../partials/Homepage/photosSection';
import PollSection from '../partials/Homepage/pollSection';
import SidebarLeft from '../partials/Homepage/sidebarLeft';
import SidebarRight from '../partials/Homepage/sidebarRight';

class Home extends React.Component {

    toTop = () => {
        window.scrollTo({top: 0, behavior: 'smooth'});
    }

  render() {
      return (
        <div classNameName="background-homepage">
            
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

            <div className="posts">

                <div className="post">

                    <div className="post__header">
                        <div className="profile-horizontal">
                            <span className="profile-photo"></span>
                            <span className="profile-info">
                                <p>Ida Vanderboom</p>
                                <p>7 hours ago</p>
                            </span>
                        </div>
                        <div className="more-options"><a href="#">. . .</a></div>
                    </div>
        
                    <div className="post__text">
                        Cupcake ipsum dolor sit amet.
                        Cake jelly beans I love croissant sweet roll.
                        Cupcake lemon drops cupcake donut.
                        Fruitcake candy canes tootsie roll chocolate cake
                        pastry gummi bears I love carrot cake.
                        Tart tart I love sweet. I love halvah powder.
                        Sesame snaps dessert chupa chups cheesecake.
                    </div>
                    <div className="post__reactions">
                        <div className="post__reactions__heart">
                            <ion-icon name="heart-empty"></ion-icon> 6
                        </div>
                        <div className="post__reactions__likers">
                            <span></span>
                            <span></span>
                            <span></span>
                            <span></span>
                            <span></span>
                            <span></span>
                        </div>
                        <div className="post__reactions__names">
                            <p><span>Jenny</span>, <span>Robert</span> and</p>
                            <p>6 more liked this</p>
                        </div>
                        <div className="post__reactions__actions">
                            <ion-icon name="chatbubbles"></ion-icon>
                            17
                            <ion-icon name="share-alt"></ion-icon>
                            24
                        </div>
                    </div>
        
                    <div className="post__actions">
                        <span><ion-icon name="trophy"></ion-icon></span>
                        <span><ion-icon name="heart-empty"></ion-icon></span>
                        <span><ion-icon name="chatbubbles"></ion-icon></span>
                        <span><ion-icon name="share-alt"></ion-icon></span>
                    </div>
                </div>
    
                <div className="post">
        
                    <div className="post__header">
                        <div className="profile-horizontal">
                            <span className="profile-photo"></span>
                            <span className="profile-info">
                                <p>Ida Vanderboom shared <a>Felix Kjellberg</a>'s <a>photo</a></p>
                                <p>9 hours ago</p>
                            </span>
                        </div>
                        <div className="more-options"><a href="#">. . .</a></div>
                    </div>
        
                    <div className="post__text">
                        Cat ipsum dolor sit amet, spend six hours per day washing,
                        but still have a crusty butthole, for cats making all the
                        muffins or stare out cat door then go back inside but eat
                        the fat cats food. 
                        
                        <div className="shared">
                            <div className="post__photo"></div>
                            
                            <div className="post__header">
                                <div className="profile-horizontal">
                                    <span className="profile-photo"></span>
                                    <span className="profile-info">
                                        <p>Felix Kjellberg</p>
                                        <p>19 hours ago</p>
                                    </span>
                                </div>
        
                                <ion-icon name="radio-button-off" className="profile-circle"></ion-icon>
        
                                <div className="post__actions">
                                    <span><ion-icon name="heart-empty"></ion-icon></span>
                                    <span><ion-icon name="chatbubbles"></ion-icon></span>
                                    <span><ion-icon name="share-alt"></ion-icon></span>
                                </div>
                            </div>
        
                            <div className="post__text">
                                Zombie ipsum reversus ab viral inferno, nam rick grimes
                                malum cerebro. De carne lumbering animata corpora quaeritis.
                                Summus brains sit​​, morbo vel maleficia? De apocalypsi gorger
                                omero undead survivor dictum mauris.
                            </div>
        
                        </div>
        
                    </div>
                    <div className="post__reactions">
                        <div className="post__reactions__heart">
                            <ion-icon name="heart-empty"></ion-icon> 6
                        </div>
                        <div className="post__reactions__likers">
                            <span></span>
                            <span></span>
                            <span></span>
                            <span></span>
                            <span></span>
                            <span></span>
                        </div>
                        <div className="post__reactions__names">
                            <p><span>Jenny</span>, <span>Robert</span> and</p>
                            <p>6 more liked this</p>
                        </div>
                        <div className="post__reactions__actions">
                            <ion-icon name="chatbubbles"></ion-icon>
                            17
                            <ion-icon name="share-alt"></ion-icon>
                            24
                        </div>
                    </div>
        
                    <div className="post__actions">
                        <span><ion-icon name="trophy"></ion-icon></span>
                        <span><ion-icon name="heart-empty"></ion-icon></span>
                        <span><ion-icon name="chatbubbles"></ion-icon></span>
                        <span><ion-icon name="share-alt"></ion-icon></span>
                    </div>
                </div>

            </div>

            <SidebarLeft />

            <SidebarRight />

            <div className="to-top" onClick={() => this.toTop()}><ion-icon name="arrow-up"></ion-icon></div>
        </div>

        </div>
      );
  }
}

export default Home;