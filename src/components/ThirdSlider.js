import React, { useState } from 'react';
import { Link } from 'react-router-dom';


import {Carousel,Row,Col} from 'react-bootstrap'
function ThirdSlider(props) {
    
       
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
            src={props.Slide1Image01}
            alt="First slide"
            
                />
                    </Col>
                    <Col style={{backgroundColor:"#fff" ,     height:'210px ',width:'500px', margin:' '}}>
                   
                   <img
               className="d-block w-100"
               src={props.Slide1Image02}
               alt="First slide"
                   />
                        </Col> 
                        <Col style={{backgroundColor:"#fff" ,     height:'210px ',width:'500px', margin:' '}}>
                   
                   <img
               className="d-block w-100"
               src={props.Slide1Image03}
               alt="First slide"
                   />
                        </Col> 
                        <Col style={{backgroundColor:"#fff" ,     height:'210px ',width:'500px', margin:' '}}>
                   
                   <img
               className="d-block w-100"
               src={props.Slide1Image04}
               alt="First slide"
                   />
                        </Col>  <Col style={{backgroundColor:"#fff" ,     height:'210px ',width:'500px', margin:' '}}>
                   
                   <img
               className="d-block w-100"
               src={props.Slide1Image05}
               alt="First slide"
                   />
                        </Col> 
                        <Col style={{backgroundColor:"#fff" ,     height:'210px ',width:'500px', margin:' '}}>
                   
                   <img
               className="d-block w-100"
               src={props.Slide1Image06}
               alt="First slide"
                   />
                            </Col>
                            <Col style={{backgroundColor:"#fff" ,     height:'210px ',width:'500px', margin:' '}}>
                   
                   <img
               className="d-block w-100"
               src={props.Slide1Image07}
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
               src={props.Slide1Image08}
               alt="First slide"
                   />
                        </Col> 
                        <Col style={{backgroundColor:"#fff" ,     height:'210px ',width:'500px', margin:' '}}>
                   
                   <img
               className="d-block w-100"
               src={props.Slide1Image09}
               alt="First slide"
                   />
                        </Col> 
                        <Col style={{backgroundColor:"#fff" ,     height:'210px ',width:'500px', margin:' '}}>
                   
                   <img
               className="d-block w-100"
               src={props.Slide1Image010}
               alt="First slide"
                   />
                        </Col> 
                        <Col style={{backgroundColor:"#fff" ,     height:'210px ',width:'500px', margin:' '}}>
                   
                   <img
               className="d-block w-100"
               src={props.Slide1Image011}
               alt="First slide"
                   />
                        </Col> 
                        <Col style={{backgroundColor:"#fff" ,     height:'210px ',width:'500px', margin:' '}}>
                   
                   <img
               className="d-block w-100"
               src={props.Slide1Image012}
               alt="First slide"
                   />
                        </Col> 
                        <Col style={{backgroundColor:"#fff" ,     height:'210px ',width:'500px', margin:' '}}>
                   
                   <img
               className="d-block w-100"
               src={props.Slide1Image013}
               alt="First slide"
                   />
                            </Col>
                            <Col style={{backgroundColor:"#fff" ,     height:'210px ',width:'500px', margin:' '}}>
                   
                   <img
               className="d-block w-100"
               src={props.Slide1Image014}
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
               src={props.Slide1Image015}
               alt="First slide"
                   />
                        </Col> 
                        <Col style={{backgroundColor:"#fff" ,     height:'210px ',width:'500px', margin:' '}}>
                   
                   <img
               className="d-block w-100"
               src={props.Slide1Image016}
               alt="First slide"
                   />
                        </Col> 
                        <Col style={{backgroundColor:"#fff" ,     height:'210px ',width:'500px', margin:' '}}>
                   
                   <img
               className="d-block w-100"
               src={props.Slide1Image017}
               alt="First slide"
                   />
                        </Col> 
                        <Col style={{backgroundColor:"#fff" ,     height:'210px ',width:'500px', margin:' '}}>
                   
                   <img
               className="d-block w-100"
               src={props.Slide1Image018}
               alt="First slide"
                   />
                        </Col> 
                        <Col style={{backgroundColor:"#fff" ,     height:'210px ',width:'500px', margin:' '}}>
                   
                   <img
               className="d-block w-100"
               src={props.Slide1Image019}
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
export default ThirdSlider;