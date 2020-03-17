import React, {Component} from "react";
import {Route, BrowserRouter, Switch} from "react-router-dom";

class App extends Component {
    render() {
        return (
            <BrowserRouter>
                <Switch>
                    <Route exact path="/" render='render'/>
                </Switch>
            </BrowserRouter>
        )
    };
}

export default App;