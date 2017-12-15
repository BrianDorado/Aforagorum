import React, { Component } from 'react';
import { Card, CardHeader, CardText } from 'material-ui/Card';  
import SimpleAddress from './../google/googlePlaces';  
import RaisedButton from 'material-ui/RaisedButton';
import axios from 'axios';
import './search.css' 

class Search extends Component {
  constructor(){
    super();
    this.submitLocation = this.submitLocation.bind(this)
    this.submitUser = this.submitUser.bind(this)
  }

    submitLocation(){
      let location = {
        location: this.refs.location.value
      }
      console.log(location)
        axios.get('/post/locale')
    }

    submitUser(){
      let user = {
        user: this.refs.user.value
      }
      console.log(user)
        axios.get('/post/user')
    }


    render() {
        return (
            <div className='search-container'>
              <section className='search-by-input'>
              <div>Search by location</div>
                <SimpleAddress ref ='location' />
                <RaisedButton
                primary = {true}
                onClick = {this.submitLocation}
                >
                 Search 
                </RaisedButton>
              </section>
              <section className="search-by-input">
                <div>Search by User</div>
                <input type="text" placeholder='  Search for a user' ref = 'user'/>
                <RaisedButton
                primary = {true}
                onClick = {this.submitUser}
                >
                  Search
                </RaisedButton>
              </section>
              <br/>
              <section className='search-results'>
                <div> <strong>Search Results </strong>
                  <div>Filter by Post Author</div>
                  <div>Filter by Post Date </div>
                  <div>Filter by Post Name</div>
                </div>
              </section>
              <br/> 
              <section className="search-display">
                <div className='results'>
                  
                
                </div>
              </section>
            </div>
        );
    }
}

export default Search; 

<Card className='post-cards'>
  <CardHeader
    title='Post title'
    subtitle='Post Author'
    actAsExpander={true}
    showExpandableButton={true}
  />
  <CardText
    expandable={true}
  >
    Here I will list my plan for terrorizing Gothem and how we should deal with the Batman. I will also
                      list my video game weakness, darkest fears and dream vacation.
                    </CardText>
</Card> 