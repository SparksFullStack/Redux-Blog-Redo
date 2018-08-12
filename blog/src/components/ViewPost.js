import React, { Component } from 'react';
import { connect } from 'react-redux';
import { fetchPost, deletePost } from '../actions';
import { Link } from 'react-router-dom';

class ViewPost extends Component {
    componentDidMount(){
        const { id } = this.props.match.params;
        this.props.fetchPost(id);
    }

    handleDelete = () => {
        const { id } = this.props.match.params;
        this.props.deletePost(id, () => this.props.history.push('/'))
    }

    render(){
        const { post } = this.props;

        if (!post) return <div>Now Loading...</div>;

        return(
            <div>
                <Link to='/'>Back to Index</Link>
                <button
                    className='btn btn-danger pull-xs-right'
                    onClick={this.handleDelete}
                >
                    Delete Post
                </button>
                <h3>{post.title}</h3>
                <h6>Categories: {post.categories}</h6>
                <p>{post.content}</p>
            </div>
        )
    }
}

const mapStateToProps = (state, ownProps) => {
    return { 
        post: state.posts[ownProps.match.params.id]
    }
}

export default connect(mapStateToProps, { fetchPost, deletePost })(ViewPost);