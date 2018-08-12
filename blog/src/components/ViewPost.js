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
                <h3>{post.title}</h3>
                <h6>Categories: {post.categories}</h6>
                <p>{post.content}</p>
                <Link to={`/posts/editpost/${this.props.match.params.id}`}>
                <button
                    className="btn btn-primary"
                >
                    Edit Post
                </button>
                </Link>
                <button
                    style={{ marginLeft: '10px' }}
                    className='btn btn-danger'
                    onClick={this.handleDelete}
                >
                    Delete Post
                </button>
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