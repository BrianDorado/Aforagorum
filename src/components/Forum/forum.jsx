import React, { Component } from 'react';
import PostCards from './../postCards/postCards'
import './forum.css'
import axios from 'axios'


class Forum extends Component {
    constructor(){
        super()
        this.state = {
            post: []
        }
    }

    componentDidMount(){
        axios.get('/post').then((res) => {
            this.setState({
                post: res.data
            })
        })
    }
    render() {
       const results = this.state.post.map(post => {
           return(
               <PostCards
                   key={post.id}
                   title={post.title}
                   subtitle={post.locale}
                   body={post.body}
                   cardTitle={post.author}
               />
           )
       })
        
        return (
            <div>
                <section className="post-header">
                    <strong>Recent Post</strong>
                    <div className='post-results'>
                     {results}
                    </div>

                </section>
                <section>

                </section>
                <section>{this.replies}</section>
            </div>
        );
    }
}

export default Forum;

//this.replies = {replies}