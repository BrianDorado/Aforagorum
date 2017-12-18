import React, { Component } from 'react';
import { Card, CardHeader, CardText } from 'material-ui/Card';  

class postCards extends Component {
    render() {
        return (
            <div className='post'>
            <Card className='post-cards'>
                <CardHeader
                title={this.props.title}
                subtitle={this.props.subtitle}
                actAsExpander={true}
                showExpandableButton={true}
                />
                <CardText
                expandable={true}
                >
                {this.props.body}
                        </CardText>
            </Card> 
            </div>
        );
    }
}

export default postCards;


{/* <Card className='post-cards'>
    <CardHeader
        title={this.state.responses.title}
        subtitle={this.state.responses.author}
        actAsExpander={true}
        showExpandableButton={true}
    />
    <CardText
        expandable={true}
    >
        {this.state.responses[0].body}
    </CardText>
</Card>  */}