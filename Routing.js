import React, {Component} from 'react';
import { Route } from 'react-router-dom'

import Authentication from './app/containers/authentication'
import Home from './app/containers/home'

export default class Routing extends Component {

    render() {
        return (
            <div className="page-content">
                <Route path="/" exact component={Authentication}  />
                <Route path="/home" exact component={Home}  />
            </div>
        );
    }
}
