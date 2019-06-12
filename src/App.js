import React, {Component} from 'react';
import './App.css';
import Routing from '../src/Routing'
import {BrowserRouter} from 'react-router-dom'


class App extends Component {
    render() {
        return (
            <BrowserRouter>
                <div className="root">
                    <Routing/>
                </div>
            </BrowserRouter>
        );
    }
}

export default App;
