import React, { Component } from 'react';

class Feedback extends Component {
    render() {
        return (
            <div className="help-container" >
                <section className="feed-container">What I expect vs What I got</section>
                <section className="feed-container">
                    <form action="submit">
                        <input type="text"/>
                        
                        <input type="text"/>
                                
                        <textarea name="" id="" cols="30" rows="10"></textarea>
                    </form>
                </section>
                <section className="feeb-container"></section>
            </div>
        );
    }
}

export default Feedback;