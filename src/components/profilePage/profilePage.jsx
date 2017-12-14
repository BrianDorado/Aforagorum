import React, { Component } from 'react';
import './profilePage.css'
import ProfileView from './../profileView/profileView';  
import TextField from 'material-ui/TextField';  
import FlatButton from 'material-ui/FlatButton';  
import RaisedButton from 'material-ui/RaisedButton'
import Snackbar from 'material-ui/Snackbar';  
import {connect } from 'react-redux';  
import {getUser} from './../../ducks/users';  
import axios from 'axios';  


class Profile extends Component {
    constructor(props){
        super(props);
        this.state = {
            disabled: true,
            open: false 
        }
    this.editClickHandler = this.editClickHandler.bind(this);
    this.saveChange = this.saveChange.bind(this);
    this.saveAndDisable = this.saveAndDisable.bind(this)
    }
        editClickHandler() {
            this.setState({
                disabled: !this.state.disabled
            })
        }

        saveChange(){
            this.setState({
                open: !this.state.open
            })
        }

        saveInput(){
            let updates = {
                plus: this.refs.google.value,
                fb: this.refs.facebook.value,
                ig: this.refs.instagram.value,
                tw: this.refs.twitter.value,
                ut: this.refs.youtube.value
            }
            axios.put('/user', updates )
        }
        saveAndDisable(){
            this.editClickHandler()
            this.saveChange()
            this.saveInput()
        }

    componentDidMount(){
       this.props.getUser(this.props.match.params.id)
    }


    render() {
        return (
            <div>
                <section className="profile-info">
                    <div className="user-image">
                     <img src={this.props.user && this.props.user.user_img} alt="avatar"/>
                    </div>
                    <div className="user-name">
                        <div className="user-first-name">
                            <strong>
                               {this.props.user && this.props.user.firstname}
                            </strong>
                         </div>
                         <br/>
                        <div className="user-last-name">
                            <h1>{ this.props.user && this.props.user.lastname}</h1>
                        </div>
                    </div>
                    <div className="reputation">
                        {/* {this.props.reputation} */}
                    </div>
                    <div className='edit'>
                        <FlatButton
                        style={{
                            fontFamily: "Vollkorn SC, serif"
                        }}
                        onClick ={this.editClickHandler}
                        >
                        EDIT
                        </FlatButton>
                    </div>
                </section>
                <br/>
                <section className="user-bio">
                 {this.props.user && this.props.user.bio}
                 <div className='user-bio-input'>
                        
                     <TextField
                      floatingLabelText = 'Bio'
                      floatingLabelStyle = {{
                          color: "blueGrey300"
                      }}
                      underlineFocusStyle ={{
                          borderColor: "blueGrey500"
                      }}
                      
                      multiLine = {true}
                      rowsMax={4}
                      style={{
                          width: '100%',
                      }}
                      disabled = {this.state.disabled}
                        
                     />
                   
                 </div>
                </section>
                <br/>
                <section className="user-links">
                    <span className="url-input-addon">http://plus.google.com/
                    <input type="text" className='user-link-input' ref = 'google' disabled={this.state.disabled}/>
                    </span>
                    <br/>
                    <span className="url-input-addon">http://www.facebook.com/
                    <input type="text" className='user-link-input' ref ='facebook' disabled={this.state.disabled}/>
                    </span>
                    <br/>
                    <span className="url-input-addon">http://www.instagram.com/
                    <input type="text" className='user-link-input' ref = 'instagram' disabled={this.state.disabled}/>
                    </span>
                    <br/>
                    <span className="url-input-addon">http://www.twitter.com/
                    <input type="text" className='user-link-input' ref='twitter' disabled={this.state.disabled}/>
                    </span>
                    <br/>
                    <span className="url-input-addon">http://www.youtube.com/
                    <input type="text" className='user-link-input' ref='youtube' disabled={this.state.disabled}/>
                    </span>
                </section>
                <br/>
                <section className="save-button">
                    <RaisedButton
                        className="save"
                        secondary={true}
                        disabled={this.state.disabled}
                        onClick={this.saveAndDisable}
                        >
                        Save
                    </RaisedButton>
                </section>
                <br/> 
                <section className="contributions">
                   <div className="contr-links">
                    Here will be links to all contributions
                   </div>
                </section>
                <Snackbar
                open={this.state.open}
                message="Saved!"
                autoHideDuration={3000}
                onRequestClose={(this.saveChange)}
                className="save-snackbar"
                >
                </Snackbar>
            
            </div>
        );
    }
}

function mapStateToProps(state){
    return {
        user: state.userData[0]
    }
};

export default connect(mapStateToProps, {getUser}) (Profile);

//Public and Private views 

// {/* {this.state.user === this.state.url_id ?
//                own 
//             :
//                other
//             } */}

//async function ...

// await Promise.all