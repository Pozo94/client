import React, {Component} from 'react';
import {Field, Form, reduxForm} from "redux-form";
import {connect} from "react-redux";
import {useNavigate, useLocation, Navigate} from 'react-router-dom'
import {createStream} from "../../actions";
import '../../styles/Form.css'

class  StreamCreate extends Component{

    renderError({error,touched}){
        if(touched&&error){
            return<div className='error'>{error}</div>

        }
    }
    renderInput=({input,label,meta})=>{

        return(
            <div className='field'>
                <label>{label}</label>
                <input {...input}/>
                {this.renderError(meta)}
            </div>

        )
    }
    renderTextForm=({input,label,meta})=>{
        return(
            <div className='field'>
                <label>{label}</label>
                <textarea  {...input}/>
                {this.renderError(meta)}
            </div>

        )
    }
    onSubmit=(formValues)=>{
        console.log("test");
        this.props.createStream(formValues);

    }
    render() {
    return(
        <div className='stream-wrap'>
            <Form onSubmit={this.props.handleSubmit(this.onSubmit)}   className='form'>
                <Field name="title" component={this.renderInput} label="Enter Title"/>
                <Field name="description" component={this.renderTextForm} label="Enter Description"/>
                <button onClick={this.toDashboard}  className="create-button">Create Stream</button>
            </Form>
        </div>
   )

}}
const validate=(formValues)=>{
    const errors={};
    if(!formValues.title){
        errors.title='Please enter a title!'
    }
    if(!formValues.description){
        errors.description='Please enter a description!'
    }
    return errors;
};
const formWrapped= reduxForm({
    form:'streamCreate',
    validate
})(StreamCreate);

export default connect(null,{createStream})(formWrapped);