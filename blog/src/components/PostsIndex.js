// dependencies
import React, { Component } from 'react';
import { connect } from 'react-redux';

// action creators to import
import { fetchPosts } from '../actions';

class PostsIndex extends Component {
    componentDidMount(){
        this.props.fetchPosts();
    }
    render(){
        return(
            <div>
                Posts Index!
            </div>
        )
    }
}

const mapStateToProps = ({posts}) => {
    return { posts };
}

export default connect(mapStateToProps, { fetchPosts })(PostsIndex);