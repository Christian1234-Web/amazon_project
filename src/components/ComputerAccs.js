import React from 'react';

import { Link } from 'react-router-dom';

function ComputerAccs(props){

    return (
    <>
            <section className="accessories">
                <div className="comp">
                    <h1>Computer & Accessories</h1>
                    <img src={props.image1} />
                    <div className="seeAl">
                        <Link to="">{props.see}</Link>
                    </div>
                   
                </div>
                
                <div className="comp">
                    <h1>{ props.get}</h1>
                    <img src={props.image2} />
                    <div className="seeAl">
                        <Link to="">{ props.explore}</Link>
                    </div>                </div>
                
                <div className="comp">
                    <h1>{ props.cati}</h1>
                    <div className="img4">
                        <div className="img4-0">
                            <img src={props.image01} />
                            <p>Computer & Accessories</p>
                       </div>
                    
                       <div className="img4-0">
                            <img src={props.image02} />
                            <p>Video Games</p>
                        </div>
                        <div className="img4-0">
                            <img src={props.image03} />
                            <p>Baby</p>
                       </div>
                       <div className="img4-0">
                            <img src={props.image04} />
                            <p>Toys & Games</p>
                       </div>
                    
                    </div>
                    
                    <div className="seeAll">
                        <Link to="">{props.shop}</Link>
                    </div>                </div>
                
                <div className="compShop ">
                    <div className="shop">
                        <h1>Sign in for the best <br></br>experience</h1>
                        <button className="shopbtn">Shop in securely</button>
                 </div>
                   
                    <div className="shopImg">
                    <img src={props.image3} />
                     </div>
                    
            </div>
            
            </section>
        
        </>
    )
};
export default ComputerAccs;