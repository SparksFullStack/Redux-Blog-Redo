import React, { Component } from 'react';
import { Field, reduxForm } from 'redux-form';
import { connect } from 'react-redux';

class EditPost extends Component {
    render(){
        console.log(this.props.post);
        return (
            <div>
                Edit Post!
            </div>
        )
    }
}

const mapStateToProps = ({posts}, ownProps) => {
    return { post: posts }
}

export default reduxForm({
    form: 'EditFormForm',
})(connect(mapStateToProps)(EditPost));