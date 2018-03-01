import React, { Component } from 'react';
import PostCards from './../postCards/postCards';
import './forum.css';
import axios from 'axios';

class Forum extends Component {
  constructor() {
    super();
    this.state = {
      post: [],
      searchTerm: ''
    };
  }

  defineSearchTerm = () => {
    this.setState({
      searchTerm: this.refs.searchInput.value
    });
  };

  componentDidMount() {
    axios.get('/post').then(res => {
      this.setState({
        post: res.data
      });
    });
  }
  render() {
    let postArrayMaliable = this.state.post
      .filter(
        arr =>
          `${arr.author} ${arr.locale} ${arr.title} ${arr.body} `
            .toUpperCase()
            .indexOf(this.state.searchTerm.toUpperCase()) >= 0
      )
      .map(post => {
        return (
          <PostCards
            key={post.id}
            id={post.id}
            title={post.title}
            subtitle={post.locale}
            body={post.body}
            cardTitle={post.author}
          />
        );
      });

    return (
      <div>
        <section>
          <input type="text" onChange={this.defineSearchTerm} ref="searchInput" placeholder="Search" />
        </section>
        <br />
        <section className="post-header">
          <strong>Recent Post</strong>
          <br />
          <div className="post-results">{postArrayMaliable}</div>
        </section>
      </div>
    );
  }
}

export default Forum;
