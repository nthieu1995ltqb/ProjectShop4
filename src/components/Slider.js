import React from 'react';
// import ReactDOM from 'react-dom';
// import "./lib/styles/carousel.css"

import {Slide} from 'react-slideshow-image'
import img1 from '../images/home/slide1.PNG';
import img2 from '../images/home/slide2.PNG';
import img3 from '../images/home/slide3.PNG';


const proprietes = {
    duration: 5000,
    transitionDuration: 500,
    infinite: true,
    indicators: true,
    arrows: true
}

class Slider extends React.Component{
    render(){
       
        return(

            <div id="slider">
                <div className="container">
                    <div className="containerSlide">
                        <Slide {...proprietes} >
                            <div className="each-slide">
                                <div>
                                    <img src={img1} alt="" />
                                </div>
                            </div>
                            <div className="each-slide">
                                <div>
                                    <img src={img2} alt="" />
                                </div>
                            </div>
                            <div className="each-slide">
                                <div>
                                    <img src={img3} alt="" />
                                </div>
                            </div>
                        </Slide>
                    </div>
                        
 
                </div>

            </div>    
	
        )
    }
}

export default Slider;