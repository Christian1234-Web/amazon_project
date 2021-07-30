import React, { useState,useContext } from 'react';
import { Link } from 'react-router-dom';
import { Carousel, Row, Col } from 'react-bootstrap';
import { Store } from "../context/store";

function CartSlider(props) {
    let store = useContext(Store);
    let [msg, setMsg] = store.info;
    const [index, setIndex] = useState(0);
  
    const handleSelect = (selectedIndex, e) => {
      setIndex(selectedIndex);
    };
    
    function addUp() {
        msg += 1
        setMsg(msg)
    }

    return (
        <>
            
            <div className="divImg1" style={{backgroundColor:'white',padding:'20px',margin:'20px'}}>
            <div className="" style={{display:'flex',justifyContent:'space-between'}}>
                    <h1>{props.hOne}</h1> <p>Page 1 of 4</p>
</div>
           
                
      
        <Carousel activeIndex={index} onSelect={handleSelect} style={{height:'200px'}} className="">
        <Carousel.Item  >
                <Row >
                    
                    <Col style={{backgroundColor:"  ", height:'  ',width:'200px'}}>
                   
                <img
            className="d-block 
                w-75     "
            src={props.CartSliderImg1}
            alt="First slide"  />
                                <div>
                                    <Link to="">Xbox Series S</Link>
                                </div>
                                <div>
                                    <p>Microsoft</p>
                                </div>
                                <div className="starimg">
                                    <img src={props.StarImg}/><Link t0="">4,437</Link>
                                </div>
                                <div>
                                    <p>182 offers from </p><Link to="">$367.02</Link>
                                </div>
                                <div>
                                <button className="cartBtn03" onClick={props.try}>See all buying options</button>
                                </div>
                    </Col>
                    <Col style={{backgroundColor:"  " ,     height:'  ',width:'200px', margin:' '}}>
                   
                   <img
               className="d-block     w-75     "
               src={props.CartSliderImg2}
               alt="First slide"
                                />
                                <div>
                                <Link to="">Acer Swift 3 Thin &...</Link>
                                </div>
                                <div className="starimg">
                                    <img src={props.StarImg}/><Link to="">2,345</Link>
                                </div>
                                <div className="cartAmnt">
                                  <Link to="">$618.92</Link>  
                                </div>
                                <div>
                                <button className="cartBtn1"onClick={props.try}>Add to Cart</button>
                                </div>

                        </Col> 
                        <Col style={{backgroundColor:"  " ,     height:'  ',width:'200px', margin:' '}}>
                   
                   <img
               className="d-block     w-75     "
               src={props.CartSliderImg3}
               alt="First slide"
                                />
                                 <div>
                                <Link to="">Acer Aspire 5 A5115-55...</Link>
                                </div>
                                <div className="starimg">
                                    <img src={props.StarImg}/><Link to="">1,345</Link>
                                </div>
                                <div className="cartAmnt">
                                  <Link to="">$418.92</Link>  
                                </div>
                                <div>
                                <button className="cartBtn1"onClick={()=>addUp()}>Add to Cart</button>
                                </div>
                        </Col> 
                        <Col style={{backgroundColor:"  " ,     height:'  ',width:'200px', margin:' '}}>
                   
                   <img
               className="d-block     w-75     "
               src={props.CartSliderImg4}
               alt="First slide"
                                />
                                
                                <div>
                                <Link to="">Lenova Chromebook...</Link>
                                </div>
                                <div className="starimg">
                                    <img src={props.StarImg}/><Link to="">3,345</Link>
                                </div>
                                <div className="cartAmnt">
                                  <Link to="">$338.92</Link>  
                                </div>
                                <div>
                                <button className="cartBtn1"onClick={()=>addUp()}>Add to Cart</button>
                                </div>
                            </Col>
                            <Col style={{ backgroundColor: "  ", height: '  ', width: '200px', margin: ' ' }}>
                   
                   <img
               className="d-block     w-75     "
               src={props.CartSliderImg5}
               alt="First slide"
                                />
                                 <div>
                                <Link to="">Acer Aspire C27-97...</Link>
                                </div>
                                <div className="starimg">
                                    <img src={props.StarImg}/><Link to="">2,345</Link>
                                </div>
                                <div className="cartAmnt">
                                  <Link to="">$778.72</Link>  
                                </div>
                                <div>
                                <button className="cartBtn1"onClick={()=>addUp()}>Add to Cart</button>
                                </div>
                        </Col> 
                        <Col style={{backgroundColor:"  " ,     height:'  ',width:'200px', margin:' '}}>
                   
                   <img
               className="d-block     w-75     "
               src={props.CartSliderImg6}
               alt="First slide"
                                />
                                
                                <div>
                                <Link to="">Acer Swift 5 A515-46...</Link>
                                </div>
                                <div className="starimg">
                                    <img src={props.StarImg}/><Link to="">1,345</Link>
                                </div>
                                <div className="cartAmnt">
                                  <Link to="">$378.92</Link>  
                                </div>
                                <div>
                                <button className="cartBtn1"onClick={()=>addUp()}>Add to Cart</button>
                                </div>
                        </Col> 
       </Row>

                
            </Carousel.Item>
           
            <Carousel.Item >
                <Row>
                <Col style={{backgroundColor:"  " ,     height:'  ',width:'200px', margin:' '}}>
                   
                   <img
               className="d-block     w-75     "
               src={props.CartSliderImg7}
               alt="First slide"
                                />
                                                            <div>
                                <Link to="">Lenova IdealPad 3 15...</Link>
                                </div>
                                <div className="starimg">
                                    <img src={props.StarImg}/><Link to="">1,345</Link>
                                </div>
                                <div className="cartAmnt">
                                  <Link to="">$359.92</Link>  
                                </div>
                                <div>
                                <button className="cartBtn1"onClick={()=>addUp()}>Add to Cart</button>
                                </div>
                            </Col>
                            <Col style={{ backgroundColor: "  ", height: '  ', width: '200px', margin: ' ' }}>
                   <img
               className="d-block     w-75     "
               src={props.CartSliderImg8}
               alt="First slide"
                                />
                                                            <div>
                                <Link to="">Oculus QUest 2___...</Link>
                                </div>
                                <div className="starimg">
                                    <img src={props.StarImg}/><Link to="">50,345</Link>
                                </div>
                                <div className="cartAmnt">
                                  <Link to="">$259.92</Link>  
                                </div>
                                <div>
                                <button className="cartBtn1"onClick={()=>addUp()}>Add to Cart</button>
                                </div>
                        </Col> 
                        <Col style={{backgroundColor:"  " ,     height:'  ',width:'200px', margin:' '}}>
                   
                   <img
               className="d-block     w-75     "
               src={props.CartSliderImg9}
               alt="First slide"
                                />
                                                            <div>
                                <Link to="">Western Digital 1TB...</Link>
                                </div>
                                <div className="starimg">
                                    <img src={props.StarImg}/><Link to="">11,345</Link>
                                </div>
                                <div className="cartAmnt">
                                  <Link to="">$119.92</Link>  
                                </div>
                                <div>
                                <button className="cartBtn1"onClick={()=>addUp()}>Add to Cart</button>
                                </div>
                        </Col> 
                        <Col style={{backgroundColor:"  " ,     height:'  ',width:'200px', margin:' '}}>
                   
                   <img
               className="d-block     w-75     "
               src={props.CartSliderImg10}
               alt="First slide"
                                />
                                                            <div>
                                <Link to="">HP VH240a 23-Inch...</Link>
                                </div>
                                <div className="starimg">
                                    <img src={props.StarImg}/><Link to="">23,345</Link>
                                </div>
                                <div className="cartAmnt">
                                  <Link to="">$199.02</Link>  
                                </div>
                                <div>
                                <button className="cartBtn1"onClick={()=>addUp()}>Add to Cart</button>
                                </div>
                        </Col> 
                        <Col style={{backgroundColor:"  " ,     height:'  ',width:'200px', margin:' '}}>
                   
                   <img
               className="d-block     w-75     "
               src={props.CartSliderImg11}
               alt="First slide"
                                />
                                                            <div>
                                <Link to="">Acer Swift 3 Intel Evo..</Link>
                                </div>
                                <div className="starimg">
                                    <img src={props.StarImg}/><Link to="">15,345</Link>
                                </div>
                                <div className="cartAmnt">
                                  <Link to="">$159.92</Link>  
                                </div>
                                <div>
                                <button className="cartBtn1"onClick={()=>addUp()}>Add to Cart</button>
                                </div>
                        </Col> 
                        <Col style={{backgroundColor:"  " ,     height:'  ',width:'200px', margin:' '}}>
                   
                   <img
               className="d-block     w-75     "
               src={props.CartSliderImg12}
               alt="First slide"
                                />
                                                            <div>
                                <Link to="">Samsung Chromebook...</Link>
                                </div>
                                <div className="starimg">
                                    <img src={props.StarImg}/><Link to="">1,245</Link>
                                </div>
                                <div className="cartAmnt">
                                  <Link to="">$369.92</Link>  
                                </div>
                                <div>
                                <button className="cartBtn1"onClick={()=>addUp()}>Add to Cart</button>
                                </div>
                            </Col>
                           
           </Row>
               
            </Carousel.Item>
        
            <Carousel.Item >
                <Row>
                <Col style={{backgroundColor:"  " ,     height:'  ',width:'200px', margin:' '}}>
                   
                   <img
               className="d-block     w-75     "
               src={props.CartSliderImg13}
               alt="First slide"
                                />
                                                            <div>
                                <Link to="">Acus ROG Srix G17...</Link>
                                </div>
                                <div className="starimg">
                                    <img src={props.StarImg}/><Link to="">3,345</Link>
                                </div>
                                <div className="cartAmnt">
                                  <Link to="">$2,459.92</Link>  
                                </div>
                                <div>
                                <button className="cartBtn1"onClick={()=>addUp()}>Add to Cart</button>
                                </div>
                            </Col>
                            <Col style={{ backgroundColor: "  ", height: '  ', width: '200px', margin: ' ' }}>
                   <img
               className="d-block     w-75     "
               src={props.CartSliderImg14}
               alt="First slide"
                                />
                                                            <div>
                                <Link to="">Lenova IdealPad 1 14...</Link>
                                </div>
                                <div className="starimg">
                                    <img src={props.StarImg}/><Link to="">20,345</Link>
                                </div>
                                <div className="cartAmnt">
                                  <Link to="">$259.92</Link>  
                                </div>
                                <div>
                                <button className="cartBtn1"onClick={()=>addUp()}>Add to Cart</button>
                                </div>
                        </Col> 
                        <Col style={{backgroundColor:"  " ,     height:'  ',width:'200px', margin:' '}}>
                   
                   <img
               className="d-block     w-75     "
               src={props.CartSliderImg15}
               alt="First slide"
                                />
                                                            <div>
                                <Link to="">Acer Aspire TC-895...</Link>
                                </div>
                                <div className="starimg">
                                    <img src={props.StarImg}/><Link to="">21,345</Link>
                                </div>
                                <div className="cartAmnt">
                                  <Link to="">$319.92</Link>  
                                </div>
                                <div>
                                <button className="cartBtn1"onClick={()=>addUp()}>Add to Cart</button>
                                </div>
                        </Col> 
                        <Col style={{backgroundColor:"  " ,     height:'  ',width:'200px', margin:' '}}>
                   
                   <img
               className="d-block     w-75     "
               src={props.CartSliderImg16}
               alt="First slide"
                                />
                                                            <div>
                                <Link to="">HP 15 Laptop, AMD...</Link>
                                </div>
                                <div className="starimg">
                                    <img src={props.StarImg}/><Link to="">23,345</Link>
                                </div>
                                <div className="cartAmnt">
                                  <Link to="">$559.02</Link>  
                                </div>
                                <div>
                                <button className="cartBtn1"onClick={()=>addUp()}>Add to Cart</button>
                                </div>
                        </Col> 
                        <Col style={{backgroundColor:"  " ,     height:'  ',width:'200px', margin:' '}}>
                   
                   <img
               className="d-block     w-75     "
               src={props.CartSliderImg17}
               alt="First slide"
                                />
                                                            <div>
                                <Link to="">ASUS TUF Dash 15..</Link>
                                </div>
                                <div className="starimg">
                                    <img src={props.StarImg}/><Link to="">18</Link>
                                </div>
                                <div className="cartAmnt">
                                  <Link to="">$459.92</Link>  
                                </div>
                                <div>
                                <button className="cartBtn1"onClick={()=>addUp()}>Add to Cart</button>
                                </div>
                        </Col> 
                        <Col style={{backgroundColor:"  " ,     height:'  ',width:'200px', margin:' '}}>
                   
                   <img
               className="d-block     w-75     "
               src={props.CartSliderImg18}
               alt="First slide"
                                />
                                                            <div>
                                <Link to="">ASUS ExpertCenter...</Link>
                                </div>
                                <div className="starimg">
                                    <img src={props.StarImg}/><Link to="">13,245</Link>
                                </div>
                                <div className="cartAmnt">
                                  <Link to="">$299.92</Link>  
                                </div>
                                <div>
                                <button className="cartBtn1"onClick={()=>addUp()}>Add to Cart</button>
                                </div>
                            </Col>
                           
           </Row>
               
            </Carousel.Item>

            <Carousel.Item >
                <Row>
                <Col style={{backgroundColor:"  " ,     height:'  ',width:'200px', margin:' '}}>
                   
                   <img
               className="d-block     w-75     "
               src={props.CartSliderImg19}
               alt="First slide"
                                />
                                                            <div>
                                <Link to="">LG 27GL650F-B 27…...</Link>
                                </div>
                                <div className="starimg">
                                    <img src={props.StarImg}/><Link to="">14,345</Link>
                                </div>
                                <div className="cartAmnt">
                                  <Link to="">$229.92</Link>  
                                </div>
                                <div>
                                <button className="cartBtn1"onClick={()=>addUp()}>Add to Cart</button>
                                </div>
                            </Col>
                            <Col style={{ backgroundColor: "  ", height: '  ', width: '200px', margin: ' ' }}>
                   <img
               className="d-block     w-75     "
               src={props.CartSliderImg20}
               alt="First slide"
                                />
                                                            <div>
                                <Link to="">Kindle PaperWhite-...</Link>
                                </div>
                                <div className="starimg">
                                    <img src={props.StarImg}/><Link to="">111,345</Link>
                                </div>
                                <div className="cartAmnt">
                                  <Link to="">$59.92</Link>  
                                </div>
                                <div>
                                <button className="cartBtn1"onClick={()=>addUp()}>Add to Cart</button>
                                </div>
                            </Col>
                            <Col>
                            </Col>
                            <Col>
                            </Col>
                            <Col>
                            </Col>
                       
                           
           </Row>
               
            </Carousel.Item>
                    




                </Carousel>
                </div>
            </>
    )
}
export default CartSlider;