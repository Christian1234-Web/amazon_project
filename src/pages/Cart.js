import React,{useContext,useState,useRef,useEffect} from 'react';
import {Link,useHistory} from 'react-router-dom';
import Navbar from '../components/Navbar';
import { Table,Button,Form } from 'react-bootstrap';
import formatCurrency from 'format-currency'
import CartSlider from '../components/CartSlider';
import Footer from '../components/Footer';
import { Store } from "../context/store";

import CartImg1 from '../Images/cart-img1.png'
import AcerImg from '../Images/acer-img.jpg';
import LevImg from '../Images/lenova-img.jpg';
import PlanImg from '../Images/plan-img.jpg';
import RazImg from '../Images/razer-img.jpg';
import StarImg from '../Images/star-img.png';

import CartSliderImg1 from '../Images/cartSlider-gp1-img1.jpg';
import CartSliderImg2 from '../Images/cartSlider-gp1-img2.jpg';
import CartSliderImg3 from '../Images/cartSlider-gp1-img3.jpg';
import CartSliderImg4 from '../Images/cartSlider-gp1-img4.jpg';
import CartSliderImg5 from '../Images/cartSlider-gp1-img5.jpg';
import CartSliderImg6 from '../Images/cartSlider-gp1-img6.jpg';

import CartSliderImg7 from '../Images/cartSlider-gp2-img1.jpg';
import CartSliderImg8 from '../Images/cartSlider-gp2-img2.jpg';
import CartSliderImg9 from '../Images/cartSlider-gp2-img3.jpg';
import CartSliderImg10 from '../Images/cartSlider-gp2-img4.jpg';
import CartSliderImg11 from '../Images/cartSlider-gp2-img5.jpg';
import CartSliderImg12 from '../Images/cartSlider-gp2-img6.jpg';

import CartSliderImg13 from '../Images/cartSlider-gp3-img1.jpg';
import CartSliderImg14 from '../Images/cartSlider-gp3-img2.jpg';
import CartSliderImg15 from '../Images/cartSlider-gp3-img3.jpg';
import CartSliderImg16 from '../Images/cartSlider-gp3-img4.jpg';
import CartSliderImg17 from '../Images/cartSlider-gp3-img5.jpg';
import CartSliderImg18 from '../Images/cartSlider-gp3-img6.jpg';

import CartSliderImg19 from '../Images/cartSlider-gp4-img1.jpg';
import CartSliderImg20 from '../Images/cartSlider-gp4-img2.jpg';
import CheckBoxImg from '../Images/checkBox-img.png';

import AddToCart from '../components/AddToCart';
import {useCart} from 'react-use-cart'

