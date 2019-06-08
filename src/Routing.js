import React, {Component} from 'react';
import {Route, Switch} from 'react-router-dom'

import Authentication from './app/containers/authentication'
import Home from './app/containers/home'

export default class Routing extends Component {


    render() {
        return (
            <Switch>
                <Route path="/" exact component={Authentication}/>
                <Route path="/homepage" exact component={Home}/>
            </Switch>

        );
    }
}
