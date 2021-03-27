import React from 'react';
import MenuHeader from './MenuHeader';
import '../css/Menu.css';
import SectionTwelve from './SectionTwelve';
import Footer from './Footer';

const PrivacyPolicy = () => {
    return (
        <div>
            <MenuHeader />


            <h1 style={{
                display: 'block',
                width: '100%',
                marginTop: '300px',
                marginBottom: '300px',
                fontSize: '40px',
                background: '#ccc',
                textAlign: 'center'
            }}
            >Here goes LicenseAgreement</h1>

            <SectionTwelve />

            <Footer />
        </div>
    )


}
export default PrivacyPolicy;