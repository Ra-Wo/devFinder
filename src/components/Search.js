import React, {Component} from 'react';

export default class Search extends Component {
   
   render() {
      return (
         <div className={`${this.props.theme}-DataCard search`}>
         
            <i 
               className="ri-search-line"
               onClick={this.props.searchFor}
               >
            </i>
            <input 
               className={`${this.props.theme} userInput`}
               type="text"
               placeholder="Search Github username..."
            />
            <input 
               onClick={this.props.searchFor}
               type="submit" 
               value="Search"
               className="submit"
            />
            
         </div>
      );
   }
}