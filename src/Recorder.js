import React, {Component} from "react";
import {ReactMic} from 'react-mic';

class Recorder extends Component {
    constructor(props) {
        super(props);
        this.state = {
            record: false,
            audio: null
        }

    }

    startRecording = () => {
        this.setState({
            record: true
        });
    };

    stopRecording = () => {
        this.setState({
            record: false
        });
    };

    onStop = (recordedBlob) => {
        this.setState({
            audio: recordedBlob.blobURL
        });
    };

    render() {
        const {audio} = this.state;

        return (
            <div className="container">
                <div className="row justify-content-center">
                    <div className="col-6">
                        <h2>Demo recorder</h2>

                        <ReactMic
                            record={this.state.record}
                            className="sound-wave"
                            onStop={this.onStop}
                            strokeColor="#000000"
                            backgroundColor="#FF4081"/>
                    </div>
                </div>

                <div className="row justify-content-center">
                    <div className="col-6" style={{marginBottom: '20px'}}>
                        <button className="btn btn-primary" type="primary" onClick={this.startRecording}>Start</button>
                        {' '}
                        <button className="btn btn-danger" onClick={this.stopRecording}>Stop</button>
                    </div>
                </div>

                <div className="row justify-content-center">
                    <div className="col-6">
                        {
                            !!audio &&
                            <audio controls src={audio}/>
                        }
                    </div>
                </div>
            </div>
        );
    }
}

export default Recorder;