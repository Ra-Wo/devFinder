import React, {Component} from 'react';
import '../css/UserData.css';

export default class UserData extends Component {
   
   formatDate(date) {
      return (`Joined ${date.split('-')[2].substring(0, 2)} ${[0, "Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"][date.split('-')[1].substring(0, 1) === '0' ? date.split('-')[1].substring(1, 2) : date.split('-')[1]]} ${date.split('-')[0]}`);
   }
   
   render (){
      return (
         <div className={`${this.props.theme}-DataCard DataCard`}>
         
            <div className='nameANDlogin'>
               <div className='avatar'>
                  <img alt='avatar' src={this.props.user.avatar_url} />
               </div>
               <div className='name'>
                  <p>{this.props.user.name}</p>
                  <p className='username'>@{this.props.user.login}</p>
                  <p>
                     { this.props.user ? this.formatDate(this.props.user.created_at) : '' }
                  </p>
               </div>
            </div>
            
            <div className='bio'>
               <p>{this.props.user.bio}</p>
            </div>
            
            <div className={`${this.props.theme}-repoAndFollow repoAndFollow`}>
               <div className='repos'>
                  <p>Repos</p>
                  <p>{this.props.user.public_repos}</p>
               </div>
               <div className='followers'>
                  <p>Followers</p>
                  <p>{this.props.user.followers}</p>
               </div>
               <div className='following'>
                  <p>Following</p>
                  <p>{this.props.user.following}</p>
               </div>
            </div>
            
            <div className='info'>
               <div className={this.props.user.location ? 'location' : 'notAvailable'}>
                  <i className="ri-map-pin-2-fill"></i> 
                  <p>{
                  
                  this.props.user.location ? this.props.user.location : 'Not Available'
                     
                     
                  }</p>
               </div>
               <div className={this.props.user.blog ? 'website' : 'notAvailable'}>
                  <i className="ri-links-line"></i>
                  <p>{
                  
                  this.props.user.blog ? this.props.user.blog : 'Not Available'
                  
                  }</p>
               </div>
               <div className={this.props.user.twitter_username ? 'twitter' : 'notAvailable'}>
                  <i className="ri-twitter-fill"></i>
               <p>{
                  
                  this.props.user.twitter_username ? this.props.user.twitter_username : 'Not Available'
                  
               }</p>
               </div>
               <div className={this.props.user.company ? 'company' : 'notAvailable'}>
                  <i className="ri-building-fill"></i>
                  <p>{
                     
                     this.props.user.company ? this.props.user.company : 'Not Available'
                     
                  }</p>
               </div>
            </div>
         </div>
      ); 
   }
}