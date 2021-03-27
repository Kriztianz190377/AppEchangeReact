import React from 'react';
import MenuHeader from './MenuHeader';
import '../css/Menu.css';
import PackagePricing from '../component/Pricing/PackagePricing'
import SectionTwelve from './SectionTwelve';
import Footer from './Footer';


const Pricing = () => {
    return (
        <div>
            <MenuHeader/>
            
            <div >
            <PackagePricing/> 
            </div>    
                       
            <SectionTwelve/>   
            <Footer/>  

        </div>
    )

}
export default Pricing;