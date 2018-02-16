import React from 'react';
import './postCards.css' 
import { Card, CardHeader, CardText, CardTitle, CardActions } from 'material-ui/Card'; 
import FlatButton from 'material-ui/FlatButton'
import {Link} from 'react-router-dom'


const postCards = (props) => {
    
        return (
            <div className='post'>
                <Card className='post-cards'>
                    <CardHeader
                    title={props.title}
                    subtitle={props.subtitle}
                    actAsExpander={true}
                    showExpandableButton={true}
                    />
                    <CardText
                    expandable={true}
                    >
                    {props.body}
                    <CardActions>
                        <Link to ={`forum/post/${props.id} `}><FlatButton>View</FlatButton></Link>
                        <FlatButton>Save</FlatButton>
                        <FlatButton>Report</FlatButton>
                    </CardActions>
                    </CardText>
                    <CardTitle
                    subtitle={props.cardTitle}
                    />
                </Card> 
            </div>
        );
}

export default postCards;
