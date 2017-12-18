import React, { Component } from 'react';
import { Card, CardHeader, CardText } from 'material-ui/Card';  
import RaisedButton from 'material-ui/RaisedButton';
import axios from 'axios';
import PostCards from './../postCards/postCards';  
import './search.css' 

class Search extends Component {
  constructor(){
    super();
        this.state ={
          responses: []
        }
    
    this.submitLocation = this.submitLocation.bind(this)
    this.submitUser = this.submitUser.bind(this)
  }

    submitLocation(){

      let  location = this.refs.location.value
      
        axios.get(`/post/locale/${location}`).then((res) => {
          this.setState({
            responses: res.data
          })
        })
    }

    submitUser(){
      let author = this.refs.author.value
      
      console.log(author)
        axios.get(`/post/user/${author}` ).then((res) => {
          this.setState({
            responses: res.data 
          }) 
        })
    }


    render() {
      const results = this.state.responses.map(responses =>{
        return (
          <PostCards
          title = {responses.title}
          
          subtitle = {responses.author}
          body = {responses.body}
          />
        )  
            })
      


        return (
            <div className='search-container'>
              <section className = 'search-by-input' >
                <div>Search by location</div>
                <input type="text" placeholder ="Location" ref = 'location'/>
                <RaisedButton
                primary = {true}
                onClick = {this.submitLocation}
                >
                 Search 
                </RaisedButton>
              </section>
              <section className="search-by-input">
                <div>Search by User Name</div>
                <input type="text" placeholder='  User' ref = 'author'/>
                <RaisedButton
                primary = {true}
                onClick = {this.submitUser}
                >
                  Search
                </RaisedButton>
              </section>
              <br/>
              <section className='search-results'>
                <div> 
                  <strong>Search Results </strong>
                    <br/>
                  <div>Filter by Post Author</div>
                    <br/>
                  <div>Filter by Post Date </div>
                    <br/>                    
                  <div>Filter by Post Name</div>
                </div>
              </section>
              <br/> 
              <section className="search-display">
                <div className='results'>
                  {results}  
                
                </div>
              </section>
            </div>
        );
    }
}

export default Search; 

