import React, {Component} from 'react';
import '../css/header.css';

export default class Header extends Component {
   
   render() {
      return (
         <header className={this.props.theme}>
            <div className='logo'>
               devFinder
            </div>
            
            <div className="themeButton">
            
               {this.props.theme === `dark` ? (
               
                  <div onClick={this.props.changeTheme}>
                     <span>light</span>
                     <i className="ri-sun-fill"></i>
                  </div>
               
               ) : (
                  
                  <div onClick={this.props.changeTheme}>
                     <span>dark</span>
                     <i className="ri-moon-fill"></i>
                  </div>
                  
               )}
               
            </div>
         </header>
      );
   }
}