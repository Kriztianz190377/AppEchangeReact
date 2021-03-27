import React from "react"
import '../css/Menu.css'
import MenuHeader from './MenuHeader';
import SectionOne from './SectionOne';
import SectionTwo from './SectionTwo';
import SectionThree from './SectionThree';
import SectionFour from '../component/SectionFour';
import SectionFive from './SectionFive';
import SectionSix from './SectionSix';
import SectionTen from './SectionTen';
import SectionEleven from './SectionEleven';
import SectionTwelve from './SectionTwelve';
import Footer from './Footer';
import ArchitectureTechnologies from '../img/ArchitectureTechnologies.png';
import TechnologiesIcons from '../img/technoligiesIcons.png';
import DeliverySchedule from '../img/DeliverySchedule.png';


const Menu = () => {

    return (
        <body className='container'>

            <MenuHeader />
            <SectionOne />
            <SectionTwo />

            <section className="SectionThree">
                <SectionThree />
            </section>
            <section className="sectionfour" id="sectionfour">
                <SectionFour />
            </section>
            <section className="SectionFive">
                <article >
                    <SectionFive />
                </article>
            </section>
            <section className="SectionSix">
                <h2 className="" >Product Highlights</h2>
                <nav className="highlights-boxs">
                    <SectionSix />
                </nav>
            </section>

            <section className="SectionsSeven" >
                <h2> Architecture & Technologies</h2>
                <div className="SectionsSeven-img">
                    <img src={ArchitectureTechnologies} alt="/" />
                </div>
            </section>

            <section className="SectionsEight" >
                <div className="SectionsSeven-img">
                    <img src={TechnologiesIcons} style={{ height: '300px', width: '500px' }} alt="" />
                </div>
            </section>

            <section className="SectionsNine" >
                <div className="SectionsSeven-img">
                    <img src={DeliverySchedule} alt="" />
                </div>
            </section>

            <SectionTen/>
            <SectionEleven/>            
            <SectionTwelve/>        
            <Footer/>  

            
        </body>

    )
}
export default Menu;