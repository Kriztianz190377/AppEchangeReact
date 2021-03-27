import React from 'react';
import LogoMenu from '../img/OmnibroNostar.svg';
import MenuHeader from './MenuHeader';
import '../css/Menu.css';
import SectionTwelve from './SectionTwelve';
import Footer from './Footer';
import RouterMobilApp from './MobilApp/RouterMobilApp';


const MobilApp = () => {
    return (
        <div>
            <MenuHeader />

            <div id='mobilapplogin'>
                <RouterMobilApp />
            </div>

            <SectionTwelve />

            <Footer />


        </div>
    )

}
export default MobilApp;