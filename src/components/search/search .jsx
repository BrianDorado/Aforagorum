import React, { Component } from 'react';
import './search.css'
import SelectField from 'material-ui/SelectField'; 
import MenuItem from 'material-ui/MenuItem';  
import TextField from 'material-ui/TextField';  
import { Card, CardHeader, CardText } from 'material-ui/Card';  

class Search extends Component {
  constructor(){
    super();
    this.state = {
      selected: '',
      selectedData: {
        NorthAmerica: [],

      }
    }
  }
    render() {
        return (
            <div className='search-container'>
              <section className='search-by-input'>
                <TextField
                  floatingLabelText='Custom search'
                // placeHolder = 'e.g New York'
                />
              </section>
              <section className='search-divider'>
               <span className='or'> - OR -</span>
              </section>
              <section className='search-by-select'>
                {/* <SelectField
                  floatingLabelText='Continent'
                  dropDownMenuProps ={{
                      anchorOrigin: {horizontal: "left",vertical:"bottom"},
                      targetOrigin:{ horizontal: "left", vertical: "top" },
                  }}
                  menuStyle ={{
                    marginTop: "-10px",
                  }}
                  style = {{
                    width: "30%",
                  }}
                >
                  <MenuItem value={1} primaryText='Africa' ></MenuItem>
                  <MenuItem value={2} primaryText='Asia' ></MenuItem>
                  <MenuItem value={3} primaryText='Australia' ></MenuItem>
                  <MenuItem value={4} primaryText='Europe' ></MenuItem>
                  <MenuItem value={5} primaryText='North America' ></MenuItem>
                  <MenuItem value={6} primaryText='South America' ></MenuItem>
                
                </SelectField> */}
             
              <SelectField 
                floatingLabelText='Country' 
                dropDownMenuProps={{
                  anchorOrigin: { horizontal: "left", vertical: "bottom" },
                  targetOrigin: { horizontal: "left", vertical: "top" },

                }}
                menuStyle={{
                  marginTop: "-10px",

                }}
                style={{
                  width: "30%"
                }}
              >
                 <MenuItem value={1} primaryText=""></MenuItem>
              
              </SelectField>
    
              <SelectField 
                floatingLabelText = 'City'
                dropDownMenuProps={{
                  anchorOrigin: { horizontal: "left", vertical: "bottom" },
                  targetOrigin: { horizontal: "left", vertical: "top" },

                }}
                menuStyle={{
                  marginTop: "-10px",
                }}
                style={{
                  width: "30%"
                }}
              >
                <MenuItem value ={1} primaryText=""></MenuItem>
              </SelectField>
              </section>
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
                  <Card className='post-cards'>
                    <CardHeader
                      title ='Post title'
                      subtitle= 'Post Author'
                      actAsExpander = {true}
                      showExpandableButton= {true}
                    />  
                    <CardText 
                      expandable ={true}
                    >
                      Here I will list my plan for terrorizing Gothem and how we should deal with the Batman. I will also 
                      list my video game weakness, darkest fears and dream vacation. 
                    </CardText>
                  </Card> 
                
                </div>
              </section>
            </div>
        );
    }
}

export default Search;

// add in multi select at a later time, add in search result filter  