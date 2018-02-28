import React, { Component } from 'react';
import { Card, CardHeader, CardText } from 'material-ui/Card';
import  RaisedButton  from 'material-ui/RaisedButton'
import './viewPost.css';
import axios from 'axios';

class ViewPost extends Component {
  constructor() {
    super();
    this.state = {
      post: []
    };
  }

  componentDidMount() {
    axios.get(`post/${this.props.match.params.id}`).then(res => {
      this.setState({
        post: res.data[0]
      });
    });
  }

  render() {
    return (
      <div className="post-thread">
        <section className="post-header">
          <Card className="post">
            <CardHeader title={this.state.post.title} subtitle={this.state.post.locale} />
            <CardText>{this.state.post.body}</CardText>
          </Card>
        </section>
        <br/>
        <section>
          <RaisedButton>Reply</RaisedButton> 
        </section>
        <br />
        <strong>Replies </strong>
        <br />
        <section className="post-replies">
          <Card className="post-card">
            <CardHeader title="Post Author" actAsExpander={true} showExpandableButton={true} />
            <CardText expandable={true} />
          </Card>
        </section>
      </div>
    );
  }
}

export default ViewPost;
