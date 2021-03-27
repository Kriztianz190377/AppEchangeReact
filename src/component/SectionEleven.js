import React from "react"


const SectionEleven =()=>{

    

    return (

        <section className="SectionEleven" id="SectionEleven">

                <div className="eleven-boxs">

                    <div className="eleven-box-left"  >
                        <h1>Contact us today!</h1>
                        <p>is simply dummy text of the printing and typesetting industry. 
                            Lorem Ipsum has been the industry's standard dummy text ever 
                            since the 1500s, when an unknown printer took a galley of type 
                            and scrambled it to </p>
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


    )
}
export default SectionEleven;




