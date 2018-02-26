import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';

import MediaRecorder from 'audio-recorder-polyfill';
window.MediaRecorder = MediaRecorder;

ReactDOM.render(<App/>, document.getElementById('root'));
