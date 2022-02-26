import React from 'react'
import ProDescriptionImg1 from '../Images/proDescription-img1.png';
import ProDescriptionImg2 from '../Images/proDescription-img2.png';
import ProDescriptionImg3 from '../Images/proDescription-img3.png';
import ProDescriptionImg4 from '../Images/proDescription-img4.png';
import ProDescriptionImg5 from '../Images/proDescription-img5.png';

function ProductSec4() {
    
    return (
        <>
            <section className="proSec4" style={{backgroundColor:'#fff',padding:'10px'}}>
            <div>
            <h3 className="proTxtOrange">Product Description</h3>   
                </div>

                <div className="proDesImg">
                <img src={ ProDescriptionImg1} />
         <img src={ ProDescriptionImg2} />
                    <img src={ProDescriptionImg3}/>
                    <img src={ProDescriptionImg4}/>
                    <img src={ProDescriptionImg5}/>
                </div>



                </section>
       
        </>
        
    )
}
export default ProductSec4;