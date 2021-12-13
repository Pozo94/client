import React, {Component} from 'react';
import {connect} from "react-redux";
import {fetchStream} from "../../actions";
import {useParams} from "react-router-dom"
import '../../styles/App.css';



class StreamEdit extends Component {

    componentDidMount() {

        this.props.fetchStream(this.props.match.params.id);
    }

    renderInput=({input,label,meta})=>{
        console.log(this.props);
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
        console.log(this.props)
        return (
            <div>
                EDIT
            </div>)

    }
}
const mapStateToProps=(state,ownProps)=>{
    console.log(ownProps);
    return{stream:state.streams[ownProps.match.params.id]}

}
export default connect(mapStateToProps,{fetchStream})(StreamEdit);