function Cart() { 
  let store = useContext(Store)
  let [msg, setMsg] = store.info;
  let [price, setPrice]=store.storePrice
  let [image, setImage] =store.storeImage;
  let [name, setName] = store.storeName;
  let [description, setDescription] = store.storeDescription;
  let [cart, setCart] = store.ctx;

  let [quntyCount, setquntyCount] = useState(0);
  let [total, setTotal] = useState(0);

  let btnHide = useRef();
  let btnShow = useRef();
  let history = useHistory();
  let opts = { format: "%s%v", symbol:"$"}
  
  
  let btnIncr = (id) => {
    let items = [...cart];
    let item = items.find((x) => x.id === id);
    item.count++;
    setCart(items);

  };
  let btnDecr = (id) => {
    let items = [...cart];
    let item = items.find((x) => x.id === id);
    item.count--;
    setCart(items);
    console.log(items)
    console.log(items.count,id)

  };
  
  let btnDelet = (id) => {
    let items = [...cart];
    let item = items.find((x) => x.id === id);
   items.splice(id,1)
    setCart(items);
  };

  function addCart(_id) {
  
  };

        function addUp() {
          msg += 1
          setMsg(msg)
  }
  
  if (name === ' ' || price === ' ' || image === '') {
    return (
      <section className="cartPage" style={{ width: '100%' }}>
      <Navbar/>

<div className="flex"style={{width:'100%'}}>
  <div className="cartSec1">
 
      <div className="cartBtn cartSec1-01" >
      <div className="flex" ref={btnShow} style={{display:'flex'}}>
        
      <div>
      <img src={CartImg1}/>
    </div>
    <div  style={{padding:'30px'}}>
    <div>
      <h3>
      Your Amazon Cart is empty
        </h3>
      </div>
      <div>
        <Link t0="/" >Shop today's deals</Link>
      </div>
      <div>
        <button className="cartBtn1">Sign in to your account</button>
     
        <button className="cartBtn2"onClick={()=> addUp()}>Sign up now</button>
      </div>
      </div>
      </div>
      <div>

       

      </div>
            </div>
            <div className="cartSec1-sub">
            </div>
            
             <div style={{fontSize:'11.5px',paddingTop:'20px'}}>
               The price and availability of items at Amazon.com are subject to change.
               The Cart is a temporary place to store a list of your items and reflects each item's most recent price.
               Shopping Cart <Link to="" style={{fontSize:'11.5px'}}>Learn more</Link> 
             
             <p>
             Do you have a gift card or promotional code? We'll ask you to enter your claim code when it's time to pay.
               </p>
               </div>
           </div>
          
           <div className="cartSec2">
             <div>
               <h4>
               Your recently viewed items
               </h4> 
             </div>
     
 
             <div className="starBtn">
               <div className="flex">
                 <div>
                   <img src={AcerImg} />
                 </div>
                 
                 <div className="sec2Sec02">
                   <div>
                   <Link to="">Acer Chromebook…</Link>
                </div>
                   <div>
                     <img src={StarImg}/> <Link to="">6,870</Link>
                   </div>
                   <div className="cartAmnt">
                     <Link to="">$269.99</Link>
                   </div>
                   <div>
                     <button onClick={()=> addUp()}>Add to Cart</button>
                   </div>
                 </div>
               </div>
               
               <div className="flex ">
                 <div>
                   <img src={RazImg} />
                 </div>
                 
                 <div className="sec2Sec02">
                   <div>
                   <Link to="">Razer Blade 15 Base…</Link>
                </div>
                   <div>
                     <img src={StarImg}/> <Link to="">1,237</Link>
                   </div>
                   <div className="cartAmnt">
                     <Link to="">$1.199.00</Link>
                   </div>
                   <div>
                     <button onClick={()=> addUp()}>Add to Cart</button>
                   </div>
                 </div>
               </div>
               
               <div className="flex">
                 <div>
                   <img src={LevImg} />
                 </div>
                 
                 <div className="sec2Sec02">
                   <div>
                   <Link to="">Lenovo Flex 5 14" 2…</Link>
                </div>
                   <div>
                     <img src={StarImg}/> <Link to="">4,303</Link>
                   </div>
                   <div className="cartAmnt">
                     <Link to="">$603.35</Link>
                   </div>
                   <div>
                     <button onClick={()=> addUp()}>Add to Cart</button>
                   </div>
                 </div>
               </div>
               
               <div className="flex">
                 <div>
                   <img src={PlanImg} />
                 </div>
                 
                 <div className="sec2Sec02">
                   <div>
                   <Link to="">Plantronics - Voyager…</Link>
                </div>
                   <div>
                     <img src={StarImg}/> <Link to=""> 21,040</Link>
                   </div>
                   <div className="cartAmnt">
                     <Link to="">$79.99</Link>
                   </div>
                   <div>
                     <button onClick={()=> addUp()}>Add to Cart</button>
                   </div>
                 </div>
 </div>
               
             </div>
           </div>
         </div>
       
 
      
       <CartSlider
         hOne ="Customers Who Bought Items in Your Recent History Also Bought"
           StarImg={StarImg}
           CartSliderImg1={CartSliderImg1}
           CartSliderImg2={CartSliderImg2}
           CartSliderImg3={CartSliderImg3}
           CartSliderImg4={CartSliderImg4}
           CartSliderImg5={CartSliderImg5}
           CartSliderImg6={CartSliderImg6}
           CartSliderImg7={CartSliderImg7}
           CartSliderImg8={CartSliderImg8}
           CartSliderImg9={CartSliderImg9}
           CartSliderImg10={CartSliderImg10}
           CartSliderImg11={CartSliderImg11}
           CartSliderImg12={CartSliderImg12}
           CartSliderImg13={CartSliderImg13}
           CartSliderImg14={CartSliderImg14}
           CartSliderImg15={CartSliderImg15}
           CartSliderImg16={CartSliderImg16}
           CartSliderImg17={CartSliderImg17}
           CartSliderImg18={CartSliderImg18}
           CartSliderImg19={CartSliderImg19}
           CartSliderImg20={CartSliderImg20}
           try={addUp}
         
       />
         <Footer />
         </section>
    )
  }
  
  
  else {
   
    return (
      <section className="cartPage" style={{ width: '100%',height:'100%' }}>
              <Navbar/>

        <div className="flex"style={{width:'100%',height:'100%'}}>
          <div className="cartSec11">
            <h1>Shopping Cart</h1>
          {
      cart.map((e,i) => {
            return(
            
        
          <div className="cartBtn cartSec1-011 flex" key={i}>
              <div className="flex" ref={btnShow} style={{display:'flex',justifyContent:'space-between',padding:'10px'}}>
                
              <div>
                  <img src={e.image} style={{objectFit:'contain',width:'150px',height:'150px'}}/>
            </div>
            <div  style={{padding:'30px'}}>
            <div>
              <h3>
                {e.name}
              </h3>
                  </div>
                  <div>
                <Link><img src={CheckBoxImg }/>This a gift Learn more</Link>
                  </div>
                  <div className="btnQuanty">
                   
                    <Button variant="danger" type="button" onClick={()=>btnDelet(i)}>Delete </Button>
                    <select>
                                    <option>
                                        Qty 1
                                    </option>
                                    <option>
                                        2
                                    </option>
                                    <option>
                                        3
                                    </option>
                                    <option>
                                        4
                        </option>
                        <option>
                                        5
                        </option>
                        <option>
                                        6
                        </option>
                        <option>
                                        7
                        </option>
                        <option>
                                        8
                        </option>
                        <option>
                                        10..
                                        </option>
                        
                                </select>
                    <Button variant="success" type="button"> Save for folder </Button>
                    <Button variant="light" type="button"> Compare with similar items </Button>

            </div>
              </div>
              </div>
                <div style={{ color: 'red', padding: '10px' }}>
                  <p>Price</p>
       {formatCurrency ( ` ${e.price}`,opts) }
                </div>
                <hr></hr>       

              </div>
  )
})}
     <hr></hr>       
            <div>Subtotal({msg} items):{msg * price}</div>
            
            <div className="cartSec1-sub1">
             
            </div>
            <div style={{fontSize:'11.5px',margin:'10px'}}>
              The price and availability of items at Amazon.com are subject to change.
              The Cart is a temporary place to store a list of your items and reflects each item's most recent price.
              Shopping Cart <Link to="" style={{fontSize:'11.5px'}}>Learn more</Link> 
            
            <p>
            Do you have a gift card or promotional code? We'll ask you to enter your claim code when it's time to pay.
              </p>
              </div>
          </div>
         
          <div className="cartSec21">
            <div>
              <h4>
              Your recently viewed items
              </h4> 
            </div>
    

            <div className="starBtn">
              <div className="flex">
                <div>
                  <img src={AcerImg} />
                </div>
                
                <div className="sec2Sec02">
                  <div>
                  <Link to="">Acer Chromebook…</Link>
               </div>
                  <div>
                    <img src={StarImg}/> <Link to="">6,870</Link>
                  </div>
                  <div className="cartAmnt">
                    <Link to="">$269.99</Link>
                  </div>
                  <div>
                    <button onClick={()=> addUp()}>Add to Cart</button>
                  </div>
                </div>
              </div>
              
              <div className="flex ">
                <div>
                  <img src={RazImg} />
                </div>
                
                <div className="sec2Sec02">
                  <div>
                  <Link to="">Razer Blade 15 Base…</Link>
               </div>
                  <div>
                    <img src={StarImg}/> <Link to="">1,237</Link>
                  </div>
                  <div className="cartAmnt">
                    <Link to="">$1.199.00</Link>
                  </div>
                  <div>
                    <button onClick={()=> addUp()}>Add to Cart</button>
                  </div>
                </div>
              </div>
              
              <div className="flex">
                <div>
                  <img src={LevImg} />
                </div>
                
                <div className="sec2Sec02">
                  <div>
                  <Link to="">Lenovo Flex 5 14" 2…</Link>
               </div>
                  <div>
                    <img src={StarImg}/> <Link to="">4,303</Link>
                  </div>
                  <div className="cartAmnt">
                    <Link to="">$603.35</Link>
                  </div>
                  <div>
                    <button onClick={()=> addUp()}>Add to Cart</button>
                  </div>
                </div>
              </div>
              
              <div className="flex">
                <div>
                  <img src={PlanImg} />
                </div>
                
                <div className="sec2Sec02">
                  <div>
                  <Link to="">Plantronics - Voyager…</Link>
               </div>
                  <div>
                    <img src={StarImg}/> <Link to=""> 21,040</Link>
                  </div>
                  <div className="cartAmnt">
                    <Link to="">$79.99</Link>
                  </div>
                  <div>
                    <button onClick={()=> addUp()}>Add to Cart</button>
                  </div>
                </div>
</div>
              
            </div>
          </div>
        </div>
      

        <div>
        <CartSlider
        hOne ="Customers Who Bought Items in Your Recent History Also Bought"
          StarImg={StarImg}
          CartSliderImg1={CartSliderImg1}
          CartSliderImg2={CartSliderImg2}
          CartSliderImg3={CartSliderImg3}
          CartSliderImg4={CartSliderImg4}
          CartSliderImg5={CartSliderImg5}
          CartSliderImg6={CartSliderImg6}
          CartSliderImg7={CartSliderImg7}
          CartSliderImg8={CartSliderImg8}
          CartSliderImg9={CartSliderImg9}
          CartSliderImg10={CartSliderImg10}
          CartSliderImg11={CartSliderImg11}
          CartSliderImg12={CartSliderImg12}
          CartSliderImg13={CartSliderImg13}
          CartSliderImg14={CartSliderImg14}
          CartSliderImg15={CartSliderImg15}
          CartSliderImg16={CartSliderImg16}
          CartSliderImg17={CartSliderImg17}
          CartSliderImg18={CartSliderImg18}
          CartSliderImg19={CartSliderImg19}
          CartSliderImg20={CartSliderImg20}
          try={addUp}
        
      />
     </div>
     
        <Footer />
        </section>
        )
  }
 
}
export default Cart;