import React from 'react';
import {Link} from 'react-router-dom';

import Welcome from './welcome';
import RegisterForm from './registerForm';
import LoginForm from './loginForm';

class WelcomeSections extends React.Component {

        //handling tabs

        openTab(tabNumber) {
            const tabHeaders =
            document.getElementsByClassName("tab");
        
            const tabContent = 
            document.getElementsByClassName("tab-content");
        
            if (document.getElementById(tabNumber)){

                for (let tab of tabHeaders){
                    tab.firstChild.style.color = "#ccc";
                }
            
                for (let tab of tabContent){
                    tab.style.display = "none";
                }
            
                document.getElementById(tabNumber).style.display = "block";
                tabHeaders[tabNumber - 1].firstChild.style.color = "rgba(255, 51, 0, 0.95)";
            }

        }

        componentDidMount(){
            this.openTab(1);
        }

  render() {
      return (
        <section className="authentication-content">

        <Welcome />
        
        <div className="forms">
            <div className="tabs">
                <span className="tab" onClick={() => this.openTab(1)}><ion-icon name="power"></ion-icon></span>
                <span className="tab" onClick={() => this.openTab(2)}><ion-icon name="add"></ion-icon></span>
            </div>
            
            <div className="tabs-wrapper">
                <RegisterForm />
                
                <LoginForm />
            </div>

        </div>
    </section>
    );
  }
}

export default WelcomeSections;
