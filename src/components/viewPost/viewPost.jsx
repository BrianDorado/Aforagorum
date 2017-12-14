import React, { Component } from 'react';
import { Card, CardHeader, CardText } from 'material-ui/Card'; 
import './viewPost.css'


class ViewPost extends Component {
    render() {
        return (
            <div className='post-thread'>
                <section className='post-header'>
                    <Card className='post'>
                        <CardHeader
                            title='Post title'
                            subtitle='Post Author'
                        />
                        <CardText>
                            Here I will list my plan for terrorizing Gothem and how we should deal with the Batman. I will also
                      list my video game weakness, darkest fears and dream vacation.
                    </CardText>
                    </Card>
                </section>
                <br/> 
                <strong>Replies </strong>
                <br/> 
                <section className='post-replies'>
                    <Card 
                    className='post-card'
                    
                    >
                        <CardHeader
                            title='Post Author'
                            actAsExpander={true}
                            showExpandableButton={true}
                        />
                        <CardText
                            expandable={true}
                        >
                            I will save Gothem! <br/>... Because I'm Batman! <br/> I also would like to see Iceland someday! 
                    </CardText>
                    </Card> 

                </section>
            </div>
        );
    }
}

export default ViewPost;