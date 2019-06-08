import React from 'react';

import Album1 from '../../../images/album1.jpg';
import Album2 from '../../../images/album2.jpg';
import Album3 from '../../../images/album3.jpg';
import Album4 from '../../../images/album4.png';
import Album5 from '../../../images/album5.jpg';

class SpotifySection extends React.Component {

  render() {
      return (
        <div className="spotify-container responsive-remove">
                    
            <div className="spotify-container__head">My Spotify Playlist</div>
            <div className="spotify-container__body">
                
                <div className="track">
                    <div className="track__left">
                        <div>1</div>
                        <img src={Album1} />
                        <div>
                            <p>Panic! at the Disco</p>
                            <p>Don't Threaten me with a good time</p>
                        </div>
                    </div>
                    <div className="track__right">
                        3:22
                    </div>
                </div>
                <div className="track">
                    <div className="track__left">
                        <div>2</div>
                        <img src={Album2} />
                        <div>
                            <p>Sex Pistols</p>
                            <p>Anarchy in the UK</p>
                        </div>
                    </div>
                    <div className="track__right">
                        3:10
                    </div>
                </div>
                <div className="track">
                    <div className="track__left">
                        <div>3</div>
                        <img src={Album3} />
                        <div>
                            <p>Palaye Royale</p>
                            <p>Ma Cherie</p>
                        </div>
                    </div>
                    <div className="track__right">
                        4:21
                    </div>
                </div>
                <div className="track">
                    <div className="track__left">
                        <div>4</div>
                        <img src={Album4} />
                        <div>
                            <p>The Killers</p>
                            <p>Read my Mind</p>
                        </div>
                    </div>
                    <div className="track__right">
                        3:50
                    </div>
                </div>
                <div className="track">
                    <div className="track__left">
                        <div>5</div>
                        <img src={Album5} />
                        <div>
                            <p>Misfits</p>
                            <p>Last Caress</p>
                        </div>
                    </div>
                    <div className="track__right">
                        3:05
                    </div>
                </div>
            </div>

        </div>
      );
  }
}

export default SpotifySection;
