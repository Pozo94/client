import React from 'react';
import '../styles/App.css'
import '../styles/GoogleAuth.css'
import {connect} from "react-redux";
import {signIn,signOut} from "../actions";

class GoogleAuth extends React.Component {


    componentDidMount() {
        window.gapi.load('client:auth2', () => {
            window.gapi.client.init({
                clientId: '94860613539-82678bmh745dim3ig7u58kpi0t704lq7.apps.googleusercontent.com',
                scope: 'email'
            }).then(() => {

                this.auth = window.gapi.auth2.getAuthInstance();
                this.onAuthChange(this.auth.isSignedIn.get());
                this.auth.isSignedIn.listen(this.onAuthChange)
            })
        });
    }

    onAuthChange = isSignedIn => {
        if (isSignedIn===true){
            this.props.signIn(this.auth.currentUser.get().getId());
        }else{
            this.props.signOut();
        }
    }

    renderAuthButton() {
        if (this.props.isSignedIn === null) {
            return null;


        } else if (this.props.isSignedIn) {
            return <button className='button' onClick={() => {
                window.gapi.auth2.getAuthInstance().signOut();
            }
            }>

                SignOut
            </button>
        } else {
            return <button className='button' onClick={() => {
                window.gapi.auth2.getAuthInstance().signIn();
            }
            }>
                SignIn
            </button>
        }
    }

    render() {
        return (
            <div className='centered'>
                {this.renderAuthButton()}
            </div>
        )
    }
}
const mapStateToProps = (state)=>{
    return {isSignedIn: state.auth.isSignedIn };
}
export default connect(mapStateToProps,{signIn, signOut

})(GoogleAuth);