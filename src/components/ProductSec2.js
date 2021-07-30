import React,{useState,useContext} from 'react';
import ProFrequentImg2 from '../Images/frequent-img2.jpg';
import ProFrequentImg3 from '../Images/frequent-img3.jpg';
import { Link } from 'react-router-dom';
import { Store } from "../context/store";



function ProductSce2() {
    
    let store = useContext(Store);
    let [msg, setMsg] = store.info;
 
    function addThree() {
      msg += 3
      setMsg(msg)
  }

    return (
        <>
            <section className="proFrequent">
                <div>    
                <div>
                 <h3 className="proTxtOrange">Frequently bought together</h3>   
                    </div>
                    <div className="flex" style={{paddingTop:'30px'}}>
                        <div className="proFreqImg">
                            <img src={ProFrequentImg2}/>
                        </div>
                        <div className="proFreqImg">
                            <img src={ProFrequentImg3}/>
                        </div>
                        <div className="proFreqImg">
                            <img src={ProFrequentImg2}/>
                        </div>
                        <div className="proFreqImg">
                            <p className="proBgSm">Total price:$141.97</p>
                        <button className="signBtn"onClick={()=>addThree()}>Add all three to Cart</button>

                        </div>
                    </div>
                    <div>

                        <div className="flex">
                            <input type="checkbox" />
                            <p className="px-2" style={{ padding: '0px', margin: '0px' }}>This item: YQSAVIOR YQ11 Android 10 Inch Tablet, with Case,
                                Octa-Core Tablet 1920x1200 HD Resolution,..$129.99</p>
                        </div>
                        <div className="flex">
                            <input type="checkbox" />
                            <Link className="px-2">USB Type C Cable 2A Fast Charging 6ft USB-A to USB-C Charge Type-C Cables Compatible with Samsung Galaxy..$3.99</Link>
                        </div>
                        <div className="flex">
                            <input type="checkbox" />
                            <Link className="px-2">
                            Screen Protector Designed for YQSAVIOR YQ11, MOXNICE P63 (10.1" Android tablet) Premium HD Clarity Tempered </Link>
                        </div>
                    </div>

                    </div>

       </section>
       
        </>
    )
} export default ProductSce2;