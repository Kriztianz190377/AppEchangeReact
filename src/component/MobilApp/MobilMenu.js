import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import './MobilAppLogin.css';



class MobilMenu extends Component {

    render() {
        return (
            <div className="group-App">
                <nav className='navbar'>
                    <ul >
                        <li>
                            <Link className='linkli' activeclassName="active" to={"/MobilApp/sign-in"}>Sign-In </Link>

                        </li>
                        <li>
                            <Link className='linkli' activeclassName="active"to={"/MobilApp/sign-up"}>Sign-Up </Link>
                        </li>
                    </ul>

                </nav>
            </div>
        )


    }
}
export default MobilMenu;