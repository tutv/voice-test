import React, {Component} from "react";
import MediaStreamRecorder from 'msr';

class Recorder extends Component {
    constructor(props) {
        super(props);
        this.state = {
            record: false,
            audio: null
        }

    }

    startRecording = () => {
        const mediaConstraints = {
            audio: true
        };

        navigator.getUserMedia(mediaConstraints, (stream) => {
            const mediaRecorder = new MediaStreamRecorder(stream);

            mediaRecorder.mimeType = 'audio/wav';
            mediaRecorder.ondataavailable = (blob) => {
                const blobURL = URL.createObjectURL(blob);

                console.log(blobURL);

                this.setState({
                    audio: blobURL
                });
            };
            mediaRecorder.start();

            setTimeout(() => {
                mediaRecorder.stop();
            }, 3000);
        }, error => console.error(error));
    };

    render() {
        const {audio} = this.state;

        return (
            <div className="container">
                <div className="row justify-content-center">
                    <div className="col-6">
                        <h2>Demo recorder</h2>
                    </div>
                </div>

                <div className="row justify-content-center">
                    <div className="col-6" style={{marginBottom: '20px'}}>
                        <button className="btn btn-primary" type="primary" onClick={this.startRecording}>Start</button>
                    </div>
                </div>

                <div className="row justify-content-center">
                    <div className="col-6">
                        {
                            !!audio &&
                            <audio controls src={audio}/>
                        }

                        {audio}
                    </div>
                </div>
            </div>
        );
    }
}

export default Recorder;