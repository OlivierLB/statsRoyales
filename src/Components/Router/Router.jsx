import React, {Component} from 'react';
import { BrowserRouter, Switch, Route, Redirect  } from 'react-router-dom'
import Versus from "../Versus/Versus";
import Compare from "../Compare/Compare"

export default class Router extends Component {

    render() {
        return(
            <BrowserRouter>
                <Switch>
                    <Route exact path="/" component={Versus}/>
                    <Route exact path="/match" component={Compare}/>
                    <Redirect to='/'/>
                </Switch>
            </BrowserRouter>
        );
    }
}