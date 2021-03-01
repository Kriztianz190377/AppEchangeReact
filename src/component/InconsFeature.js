import React from 'react';
import '../css/SectionFour.css';



const IconFeature = (props) => {    

    return (

        <section id="feature-boxs">
            <img src={props.picture} alt="" className="feature-img" />
            <div className="feature-box">
                <p>{props.text}</p>
            </div>
        </section>



    );
}
export default IconFeature;