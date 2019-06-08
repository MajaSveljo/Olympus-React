import React from 'react';

import Photo1 from '../../../images/photo1.jpeg';
import Photo2 from '../../../images/photo2.jpg';
import Photo3 from '../../../images/photo3.jpeg';
import Photo4 from '../../../images/photo4.jpg';
import Photo5 from '../../../images/photo5.jpg';
import Photo6 from '../../../images/photo6.jpeg';
import Photo7 from '../../../images/photo7.jpeg';
import Photo8 from '../../../images/photo8.jpg';
import Photo9 from '../../../images/photo9.jpg';

class PhotosSection extends React.Component {
  render() {
      return (
        
        <div className="photos-container responsive-remove">
            <div className="photos-container__head">Last Photos</div>
            <div className="photos-container__body">
                
                <img src={Photo1} />
                <img src={Photo2} />
                <img src={Photo3} />
                <img src={Photo4} />
                <img src={Photo5} />
                <img src={Photo6} />
                <img src={Photo7} />
                <img src={Photo8} />
                <img src={Photo9} />
            </div>
        </div>

      );
  }
}

export default PhotosSection;
