import React from 'react';

import Album1 from '../../../images/album1.jpg';
import Album2 from '../../../images/album2.jpg';
import Album3 from '../../../images/album3.jpg';
import Album4 from '../../../images/album4.png';
import Album5 from '../../../images/album5.jpg';
import SpotifyTrack from '../../components/spotifyTrack';

class SpotifySection extends React.Component {

  render() {
      return (
        <div className="spotify-container responsive-remove">
                    
            <div className="spotify-container__head">My Spotify Playlist</div>
            <div className="spotify-container__body">
                
                <SpotifyTrack 
                    number={1}
                    album={Album1}
                    artist={"Panic! at the Disco"}
                    trackName={"Don't threaten Me with a Good Time"}
                    length={3.57}
                />
                <SpotifyTrack 
                    number={2}
                    album={Album2}
                    artist={"Sex Pistols"}
                    trackName={"Anarchy in the UK"}
                    length={3.10}
                />
                <SpotifyTrack 
                    number={3}
                    album={Album3}
                    artist={"Palaye Royale"}
                    trackName={"Ma Cherie"}
                    length={4.21}
                />
                <SpotifyTrack 
                    number={4}
                    album={Album4}
                    artist={"The Killers"}
                    trackName={"Read my Mind"}
                    length={3.50}
                />
                <SpotifyTrack 
                    number={5}
                    album={Album5}
                    artist={"Misfits"}
                    trackName={"Last Caress"}
                    length={3.05}
                />
            </div>

        </div>
      );
  }
}

export default SpotifySection;
