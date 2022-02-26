import React, { useState } from 'react';
import { Link } from 'react-router-dom';


import {Carousel,Row,Col} from 'react-bootstrap'
function SecondSlider(props) {
    
       
    const [index, setIndex] = useState(0);
  
    const handleSelect = (selectedIndex, e) => {
      setIndex(selectedIndex);
    };
  
    return (
        <>
             <div className="divImg" style={{backgroundColor:'#fff',padding:'20px',margin:'20px'}}>
            <div className="flex m-2">
                    <h1>{props.hh}</h1> <Link to="" style={{marginLeft:'10px',color:'rgb(22, 108, 207)'}}>Shop now</Link>
</div>
           
                
      
        <Carousel activeIndex={index} onSelect={handleSelect} style={{height:'200px'}} className="">
        <Carousel.Item  >
                <Row >
                    <Col style={{backgroundColor:"#fff" ,     height:'210px ',width:'500px'}}>
                   
                <img
            className="d-block 
            w-100"
            src={props.Slide1Image1}
            alt="First slide"
            
                />
                    </Col>
                    <Col style={{backgroundColor:"#fff" ,     height:'210px ',width:'500px', margin:' '}}>
                   
                   <img
               className="d-block w-100"
               src={props.Slide1Image2}
               alt="First slide"
                   />
                        </Col> 
                        <Col style={{backgroundColor:"#fff" ,     height:'210px ',width:'500px', margin:' '}}>
                   
                   <img
               className="d-block w-100"
               src={props.Slide1Image3}
               alt="First slide"
                   />
                        </Col> 
                        <Col style={{backgroundColor:"#fff" ,     height:'210px ',width:'500px', margin:' '}}>
                   
                   <img
               className="d-block w-100"
               src={props.Slide1Image4}
               alt="First slide"
                   />
                        </Col>  <Col style={{backgroundColor:"#fff" ,     height:'210px ',width:'500px', margin:' '}}>
                   
                   <img
               className="d-block w-100"
               src={props.Slide1Image5}
               alt="First slide"
                   />
                        </Col> 
                        <Col style={{backgroundColor:"#fff" ,     height:'210px ',width:'500px', margin:' '}}>
                   
                   <img
               className="d-block w-100"
               src={props.Slide1Image6}
               alt="First slide"
                   />
                        </Col> 
       </Row>

                
            </Carousel.Item>
           
            <Carousel.Item >
                <Row>
                <Col style={{backgroundColor:"#fff" ,     height:'210px ',width:'500px', margin:' '}}>
                   
                   <img
               className="d-block w-100"
               src={props.Slide1Image7}
               alt="First slide"
                   />
                        </Col> 
                        <Col style={{backgroundColor:"#fff" ,     height:'210px ',width:'500px', margin:' '}}>
                   
                   <img
               className="d-block w-100"
               src={props.Slide1Image8}
               alt="First slide"
                   />
                        </Col> 
                        <Col style={{backgroundColor:"#fff" ,     height:'210px ',width:'500px', margin:' '}}>
                   
                   <img
               className="d-block w-100"
               src={props.Slide1Image9}
               alt="First slide"
                   />
                        </Col> 
                        <Col style={{backgroundColor:"#fff" ,     height:'210px ',width:'500px', margin:' '}}>
                   
                   <img
               className="d-block w-100"
               src={props.Slide1Image10}
               alt="First slide"
                   />
                        </Col> 
                        <Col style={{backgroundColor:"#fff" ,     height:'210px ',width:'500px', margin:' '}}>
                   
                   <img
               className="d-block w-100"
               src={props.Slide1Image11}
               alt="First slide"
                   />
                        </Col> 
                        <Col style={{backgroundColor:"#fff" ,     height:'210px ',width:'500px', margin:' '}}>
                   
                   <img
               className="d-block w-100"
               src={props.Slide1Image12}
               alt="First slide"
                   />
                            </Col>
                            <Col style={{backgroundColor:"#fff" ,     height:'210px ',width:'500px', margin:' '}}>
                   
                   <img
               className="d-block w-100"
               src={props.Slide1Image13}
               alt="First slide"
                                />
                                </Col> 
           </Row>
               
            </Carousel.Item>
        
                </Carousel>
                </div>
            </>
    );
};
export default SecondSlider;