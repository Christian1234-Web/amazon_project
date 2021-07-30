import React from 'react'
import { Link } from 'react-router-dom';

function ThirdSection(props) {
    return (
        <>
          <section className="thirdSection">
          <div className="comp">
                    <h1>{ props.cati}</h1>
                    <div className="img4">
                        <div className="img4-0">
                            <img src={props.image10} />
                            <p>Sweatshirts</p>
                       </div>
                    
                       <div className="img4-0">
                            <img src={props.image20} />
                            <p>Joggers</p>
                        </div>
                        <div className="img4-0">
                            <img src={props.image30} />
                            <p> Cardigans</p>
                       </div>
                       <div className="img4-0">
                            <img src={props.image40} />
                            <p>Easy tees</p>
                       </div>
                    
                    </div>
                    
                    <div className="seeAll">
                        <Link to="">{ props.shop}</Link>
                    </div>                </div>
                
                <div className="comp">
                    <h1>{props.ama}</h1>
                    <Link to="/shop">
                    <img src={props.image100} />
                    <div className="seeAl">
                        <Link to="">{ props.explore}</Link>
                        </div>
                        </Link>
                </div>
               
                
                    <div className="comp">
                    <h1>{ props.find}</h1>
                    <img src={props.image200} />
                    <div className="seeAl">
                        <Link to="">{ props.explore}</Link>
                    </div>   
                </div>
                
                <div className="comp">
                    <h1>{ props.ocu}</h1>
                    <div className="img4">
                        <div className="img4-0">
                            <img src={props.image0100} />
                            <p>Apparel</p>
                       </div>
                    
                       <div className="img4-0">
                            <img src={props.image0200} />
                            <p>Hats</p>
                        </div>
                        <div className="img4-0">
                            <img src={props.image0300} />
                            <p>Action figures</p>
                       </div>
                       <div className="img4-0">
                            <img src={props.image0400} />
                            <p>Mugs</p>
                       </div>
                    
                    </div>
                    


                    <div className="seeAll">
                        <Link to="">{ props.shop}</Link>
                    </div>                </div>
            </section>  

            </>
    )
}
export default ThirdSection;