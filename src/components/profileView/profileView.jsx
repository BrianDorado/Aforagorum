import React, { Component } from 'react';
import './profileView.css'
import RaisedButton from 'material-ui/RaisedButton';

class OtherUserProfile extends Component {
    

    componentDidMount() {
        // this.props.getUser()
    }


    render() {
        return (
            <div>
                <section className="profile-info">
                    <div className="user-image">
                        <img src={this.user_img} alt="user" />
                    </div>
                    <div className="user-name">
                        <div className="user-first-name">
                            <strong>
                                Name{this.user_firstName}
                            </strong>
                        </div>
                        <div className="user-last-name">
                            <h1> Last{this.user_lastName}</h1>
                        </div>
                    </div>
                    <div className="reputation">
                        {this.user_reputation}
                    </div>
                    <div className='add'>
                        <RaisedButton
                            primary={true}
                           className='add-companion'
                        >
                            Add 
                        </RaisedButton>
                    </div>
                </section>
                <br />
                <section className="user-bio">
                    {this.user_bio}Here I will give what street I grew up on, my mothers maiden name, favorite sports team,
                 what my favorite food is and any other Personal identifiable information
                </section>
                <br />
                <section className="user-links">
                    <span className="url-input-addon">http://plus.google.com/{this.user_linkPlus}
                    
                    </span>
                    <br />
                    <span className="url-input-addon">http://www.facebook.com/{this.user_linkFB}
                    
                    </span>
                    <br />
                    <span className="url-input-addon">http://www.instagram.com/{this.user_linkIg}
                    
                    </span>
                    <br />
                    <span className="url-input-addon">http://www.twitter.com/{this.user_linkTw}
                    
                    </span>
                    <br />
                    <span className="url-input-addon">http://www.youtube.com/{this.user_linkUt}
                    
                    </span>
                </section>
                <br />
                <section className="contributions">
                    <div className="contr-links">
                        Here will be links to all contributions
                   </div>
                </section>

            </div>
        );
    }
}
export default OtherUserProfile 

// ternary for only displaying links with value 