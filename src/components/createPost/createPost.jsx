import React, { Component } from 'react';
import SimpleAdress from './../google/googlePlaces';
import RaisedButton from 'material-ui/RaisedButton';
import TextField from 'material-ui/TextField';  
import { getUser } from './../../ducks/users';   
import { connect } from 'react-redux';
import axios from 'axios'; 
import './createPost.css'


class CreatePost extends Component {
    constructor(props){
        super(props);
        this.saveInput = this.saveInput.bind(this)
    }


    saveInput(){
        let newPost = {
            // title: e.target.value,
            location: this.refs.location.value,
            body: this.refs.body.refs
        }
        console.log(newPost)
            axios.post('/create/post', newPost)
    }

componentDidMount(){
    this.props.getUser(this.props.match.params.id)
}

    render() {
        return (
            <div className = 'post-header' >
                <section className='title-input'>
                    <TextField
                    floatingLabelText = 'Title'
                    errorText="This field is required"
                    ref ='title'
                    />
                    {/* <TextField
                    floatingLabelText = 'Location'
                    errorText = "This field is required"
                    ref ='location'
                    >
                    </TextField> */}
                    <SimpleAdress />
                </section>
                <section className='story-input'>
                    <TextField
                    floatingLabelText='Post body'
                    multiLine={true}
                    fullWidth={true}
                    // rows = '4'
                    errorText ="This field is required"
                    ref = 'body'
                    />
                    </section>
                    <section>
                    </section>
                    <section className='button'>
                        <RaisedButton
                        className='post-button'
                        primary={true}
                        onClick = {this.saveInput}
                        >
                            Post
                        </RaisedButton>
                    </section>
                    
            </div>
        );
    }
}

function mapStateToProps(state){
    return{
        user: state.userData[0]
    }
}

export default connect(mapStateToProps, {getUser}) ( CreatePost );