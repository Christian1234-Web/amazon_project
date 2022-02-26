import React,{useState} from 'react';
import Slide1Image1 from '../Images/indx-slide1-img1.jpg';
import Slide1Image2 from '../Images/indx-slide1-img2.jpg';
import Slide1Image3 from '../Images/indx-slide1-img3.jpg';
import Slide1Image4 from '../Images/indx-slide1-img4.jpg';
import Slide1Image5 from '../Images/indx-slide1-img5.jpg';
import Slide1Image6 from '../Images/indx-slide1-img6.jpg';
import Slide1Image7 from '../Images/indx-slide1-img7.jpg';

import {Carousel} from 'react-bootstrap'

function FirstSlider() {
    
    const [index, setIndex] = useState(0);
  
    const handleSelect = (selectedIndex, e) => {
      setIndex(selectedIndex);
    };
  
    return (
        <Carousel activeIndex={index} onSelect={handleSelect} style={{height:'400px'}}>
        <Carousel.Item >
          <img
            className="d-block w-100 "
            src={Slide1Image1}
            alt="First slide"
                />
                
            </Carousel.Item>
            <Carousel.Item >
          <img
            className="d-block w-100 "
            src={Slide1Image2}
            alt="First slide"
                />
                
        </Carousel.Item> <Carousel.Item >
          <img
            className="d-block w-100 "
            src={Slide1Image3}
            alt="First slide"
                />
                
        </Carousel.Item> <Carousel.Item >
          <img
            className="d-block w-100 "
            src={Slide1Image4}
            alt="First slide"
                />
                
        </Carousel.Item> <Carousel.Item >
          <img
            className="d-block w-100 "
            src={Slide1Image5}
            alt="First slide"
                />
                
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src={Slide1Image6}
            alt="Second slide"
          />

        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src={Slide1Image7}
            alt="Third slide"
          />
  
         
        </Carousel.Item>
      </Carousel>
    );

}
export default FirstSlider;



// function ControlledCarousel() {
   
//   }
  
//   render(<ControlledCarousel />);