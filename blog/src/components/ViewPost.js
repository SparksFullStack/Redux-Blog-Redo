import React, { Component } from 'react';
import { connect } from 'react-redux';

class ViewPost extends Component {
    render(){
        return(
            <div>
                View Post!
            </div>
        )
    }
}

export default connect()(ViewPost);