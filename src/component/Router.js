import React, { Component } from 'react';
import { BrowserRouter, Route } from 'react-router-dom';
import Pricing from './Pricing';
import Demo from './Demo';
import MobilApp from './MobilApp';
import Blog from './Blog';
import PrivacyPolicy from './PrivacyPolicy';
import TermsService from './TermsService';
import LicenseAgreement from './LicenseAgreement'
import Menu from './menu';

class Router extends Component {
    render() {
        return (

            <BrowserRouter>

                <Route exact path='/' component={Menu} />    
                <Route exact path='/Pricing' component={Pricing} />
                <Route exact path='/Demo' component={Demo} />
                <Route exact path='/MobilApp' component={MobilApp} />
                <Route exact path='/Blog' component={Blog} />
                <Route exact path='/PrivacyPolicy' component={PrivacyPolicy} />
                <Route exact path='/TermsService' component={TermsService} />
                <Route exact path='/LicenseAgreement' component={LicenseAgreement} />                

            </BrowserRouter>
        )
    }
}
export default Router;