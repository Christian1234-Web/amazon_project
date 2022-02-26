import React from 'react'
import { Link } from 'react-router-dom';

function SectionTwo(props) {
    return (
        <>
          <section className="sectionTwo">
                <div className="comp">
                    <h1>{props.ocu}</h1>
                    <img src={props.image10} />
                    <div className="seeAl">
                        <Link to="">{props.see}</Link>
                    </div>
                   
                </div>
                
                <div className="comp">
                    <h1>{ props.ama}</h1>
                    <img src={props.image20} />
                    <div className="seeAl">
                        <Link to="">{ props.explore}</Link>
                    </div>
                </div>
                
                
                    <div className="comp">
                    <h1>{ props.find}</h1>
                    <img src={props.image30} />
                    <div className="seeAl">
                        <Link to="">{ props.explore}</Link>
                    </div>   
                </div>
                
                <div className="comp">
                    <h1>{ props.cati}</h1>
                    <div className="img4">
                        <div className="img4-0">
                            <img src={props.image001} />
                            <p>Headsets</p>
                       </div>
                    
                       <div className="img4-0">
                            <img src={props.image002} />
                            <p>Keyboards</p>
                        </div>
                        <div className="img4-0">
                            <img src={props.image003} />
                            <p>Computer mice</p>
                       </div>
                       <div className="img4-0">
                            <img src={props.image004} />
                            <p>Chairs</p>
                       </div>
                    
                    </div>
                    
                    <div className="seeAll">
                        <Link to="">{ props.shop}</Link>
                    </div>                </div>
            </section>  

            </>
    )
}
export default SectionTwo;