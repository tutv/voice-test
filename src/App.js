import React, {Component} from 'react';
import "bootstrap/dist/css/bootstrap.css";
import Recorder from "./Recorder";

class App extends Component {
    render() {
        return (
            <div className="App ">
                <Recorder/>
            </div>
        );
    }
}

export default App;
