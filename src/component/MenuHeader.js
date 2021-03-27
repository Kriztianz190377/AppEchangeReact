import React from "react"
import MenuImag from '../img/menu.svg';
import LogoMenu from '../img/logoCCCL-web.gif'


const MenuHeader =()=>{

    return (

        <main>
        <div className="content-all">
            <div id="left">
                <label for=""><a href="/" ><img style={{ width: '50px' }} src={LogoMenu} alt="/" /></a></label>
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

    )
}
export default MenuHeader;
