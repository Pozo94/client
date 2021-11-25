import React, {Component} from 'react';
import '../../styles/App.css';
import {connect} from "react-redux";
import {fetchStreams} from "../../actions";
import '../../styles/List.css'
import {Link} from "react-router-dom";

class StreamList extends Component {
    componentDidMount() {
        this.props.fetchStreams();

    }

    renderCreateBtn() {
        if (this.props.isSignedIn) {
            return (
                <div className='footer' >
                    <Link to="/streams/new" className='btn create'>Create Stream</Link>
                </div>)
        }
    }

    renderAdmin(stream) {
        if (stream.userId === this.props.currentUserId) {
            return <span className='buttons'>
                <button className='btn'>Edit</button>
                <button className='btn danger'>Delete</button>
            </span>
        }
    }

    renderList() {
        return this.props.streams.map(stream => {
            return (<div className='item' key={stream.id}>
                    <div className='stream'>
                        {stream.title}
                        <div className='description'>
                            <span className='dsc'>{stream.description}
                            </span>

                            {this.renderAdmin(stream)}


                        </div>


                    </div>


                </div>
            )
        })
    }

    render() {
        return (
            <div className='list-wrapper'>
                <h1>STREAMS</h1>
                <div className='list'>{this.renderList()}</div>
                {this.renderCreateBtn()}
            </div>


        )

    }
}

const mapStateToProps = (state) => {
    return {streams: Object.values(state.streams), currentUserId: state.auth.userId, isSignedIn: state.auth.isSignedIn}

}
export default connect(mapStateToProps, {fetchStreams})(StreamList);