import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Field, reduxForm } from 'redux-form';
import { createPost } from '../actions';
import { Link } from 'react-router-dom';


class NewPost extends Component {
    renderForm = (field) => {
        const className = `form-group ${field.meta.touched && field.meta.error ? 'has-danger' : ""}`

        return (
            <div className={className}>
                <label>{field.label}</label>
                <input 
                    className='form-control'
                    type="text"
                    { ...field.input }
                />
                <div className='text-help'>
                    { field.meta.touched ? field.meta.error : "" }
                </div>
            </div>
        )
    }

    submitHandler = (values) => {
        this.props.createPost(values, (route) => this.props.history.push(route));
    }

    render(){
        const { handleSubmit } = this.props;

        return(
            <div>
                <form onSubmit={handleSubmit(this.submitHandler)}>
                    <Field 
                        name="title"
                        component={this.renderForm}
                        label="Title"
                    />

                    <Field 
                        name="categories"
                        component={this.renderForm}
                        label="Categories"
                    />

                    <Field 
                        name="content"
                        component={this.renderForm}
                        label="Content"
                    />
                    <button type='submit' className='btn btn-primary'>Submit</button>
                    <Link style={{ marginLeft: '10px' }} to='/' className='btn btn-danger'>Cancel</Link>
                </form>
            </div>
        )
    }
}

const validate = values => {
    const errors = {};

    if (!values.title || values.title.length < 3) errors.title = "Please enter a title greater than three characters long";
    if (!values.categories) errors.categories = "Please enter a category";
    if (!values.content) errors.content = "Please enter content for this post";

    return errors;
}

export default reduxForm({
    validate: validate,
    form: "NewPostForm",
})(connect(null, { createPost })(NewPost));