import React from 'react';
import '../css/IconsMomey.css';




const IconMoney =(props) =>{
    
console.log(props)

        return (

            <section className="section-three" >
                <div className="icon-wraps">
                    <div className="image-wraps">
                        <img src={props.src} alt='/' />
                    </div>
                    <div id="basic-attention" className="icon">
                        <a href={props.href} >
                            {props.name} </a>
                    </div>
                </div>
            </section>

        );
    }
 export default IconMoney;