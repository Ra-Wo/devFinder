import React, {Component} from 'react';
import Header from './Header.js';
import Search from './Search.js';
import UserData from './UserData.js';
import '../css/body.css';

export default class Body extends Component {
   
   render() {
      return (
         <div className='container'>
         
            <Header 
               theme={this.props.theme}
               changeTheme={this.props.changeTheme}
            />
            
            <Search 
               searchFor={this.props.searchFor}
               theme={this.props.theme}
            />
            {this.props.user ? <UserData
               user={this.props.user}
               theme={this.props.theme}
            /> : ''}
          
         </div>
      );
   }
}