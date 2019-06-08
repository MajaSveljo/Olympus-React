import React from 'react';

import ProfilePhoto1 from '../../../images/profile1.jpeg';
import ProfilePhoto2 from '../../../images/profile2.jpeg';
import ProfilePhoto3 from '../../../images/profile3.jpeg';
import ProfilePhoto4 from '../../../images/profile4.jpg';
import ProfilePhoto5 from '../../../images/profile5.jpeg';
import ProfilePhoto6 from '../../../images/profile6.jpg';

class SidebarRight extends React.Component {
  render() {
      return (
        <div className="sidebar-right sidebar-remove">
            <div className="sidebar-right__avatars">
                <div><div><img src={ProfilePhoto1} /></div><div className="sidebar-status"></div></div>
                <div><div><img src={ProfilePhoto2} /></div><div className="sidebar-status"></div></div>
                <div><div><img src={ProfilePhoto3} /></div><div className="sidebar-status"></div></div>
                <div><div><img src={ProfilePhoto4} /></div><div className="sidebar-status"></div></div>
                <div><div><img src={ProfilePhoto5} /></div><div className="sidebar-status"></div></div>
                <div><div><img src={ProfilePhoto6} /></div><div className="sidebar-status"></div></div>
            </div>
            <div className="sidebar-right__buttons">
                <div><ion-icon name="barcode"></ion-icon></div>
                <div><ion-icon name="chatboxes"></ion-icon></div>
            </div>
        </div>
      );
  }
}

export default SidebarRight;
