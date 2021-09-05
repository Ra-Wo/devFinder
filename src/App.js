import React from 'react';
import axios from 'axios';
import Body from './components/Body.js'
import './css/theme.css'

export default class App extends React.Component {
   constructor(props) {
      super(props);
      this.state = {
         searchFor: '',
         user: '',
         theme: 'light'
      };
      this.user = this.user.bind(this)
      this.searchFor = this.searchFor.bind(this)
      this.changeTheme = this.changeTheme.bind(this)
   }

   user (user) {
      return (
         axios.get(`https://api.github.com/users/${user}`)
         .then((response)=> {
            this.setState({
               user: response.data
            })
         })
         .catch((error)=> {
            return error;
         })
      );
   }
   
   searchFor (){
      this.setState({
         searchFor: document.querySelector('.userInput').value
      });
      this.user(document.querySelector('.userInput').value)
      document.querySelector('.userInput').value = '';
   }
   
   changeTheme() {
      this.setState({
         theme: (this.state.theme === 'light' ? 'dark' : 'light' )
      })
      if (this.state.theme === 'light') {
         document.body.classList.add('dark')
         document.body.classList.remove('light')
      } else {
         document.body.classList.add('light')
         document.body.classList.remove('dark')
      }
   }
   
   render () {
      return ( 
         <Body 
            user={this.state.user} 
            searchFor={this.searchFor} 
            theme={this.state.theme} 
            changeTheme={this.changeTheme}
         />
      );
   }
}