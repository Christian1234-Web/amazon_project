import React from 'react';
import { Link } from 'react-router-dom';


function RecentlyView(){

    return (
    <>
  
             
            <section className="recent">
                <span className="flexSps">
                    <div className="mmpd flexSps">
                        
                    <div>
                    <div>
                        <p style={{fontSize:'23px'}}>Your recently viewed items and featured recommendations</p>
                </div>
                    <div>

                    <p style={{fontStyle:'italic'}}>
                    After viewing product detail pages, look here to find an easy way to navigate back to pages you are interested in.
                        </p>
                        </div>
                    </div>
                   
                    <div className="liHt">
                        <Link className="smlike" to="">
                        View or edit <br></br> your browsing <br></br> history
                        </Link>
                        </div>
                        </div>
                    </span>


</section>


            </>
)

};
export default RecentlyView;