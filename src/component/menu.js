import React from "react"
import '../css/Menu.css'
import LogoMenu from '../img/OmnibroNostar.svg'
import MenuImag from '../img/menu.svg';
import Phone from '../img/celTest.png';
import SectionThree from './SectionThree';
import SectionFour from '../component/SectionFour';
import SectionFive from './SectionFive';
import SectionSix from './SectionSix';
import ArchitectureTechnologies from '../img/ArchitectureTechnologies.png';
import TechnologiesIcons from '../img/technoligiesIcons.png';
import DeliverySchedule from '../img/DeliverySchedule.png';
import ImageBook from '../img/sectionTenBox.png';
import Linkedin from '../img/linkedin.svg';
import Facebook from '../img/facebook.svg';
import Twiter from '../img/twitter.svg';
import Skype from '../img/skype.svg';
import Telegram from '../img/telegram.svg';


const Menu = () => {

    return (
        <body className='container'>
            <main>
                <div className="content-all">
                    <div id="left">
                        <label for=""><a href='/'>CCCL</a></label>
                    </div>
                    <div id="droit">
                        <input type="checkbox" id="check" />
                        <label for="check" class="icon-menu">
                            <img src={MenuImag} style={{ width: "20px" }} alt='/' />Menu</label>
                        <nav className="menu">
                            <nav id="shadow">
                                <ul >
                                    <li><a href="#sectionfour">FEATURES</a></li>
                                    <li><a href="/Pricing" >PRICING</a></li>
                                    <li><a href="/Blog" >BLOG</a></li>
                                    <li><a href="#SectionEleven">CONTACT US</a></li>
                                    <li><a href="/Demo" >WEB DEMO</a></li>
                                    <li><a href="/MobilApp">MOBIL APP</a></li>
                                </ul>
                            </nav>
                        </nav>
                    </div>
                </div>
            </main>
            <section className="section-one">
                <header className="header-body">
                    <nav className="moExSo" >
                        <h1>CCCL Exchange Software</h1>
                        <div className="ps" >
                            <p>Cross-Platform SAAS</p><br />
                            <p>for Web, Mobile & Desktop Applications</p>
                        </div>
                        <div className="form">
                            <form action="/MobilApp" className="mobilApp" >
                                <button type="submit" name="mobilApp" for="mobilapp">Mobil APP</button>
                            </form>
                            <form action="/Demo" target="_blank" className="demo" >
                                <button type="submit" name="demo" for="webdemo">Web Demo</button>
                            </form>
                        </div>
                    </nav>
                    <nav className="image-cel">
                        <div className="image"> <img src={Phone} alt="/" style={{ width: '265px', borderRadius: '25px' }} /> </div>
                    </nav>
                </header>
            </section>
            <section className="section-two">
                <nav className="nav-moExSo" >
                    <h2>CCCL application</h2>
                    <h3><a href="/"> Guide and Recommendations</a></h3>
                </nav>

                <nav className="nav-AndroidIOSdemo"  >
                    <div className="subnav-left" >
                        <h3>Android demo</h3>
                        <form  action="/Demo" id="androiddemo" href="/Demo" method="get">
                            <button type="submit" onclick="location.href=''" name="donwload" form="androiddemo">
                                DONWLOAD APK</button></form>
                    </div>
                    <div className="subnav">
                        <h3>IOS demo</h3>
                        <form action="/MobilApp" id="iosdemo" method="POST">
                            <button type="submit"  name="jointlist" form="iosdemo">
                                JOINT THE LIST</button></form>
                    </div>
                </nav>

                <nav className="nav-cell-three" >
                    <div class="image"> <img src={Phone} alt="" style={{ width: '265px', borderRadius: '25px' }} /></div>
                    <div class="image"> <img src={Phone} alt="" style={{ width: '265px', borderRadius: '25px' }} /></div>
                    <div class="image"> <img src={Phone} alt="" style={{ width: '265px', borderRadius: '25px' }} /></div>
                </nav>

            </section>
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
            <section className="SectionTen">
                <div className="ten-boxs">
                    <div className="ten-box-img" >
                        <img src={ImageBook} style={{ height: '410px', width: '750px' }} alt="" />
                    </div>
                    <div className="ten-box-p">
                        <p>Flutter Framework and Dart Programming Language are at
                        the core of CCCL Front-End interface. Developed by
                        Google to build Mobile, Desktop, Server and Web
                        Applications of the next generation, Flutter became a
                        perfect match for MobiDAX.</p>
                        <p>Building beautiful and natively compiled applications,
                        MobiDAX team chose Flutter Framework as a cost efficient
                        solution for application development and maintenance.
                        Join the ranks with some of the world's leading brands,
                        IT giants and FinTech companies.</p>
                    </div>
                </div>
            </section>
            <section className="SectionEleven" id="SectionEleven">

                <div className="eleven-boxs">

                    <div className="eleven-box-left"  >
                        <h1>Contact us today!</h1>
                        <p>Building beautiful and natively compiled applications,
                        CCCL team chose Flutter Framework as a cost efficient
                        solution for application development and maintenance.
                        </p>
                    </div>
                    <div className="eleven-box-right"  >
                        <form className="form">
                            <label for="name">
                                <h4>Full Name*</h4>
                                <input type="text" name="name" placeholder="" />
                            </label>
                            <label for="email">
                                <h4>Email*</h4>
                                <input type="email" name="email" placeholder="" />
                            </label>
                            <textarea name="textarea" placeholder="Type your Message"></textarea>

                            <input type="submit" value="Send" />
                        </form>
                    </div>
                </div>
            </section>
            <section className="SectionTwelve">

                    <div className="twelve-boxs">

                        <nav className="social-left"  >
                            <div>
                                
                            </div>
                            <div className="social">
                                <ul>
                                    <li><img src={Linkedin} style={{width:'40px'}} alt="" />
                                        <a className="linkedin" href="https://www.linkedin.com/">Linkedin</a></li>
                                    <li><img  src={Skype} style={{width:'40px'}} alt="" />
                                        <a className="skype" href="https://www.skype.com/">Skype</a></li>
                                    <li><img src={Facebook} alt="" style={{width:'40px'}}/>
                                        <a className="facebook" href="https://www.facebook.com/">Facebook</a></li>
                                    <li><img src={Telegram} alt="" style={{width:'40px'}} />
                                        <a className="telegram" href="https://https://telegram.org/.org/">Telegram</a></li>
                                    <li><img src={Twiter} alt=""  style={{width:'40px'}}/>
                                        <a className="twitte" href="https://twitter.com/">Twitter</a></li>
                                </ul>
                            </div>
                        </nav>

                        <nav className="cont-leg-rigth" >

                            <div className="cont-leg1">
                                <div className="contact">
                                    <h3>CONTACTS</h3>
                                    <a href="/">Book-a-call</a>
                                    <a href="/">info@CCCL.io</a>
                                </div>
                                <div className="telesu">
                                    <h3>TELEGRAM SUPPORT</h3>
                                    <a href="/">@Omnibro</a>
                                    <a href="/">Presentation</a>
                                </div>
                            </div>
                            <div className="cont-leg2">
                                <h3>LEGAL</h3>
                                <a href="/TermsService">Terms of service</a>
                                <a href="/PrivacyPolicy">Privacy policy</a>
                                <a href="/LicenseAgreement">End-User License Agreement </a>

                            </div>
                        </nav>
                    </div>

                    <div className="copyright" >Copyright &copy; 2021 B2X</div>
                </section>
                <footer>
                    <a href="https://www.b2xcentral.com/">
                        b2xcentral.com/</a>
                </footer>
        </body>

    )
}
export default Menu;