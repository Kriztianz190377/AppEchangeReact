
import React, { Component } from "react";

class SignUp extends Component {
    render() {
        return (
            <body id="bodyForm">
                <form id='form'>
                    <h3>Register</h3>
                    <div id='form-group'>
                        <div className="form-group">
                            <label>First name</label>
                            <input type="text" className="form-control" placeholder="First name" />
                        </div>

                        <div className="form-group">
                            <label>Last name</label>
                            <input type="text" className="form-control" placeholder="Last name" />
                        </div>

                        <div className="form-group">
                            <label>Email</label>
                            <input type="email" className="form-control" placeholder="Enter email" />
                        </div>

                        <div className="form-group">
                            <label>Password</label>
                            <input type="password" className="form-control" placeholder="Enter password" />
                        </div>

                        <div id='signIn-Forgot'>
                        <button type="submit" className="btn btn-dark btn-lg btn-block">Register</button>
                        <p className="forgot-password text-right">
                            Already registered <a href="/MobilApp/sign-in">log in?</a>
                        </p>
                        </div>
                    </div>
                </form>


            </body>
        );
    }
}
export default SignUp;