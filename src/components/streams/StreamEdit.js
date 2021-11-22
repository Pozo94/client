import React, {Component} from 'react';
import '../../styles/App.css';

class StreamEdit extends Component {
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
    render() {
        return (
            <div>
                EDIT
            </div>)

    }
}

export default StreamEdit;