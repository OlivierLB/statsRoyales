import React, {Component} from 'react';
import { BrowserRouter, Switch, Route, Redirect  } from 'react-router-dom'
import Versus from "../Versus/Versus";

export default class Router extends Component {

    render() {
        return(
            <BrowserRouter>
                <Switch>
                    <Route exact path="/" component={Versus}/>
                    <Redirect to='/'/>
                </Switch>
            </BrowserRouter>
        );
    }
}