
import React, { Component } from "react";
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import Login from './MobilAppLogin';
import SignUp from './MobilSingUp';
import MobilMenu from './MobilMenu'

class RouterMobilApp extends Component {

    
    render() {
        return (
            <BrowserRouter>
                <MobilMenu />
                
                <Switch>
                    <Route exact path='/MobilApp/' component={Login} />
                    <Route exact path='/MobilApp/sign-in' component={Login} />
                    <Route exact path='/MobilApp/sign-up' component={SignUp} />

                </Switch>
            </BrowserRouter>


        );
    }
}
export default RouterMobilApp;