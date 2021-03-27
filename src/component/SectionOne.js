import React from "react"
import Phone from '../img/celTest.png';


const SectionOne =()=>{

    return (

        <section className="section-one">
                <header className="header-body">
                    <nav className="moExSo" >
                        <h1>Kriztianz Exchange Software</h1>
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

    )
}
export default SectionOne;
