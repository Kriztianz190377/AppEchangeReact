import React from 'react';
import MenuHeader from './MenuHeader';
import SectionEleven from './SectionEleven';
import Footer from './Footer';
import '../css/Menu.css';
import SectionTwelve from './SectionTwelve';


const Demo = () => {
    return (
        <div>

            <MenuHeader/>


            <h1 style={{
                display: 'block',
                width: '100%',
                marginTop: '300px',
                marginBottom: '300px',
                fontSize: '40px',
                background: '#ccc',
                textAlign: 'center'
            }}
            >here goes demo</h1>
<SectionEleven/>
<SectionTwelve/>
<Footer/>  

        </div >
    )

}
export default Demo;