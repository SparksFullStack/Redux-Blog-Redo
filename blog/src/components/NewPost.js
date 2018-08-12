import React, { Component } from 'react';
import { Field, reduxForm } from 'redux-form';

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

    render(){
        return(
            <div>
                <form>
                    <Field 
                        name="title"
                        component={this.renderForm}
                        label="Title"
                    />

                    <Field 
                        name="category"
                        component={this.renderForm}
                        label="Category"
                    />

                    <Field 
                        name="content"
                        component={this.renderForm}
                        label="Content"
                    />
                </form>
            </div>
        )
    }
}

const validate = values => {
    const errors = {};

    if (!values.title || values.title.length < 3) errors.title = "Please enter a title greater than three characters long";
    if (!values.category) errors.category = "Please enter a category";
    if (!values.content) errors.content = "Please enter content for this post";

    return errors;
}

export default reduxForm({
    validate: validate,
    form: "NewPostForm",
})(NewPost);