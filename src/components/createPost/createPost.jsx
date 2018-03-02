import React, { Component } from 'react';
import SimpleAdress from './../google/googlePlaces';
import RaisedButton from 'material-ui/RaisedButton';
import { getUser } from './../../ducks/users';
import Snackbar from 'material-ui/Snackbar';
import { connect } from 'react-redux';
import axios from 'axios';
import './createPost.css';

class CreatePost extends Component {
  constructor(props) {
    super(props);
    this.state = {
      open: false,
      location: ''
    };
    this.saveInput = this.saveInput.bind(this);
    this.handleSnackbar = this.handleSnackbar.bind(this);
  }

  saveInput() {
    let newPost = {
      author: this.props.user.firstname,
      title: this.refs.title.value,
      body: this.refs.body.value,
      auth_id: this.props.match.params.id,
      locale: this.refs.location.state.address // place holder for region id
      // region_id: this.refs.location.value a
    };
    axios.post('/create/post', newPost);
  }

  handleSnackbar() {
    this.setState({
      open: !this.state.open
    });
    this.saveInput();
    window.location.assign(process.env.REACT_APP_URL + 'forum' );
  }

  componentDidMount() {
    this.props.getUser(this.props.match.params.id);
  }

  render() {
    return (
      <div className="post-header">
        <section className="title-input">
          <input type="text" placeholder="  Title" className="title" required autoFocus={true} ref="title" />

          <SimpleAdress ref="location" />
        </section>
        <br />
        <section className="story-input">
          <textarea name="" id="" cols="30" rows="10" ref="body" required />
        </section>
        <section className="button">
          <RaisedButton className="post-button" primary={true} onClick={this.handleSnackbar}>
            Post
          </RaisedButton>
        </section>
        <Snackbar
          open={this.state.open}
          message="Posted!"
          autoHideDuration={3000}
          onRequestClose={this.handleSnackbar}
          className="post-snackbar"
        />
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {
    user: state.userData
  };
}

export default connect(mapStateToProps, { getUser })(CreatePost);
