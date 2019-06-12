import React from 'react';

const SpotifyTrack = (props) => {
    return (
        <div className="track">
            <div className="track__left">
                <div>{props.number}</div>
                <img src={props.album} />
                <div>
                    <p>{props.artist}</p>
                    <p>{props.trackName}</p>
                </div>
            </div>
            <div className="track__right">
                {props.length}
            </div>
        </div>
   )}

export default SpotifyTrack;
