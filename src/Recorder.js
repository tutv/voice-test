import React, {Component} from "react";
import {ReactMic} from 'react-mic';
import {Button} from "antd";

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
            <div>
                <ReactMic
                    record={this.state.record}
                    className="sound-wave"
                    onStop={this.onStop}
                    strokeColor="#000000"
                    backgroundColor="#FF4081"/>
                <Button onClick={this.startRecording}>Start</Button>
                <Button onClick={this.stopRecording}>Stop</Button>

                {
                    !!audio &&
                    <audio controls src={audio}/>
                }
            </div>
        );
    }
}

export default Recorder;