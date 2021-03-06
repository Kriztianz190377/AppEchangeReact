import React from 'react';
import MenuHeader from './MenuHeader';
import LogoMenu from '../img/OmnibroNostar.svg';
import '../css/Menu.css';
import Linkedin from '../img/linkedin.svg';
import Facebook from '../img/facebook.svg';
import Twiter from '../img/twitter.svg';
import Skype from '../img/skype.svg';
import Telegram from '../img/telegram.svg';

const TermsService = () => {
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
            >Here goes TermsService</h1>


            <section className="SectionTwelve">

                <div className="twelve-boxs">

                    <nav className="social-left"  >
                        <div>
                            <img src={LogoMenu} alt="" width="250" />
                        </div>
                        <div className="social">
                            <ul>
                                <li><img src={Linkedin} style={{ width: '40px' }} alt="" />
                                    <a className="linkedin" href="https://www.linkedin.com/">Linkedin</a></li>
                                <li><img src={Skype} style={{ width: '40px' }} alt="" />
                                    <a className="skype" href="https://www.skype.com/">Skype</a></li>
                                <li><img src={Facebook} alt="" style={{ width: '40px' }} />
                                    <a className="facebook" href="https://www.facebook.com/">Facebook</a></li>
                                <li><img src={Telegram} alt="" style={{ width: '40px' }} />
                                    <a className="telegram" href="https://https://telegram.org/.org/">Telegram</a></li>
                                <li><img src={Twiter} alt="" style={{ width: '40px' }} />
                                    <a className="twitte" href="https://twitter.com/">Twitter</a></li>
                            </ul>
                        </div>
                    </nav>

                    <nav className="cont-leg-rigth" >

                        <div className="cont-leg1">
                            <div className="contact">
                                <h3>CONTACTS</h3>
                                <a href="/">Book-a-call</a>
                                <a href="/">info@omnibro.io</a>
                            </div>
                            <div className="telesu">
                                <h3>TELEGRAM SUPPORT</h3>
                                <a href="/">@Omnibro</a>
                                <a href="/">Presentation</a>
                            </div>
                        </div>
                        <div className="cont-leg2">
                            <h3>LEGAL</h3>
                            <a href="/">Terms of service</a>
                            <a href="/">Privacy policy</a>
                            <a href="/">End-User License Agreement </a>

                        </div>
                    </nav>
                </div>

                <div className="copyright" >Copyright &copy; 2021 B2X</div>
            </section>
            <footer>
                <a href="https://www.b2xcentral.com/">
                    b2xcentral.com/</a>
            </footer>

        </div>
    )


}
export default TermsService;