import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import registerServiceWorker from './registerServiceWorker';
import {boostrap} from "react-bootstrap";
import CustomNavbar from "./Components/CustomNavbar";

ReactDOM.render(<App />, document.getElementById('root'));
registerServiceWorker();
