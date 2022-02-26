import { Link } from 'react-router-dom';
import { index} from 'index'
import ProductLg1 from '../Images/productLg-img1.jpg';


function Testing(){

 let imgRef = useRef();
 function Pray() {
 
     var options = {
         width: 400,
         zoomWidth: 500,
         offset: {vertical: 0, horizontal: 10}
     };
  let z = new ImageZoom(imgRef, options);
}
// import ShopImg1 from '../Images/shop-img1.jpg'
// import ShopImg2 from '../Images/shop-img2.jpg'
// import ShopImg3 from '../Images/shop-img3.jpg'
// import ShopImg4 from '../Images/shop-img4.jpg'

// import ShopImg5 from '../Images/shop-img5.jpg'
// import ShopImg6 from '../Images/shop-img6.jpg'
// import ShopImg7 from '../Images/shop-img7.jpg'
// import ShopImg8 from '../Images/shop-img8.jpg'

// import ShopImg9 from '../Images/shop-img9.jpg'
// import ShopImg10 from '../Images/shop-img10.jpg'
// import ShopImg11 from '../Images/shop-img11.jpg'
// import ShopImg12 from '../Images/shop-img12.jpg'

// import ShopImg13 from '../Images/shop-img13.jpg'
// import ShopImg14 from '../Images/shop-img14.jpg'
// import ShopImg15 from '../Images/shop-img15.jpg'

// import ShopImg16 from '../Images/shop-img16.jpg'
// import ShopImg17 from '../Images/shop-img17.jpg'
// import ShopImg18 from '../Images/shop-img18.jpg'
// import ShopImg19 from '../Images/shop-img19.jpg'

// import ShopImg20 from '../Images/shop-img20.jpg'
// import ShopImg21 from '../Images/shop-img21.jpg'
// import ShopImg22 from '../Images/shop-img22.jpg'
// import ShopImg23 from '../Images/shop-img23.jpg'

// import ShopImg24 from '../Images/shop-img24.jpg'
// import ShopImg25 from '../Images/shop-img25.jpg'
// import ShopImg26 from '../Images/shop-img26.jpg'
// import ShopImg27 from '../Images/shop-img27.jpg'

// import ShopImg28 from '../Images/shop-img28.jpg'
// import ShopImg29 from '../Images/shop-img29.jpg'
// import ShopImg30 from '../Images/shop-img30.jpg'
// import ShopImg31 from '../Images/shop-img31.jpg'

// import ShopImg32 from '../Images/shop-img32.jpg'
// import ShopImg33 from '../Images/shop-img33.jpg'

 return (
     <>
           <div ref={imgRef} style={{width: '400px'}}>
     <img src={ProductLg1} />
             </div>
                 
         
         </>
    )
}
export default Testing;