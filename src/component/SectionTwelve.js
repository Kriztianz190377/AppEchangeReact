import React from "react"
import Linkedin from '../img/linkedin.svg';
import Facebook from '../img/facebook.svg';
import Twiter from '../img/twitter.svg';
import Skype from '../img/skype.svg';
import Telegram from '../img/telegram.svg';


const SectionTwelve =()=>{

    return (

        <section className="SectionTwelve">

                <div className="twelve-boxs">

                    <nav className="social-left"  >
                        <div>
                            Kriztianz                            
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
                                <a href="/">christian@castanedadeveloper.com</a>
                            </div>
                            <div className="telesu">
                                <h3>TELEGRAM SUPPORT</h3>
                                <a href="/">@castanedadeveloper</a>
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

                <div className="copyright" >Copyright &copy; 2021 CCL-Web</div>
            </section>

    )
}
export default SectionTwelve;












