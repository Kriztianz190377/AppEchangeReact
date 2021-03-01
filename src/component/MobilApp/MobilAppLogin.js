import React, { Component } from 'react';
import './MobilAppLogin.css';



class MobilAppLogin extends Component {
    render() {
        return (
            <body id="bodyForm">

                <form id='form'>
                    <h3>Log in</h3>
                    <div id='form-group'>
                        <div className="form-group">
                            <label>Email</label>
                            <input type="email" className="form-control"
                                placeholder="Enter email" />
                        </div>

                        <div className="form-group">
                            <label>Password</label>
                            <input type="password" className="form-control"
                                placeholder="Enter password" />
                        </div>

                        <div className="form-group">
                            <div className="custom-control custom-checkbox">
                                <input type="checkbox" className="custom-control-input"
                                    id="customCheck1" />
                                <label className="custom-control-label" htmlFor="customCheck1">Remember me</label>
                            </div>
                        </div>
                        <div id='signIn-Forgot'>
                            <button type="submit" className="btn btn-dark btn-lg btn-block">
                                Sign in</button>
                            <p className="forgot-password text-right">
                                Forgot <a href="/">password?</a>
                            </p>
                        </div>
                    </div>
                </form>
            </body >
        )

    }

}

export default MobilAppLogin;