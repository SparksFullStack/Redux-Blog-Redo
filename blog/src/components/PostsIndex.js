// dependencies
import React, { Component } from 'react';
import { connect } from 'react-redux';
import _ from 'lodash';
import { Link } from 'react-router-dom';

// action creators to import
import { fetchPosts } from '../actions';

class PostsIndex extends Component {
    componentDidMount(){
        this.props.fetchPosts();
    }

    renderList = () => {
        return _.map(this.props.posts, post => {
            return <li key={post.id} className='list-group-item'>{post.title}</li>
        })
    }

    render(){
        console.log(this.props.posts);
        return(
            <div>
                <div className='text-xs-right'>
                    <Link to='/posts/new' className='btn btn-primary'>
                        Add a Post
                    </Link>
                </div>
                <h3>Posts</h3>
                <ul className='list-group'>
                    {this.renderList()}
                </ul>
            </div>
        )
    }
}

const mapStateToProps = ({posts}) => {
    return { posts };
}

export default connect(mapStateToProps, { fetchPosts })(PostsIndex);