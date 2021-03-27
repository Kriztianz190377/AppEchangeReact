import React from "react"

import Phone from '../img/celTest.png';

const SectionTwo =()=>{

    return (

        <section className="section-two">
                <nav className="nav-moExSo" >
                    <h2>Kriztianz application</h2>
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

    )
}
export default SectionTwo;
