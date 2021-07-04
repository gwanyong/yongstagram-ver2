import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import LoginGwanyong from "./pages/gwanyong/Login/Login";

import MainGwanyong from "./pages/gwanyong/Main/Main";

class Routes extends React.Component {
    render() {
        return (
            <Router basename={process.env.PUBLIC_URL}>
                <Switch>
                    <Route exact path="/" component={LoginGwanyong} />
                    <Route
                        exact
                        path="/MainGwanyong"
                        component={MainGwanyong}
                    />
                </Switch>
            </Router>
        );
    }
}
export default Routes;
