import React from 'react';

class SidebarLeft extends React.Component {
  render() {
      return (
        <div className="sidebar-left sidebar-remove">
            <div><ion-icon name="pause"></ion-icon></div>
            <div><ion-icon name="brush"></ion-icon></div>
            <div><ion-icon name="browsers"></ion-icon></div>
            <div><ion-icon name="briefcase"></ion-icon></div>
            <div><ion-icon name="bug"></ion-icon></div>
            <div><ion-icon name="send"></ion-icon></div>
        </div>
      );
  }
}

export default SidebarLeft;
