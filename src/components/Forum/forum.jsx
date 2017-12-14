import React, { Component } from 'react';

class Forum extends Component {
    render() {
        // const reply = comments.map((e,i,a)=> {
        //    return (
        //     <div className='post-reply'>

        //     </div>
        //    ) 
        // })
        
        return (
            <div>
                <section>
                    <div className="post-header">
                    
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