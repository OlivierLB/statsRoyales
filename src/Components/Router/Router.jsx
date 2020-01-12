import React, {Component} from 'react';
import { BrowserRouter, Switch, Route, Redirect  } from 'react-router-dom'
import Versus from "../Versus/Versus";
import Compare from "../Compare/Compare"

export default class Router extends Component {

    constructor(props) {
        super(props);
        this.state = {
            retour: <Versus setRoute={ this.updateRoute.bind(this)}  />
        };
        this.updateRoute = this.updateRoute.bind(this)
    }

    updateRoute(path){
        switch (path) {
            case "/match":
                this.setState({retour: <Compare setRoute={this.updateRoute.bind(this)} />});
                break;
            default:
        }
    }

    render() {
        return(
            <React.Fragment>
                {this.state.retour}
            </React.Fragment>
        );
    }
}