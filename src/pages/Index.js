import React from 'react';
import { Link } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
// import  {Navbar,NavDropdown,FormControl,Nav,Form,Button}  from 'react-bootstrap'
import Navbar from '../components/Navbar';
import SectionTwo from "../components/SectionTwo"
import FirstSlider from '../components/FirstSlider';
import SecondSlider from '../components/SecondSlider';
import ComputerAccs from '../components/ComputerAccs';
import ThirdSlider from "../components/ThirdSlider";
import ThirdSection from "../components/ThirdSection";
import RecentlyView from "../components/RecentlyView";
import Footer from "../components/Footer";

import Compnt1 from '../Images/idx-copnt-img01.jpg';
import Compnt2 from '../Images/idx-copnt-img02.jpg';
import Compnt3 from '../Images/idx-copnt-img3.jpg';
import Compnt10 from '../Images/idx-copnt-gp-img1.jpg';
import Compnt20 from '../Images/idx-copnt-gp-img2.jpg';
import Compnt30 from '../Images/idx-copnt-gp-img3.jpg';
import Compnt40 from '../Images/idx-copnt-gp-img4.jpg';

import Compnt01 from '../Images/idx-copnt2-img1.jpg';
import Compnt02 from '../Images/idx-copnt2-img2.jpg';
import Compnt03 from '../Images/idx-copnt2-img3.jpg';
import Compnt100 from '../Images/idx-copnt2-gp-img1.jpg';
import Compnt200 from '../Images/idx-copnt2-gp-img2.jpg';
import Compnt300 from '../Images/idx-copnt2-gp-img3.jpg';
import Compnt400 from '../Images/idx-copnt2-gp-img4.jpg';

import Slide1Image1 from '../Images/idx-gp1-sld-img1.jpg';
import Slide1Image2 from '../Images/idx-gp1-sld-img2.jpg';
import Slide1Image3 from '../Images/idx-gp1-sld-img3.jpg';
import Slide1Image4 from '../Images/idx-gp1-sld-img4.jpg';
import Slide1Image5 from '../Images/idx-gp1-sld-img5.jpg';
import Slide1Image6 from '../Images/idx-gp1-sld-img6.jpg';
import Slide1Image7 from '../Images/idx-gp2-sld-img1.jpg';
import Slide1Image8 from '../Images/idx-gp2-sld-img2.jpg';
import Slide1Image9 from '../Images/idx-gp2-sld-img3.jpg';
import Slide1Image10 from '../Images/idx-gp2-sld-img4.jpg';
import Slide1Image11 from '../Images/idx-gp2-sld-img5.jpg';
import Slide1Image12 from '../Images/idx-gp2-sld-img6.jpg';
import Slide1Image13 from '../Images/idx-gp2-sld-img7.jpg';

import Slide1Image01 from '../Images/idx-gp1-sld2-img1.jpg';
import Slide1Image02 from '../Images/idx-gp1-sld2-img2.jpg';
import Slide1Image03 from '../Images/idx-gp1-sld2-img3.jpg';
import Slide1Image04 from '../Images/idx-gp1-sld2-img4.jpg';
import Slide1Image05 from '../Images/idx-gp1-sld2-img5.jpg';
import Slide1Image06 from '../Images/idx-gp1-sld2-img6.jpg';
import Slide1Image07 from '../Images/idx-gp1-sld2-img7.jpg';

import Slide1Image08 from '../Images/idx-gp2-sld2-img1.jpg';
import Slide1Image09 from '../Images/idx-gp2-sld2-img2.jpg';
import Slide1Image010 from '../Images/idx-gp2-sld2-ing3.jpg';
import Slide1Image011 from '../Images/idx-gp2-sld2-img4.jpg';
import Slide1Image012 from '../Images/idx-gp2-sld2-img5.jpg';

import Slide1Image013 from '../Images/idx-gp3-sld2-img1.jpg';
import Slide1Image014 from '../Images/idx-gp3-sld2-img2.jpg';
import Slide1Image015 from '../Images/idx-gp3-sld2-img3.jpg';
import Slide1Image016 from '../Images/idx-gp3-sld2-img4.jpg';
import Slide1Image017 from '../Images/idx-gp3-sld2-img5.jpg';
import Slide1Image018 from '../Images/idx-gp3-sld2-img6.jpg';
import Slide1Image019 from '../Images/idx-gp3-sld2-img7.jpg';

import image10 from '../Images/line6-0001.jpg'; import image20 from '../Images/line6-0002.jpg'; import image30 from '../Images/line6-0003.jpg';
import image40 from '../Images/line6-0004.jpg'; import image100 from '../Images/line6-1.jpg'; import image200 from '../Images/line6-2.jpg';
import image0100 from '../Images/line6-1-0001.jpg'; import image0200 from '../Images/line6-1-0002.jpg'; import image0300 from '../Images/line6-1-0003.jpg';
import image0400 from '../Images/line6-1-0004.jpg';

import MoreImg1 from '../Images/more-gp1-img1.jpg'; import MoreImg2 from '../Images/more-gp1-img2.jpg'; import MoreImg3 from '../Images/more-gp1-img3.jpg';
import MoreImg4 from '../Images/more-gp1-img4.jpg'; import MoreImg5 from '../Images/more-gp1-img5.jpg'; import MoreImg6 from '../Images/more-gp1-img6.jpg';
import MoreImg7 from '../Images/more-gp1-img7.jpg';
import MoreImg8 from '../Images/more-gp2-img1.jpg'; import MoreImg9 from '../Images/more-gp2-img2.jpg'; import MoreImg10 from '../Images/more-gp2-img3.jpg';
import MoreImg11 from '../Images/more-gp2-img4.jpg'; import MoreImg12 from '../Images/more-gp2-img5.jpg'; import MoreImg13 from '../Images/more-gp2-img6.jpg';
import MoreImg14 from '../Images/more-gp3-1.jpg';  import MoreImg15 from '../Images/more-gp3-2.jpg';   
 
import lineImg1 from '../Images/line8-gp1-1.jpg';import lineImg2 from '../Images/line8-gp1-2.jpg';import lineImg3 from '../Images/line8-gp1-3.jpg';
import lineImg4 from '../Images/line8-gp1-4.jpg'; import lineImg5 from '../Images/line8-gp1-5.jpg'; import lineImg6 from '../Images/line8-gp2-1.jpg';
import lineImg7 from '../Images/line8-gp2-2.jpg'; import lineImg8 from '../Images/line8-gp2-3.jpg'; import lineImg9 from '../Images/line8-gp2-4.jpg';
import lineImg10 from '../Images/line8-gp2-5.jpg'; import lineImg11 from '../Images/line8-gp2-6.jpg'; import lineImg12 from '../Images/line8-gp3-1.jpg';
import lineImg13 from '../Images/line8-gp3-2.jpg';import lineImg14 from '../Images/line8-gp3-3.jpg';

import line7Mg1 from '../Images/line7-gp1-1.jpg'; import line7Mg2 from '../Images/line7-gp1-2.jpg'; import line7Mg3 from '../Images/line7-gp1-3.jpg';
import line7Mg4 from '../Images/line7-gp1-4.jpg'; import line7Mg5 from '../Images/line7-gp1-5.jpg'; import line7Mg6 from '../Images/line7-gp1-6.jpg';
import line7Mg7 from '../Images/line7-gp2-1.jpg';import line7Mg8 from '../Images/line7-gp2-2.jpg';import line7Mg9 from '../Images/line7-gp2-3.jpg';
import line7Mg10 from '../Images/line7-gp2-4.jpg'; import line7Mg11 from '../Images/line7-gp2-5.jpg'; import line7Mg12 from '../Images/line7-gp3-1.jpg';
import line7Mg13 from '../Images/line7-gp3-2.jpg'; import line7Mg14 from '../Images/line7-gp3-3.jpg'; import line7Mg15 from '../Images/line7-gp3-4.jpg';
import line7Mg16 from '../Images/line7-gp4-1.jpg';import line7Mg17 from '../Images/line7-gp4-2.jpg';

import line10Img1 from '../Images/line10-gp1-1.jpg'; import line10Img2 from '../Images/line10-gp1-2.jpg'; import line10Img3 from '../Images/line10-gp1-3.jpg';
import line10Img4 from '../Images/line10-gp1-4.jpg'; import line10Img5 from '../Images/line10-gp1-5.jpg'; import line10Img6 from '../Images/line10-gp1-6.jpg';
import line10Img7 from '../Images/line10-gp1-7.jpg'; import line10Img8 from '../Images/line10-gp2-1.jpg'; import line10Img9 from '../Images/line10-gp2-2.jpg';
import line10Img10 from '../Images/line10-gp2-3.jpg'; import line10Img11 from '../Images/line10-gp2-4.jpg'; import line10Img12 from '../Images/line10-gp2-5.jpg';
import line10Img13 from '../Images/line10-gp2-6.jpg'; import line10Img14 from '../Images/line10-gp2-7.jpg'; import line10Img15 from '../Images/line10-gp3-1.jpg';
import line10Img16 from '../Images/line10-gp3-2.jpg';import line10Img17 from '../Images/line10-gp3-3.jpg';


import  line11Img1 from '../Images/line11-gp1-1.jpg'; import  line11Img2 from '../Images/line11-gp1-2.jpg'; import  line11Img3 from '../Images/line11-gp1-3.jpg';
import  line11Img4 from '../Images/line11-gp1-4.jpg'; import  line11Img5 from '../Images/line11-gp1-5.jpg'; import  line11Img6 from '../Images/line11-gp1-6.jpg';
 import  line11Img8 from '../Images/line11-gp2-1.jpg'; import  line11Img9 from '../Images/line11-gp2-2.jpg';
import  line11Img10 from '../Images/line11-gp2-3.jpg'; import  line11Img11 from '../Images/line11-gp2-4.jpg'; import  line11Img12 from '../Images/line11-gp2-5.jpg';
 import  line11Img15 from '../Images/line11-gp3-1.jpg';
import  line11Img16 from '../Images/line11-gp3-2.jpg';import line11Img17 from '../Images/line11-gp3-3.jpg';


function Index() {
  return(
    
    <div className="minWidth">
      <Navbar/>
      <FirstSlider />
      <ComputerAccs
        get="Get fit at home"
        see="See more"
        explore="Explore more"
        shop="Shop now"
        cati="Shop by category"
        image1={ Compnt1}
        image2={Compnt2 }
        image3={Compnt3 }
        image01={ Compnt10}
        image02={Compnt20 }
        image03={Compnt30 }
        image04={Compnt40}
      
      />
      
      <SectionTwo
      ocu="Oculus"
      ama="AmazonBasics"
      see="See more"
      explore="Explore more"
      shop="Shop now"
        cati="Gaming accessories"
        find="Find your ideal TV"
      image10={ Compnt01}
      image20={Compnt02}
      image30={Compnt03}
      image001={ Compnt100}
      image002={Compnt200}
      image003={Compnt300}
      image004={Compnt400}
      
        
        />
      
      <SecondSlider
        hh="Top Beauty & Personal Care products"
Slide1Image1 = {Slide1Image1}
Slide1Image2 ={Slide1Image2}
Slide1Image3 ={ Slide1Image3}
Slide1Image4 ={Slide1Image4}
Slide1Image5 ={Slide1Image5}
Slide1Image6 ={Slide1Image6}
Slide1Image7 ={Slide1Image7}
Slide1Image8 ={Slide1Image8}
Slide1Image9 ={Slide1Image9}
Slide1Image10 ={Slide1Image10}
Slide1Image11 ={Slide1Image11}
Slide1Image12 ={Slide1Image12}
Slide1Image13 ={Slide1Image13}

      
      />
   
      
      <ThirdSlider
        hh="Our favorite Toys"
 Slide1Image01 ={Slide1Image01}
Slide1Image02 ={Slide1Image02}
Slide1Image03 ={Slide1Image03}
Slide1Image04 ={Slide1Image04}
 Slide1Image05={Slide1Image05}
   Slide1Image06={Slide1Image06}
 Slide1Image07 ={Slide1Image07}
 Slide1Image08 ={Slide1Image08}
 Slide1Image09 ={Slide1Image09}
 Slide1Image010 ={Slide1Image010}
 Slide1Image011 ={Slide1Image011}
 Slide1Image012 ={Slide1Image012}
 Slide1Image013 ={Slide1Image013}
 Slide1Image014 ={Slide1Image014}
 Slide1Image015 ={Slide1Image015}
 Slide1Image016 ={Slide1Image016}
 Slide1Image017 ={Slide1Image017}
 Slide1Image018 ={Slide1Image018}
 Slide1Image019 ={Slide1Image019}
      
      />

      <ThirdSection
      
      ocu="Gaming merchandise"
      ama="Shop Laptops & Tablets"
      see="See more"
      explore="Explore more"
      shop="Shop now"
        cati="Comfy styles for her"
        find="Explore home bedding"
      image10={image10}
      image20={image20}
      image30={image30}
        image40={image40}
        image100={image100}
        image200 = {image200}
        image0100={image0100}
        image0200={image0200}
        image0300={image0300}
        image0400 ={image0400}
      />
        <ThirdSlider
        hh="More everyday essentials to explore"
 Slide1Image01 ={MoreImg1}
Slide1Image02 ={MoreImg2}
Slide1Image03 ={MoreImg3}
Slide1Image04 ={MoreImg4}
 Slide1Image05={MoreImg5}
   Slide1Image06={MoreImg6}
 Slide1Image07 ={MoreImg7}
 Slide1Image08 ={MoreImg8}
 Slide1Image09 ={MoreImg9}
 Slide1Image010 ={MoreImg10}
 Slide1Image011 ={MoreImg11}
 Slide1Image012 ={MoreImg12}
 Slide1Image013 ={MoreImg13}
 Slide1Image014 ={MoreImg14}
 Slide1Image015 ={MoreImg15}
 Slide1Image016 ={Slide1Image016}
 Slide1Image017 ={Slide1Image017}
 Slide1Image018 ={Slide1Image018}
 Slide1Image019 ={Slide1Image019}
      
      />

<ThirdSlider
        hh="Best Sellers in Baby"
 Slide1Image01 ={lineImg1}
Slide1Image02 ={lineImg2}
Slide1Image03 ={lineImg3}
Slide1Image04 ={lineImg4}
 Slide1Image05={lineImg5}
   Slide1Image06={lineImg6}
 Slide1Image07 ={lineImg7}
 Slide1Image08 ={lineImg8}
 Slide1Image09 ={lineImg9}
 Slide1Image010 ={lineImg10}
 Slide1Image011 ={lineImg11}
 Slide1Image012 ={lineImg12}
 Slide1Image013 ={lineImg13}
 Slide1Image014 ={lineImg14}
 Slide1Image015 ={MoreImg15}
 Slide1Image016 ={Slide1Image016}
 Slide1Image017 ={Slide1Image017}
 Slide1Image018 ={Slide1Image018}
 Slide1Image019 ={Slide1Image019}
      
      />
    
    
    <ThirdSlider
        hh="Amazon Top Seller"
 Slide1Image01 ={line7Mg1}
Slide1Image02 ={line7Mg2}
Slide1Image03 ={line7Mg3}
Slide1Image04 ={line7Mg4}
 Slide1Image05={line7Mg5}
   Slide1Image06={line7Mg6}
 Slide1Image07 ={line7Mg7}
 Slide1Image08 ={line7Mg8}
 Slide1Image09 ={line7Mg9}
 Slide1Image010 ={line7Mg10}
 Slide1Image011 ={line7Mg11}
 Slide1Image012 ={line7Mg12}
 Slide1Image013 ={line7Mg13}
 Slide1Image014 ={line7Mg14}
 Slide1Image015 ={line7Mg15}
 Slide1Image016 ={line7Mg16}
 Slide1Image017 ={line7Mg17}
 Slide1Image018 ={Slide1Image018}
 Slide1Image019 ={Slide1Image019}
      
      />
       
       <ThirdSlider
        hh="Stuffed Animals & Toys under $10"
 Slide1Image01 ={line10Img1}
Slide1Image02 ={line10Img2}
Slide1Image03 ={line10Img3}
Slide1Image04 ={line10Img4}
 Slide1Image05={line10Img5}
   Slide1Image06={line10Img6}
 Slide1Image07 ={line10Img7}
 Slide1Image08 ={line10Img8}
 Slide1Image09 ={line10Img9}
 Slide1Image010 ={Slide1Image018}
 Slide1Image011 ={line10Img11}
 Slide1Image012 ={line10Img12}
 Slide1Image013 ={line10Img13}
 Slide1Image014 ={line10Img14}
 Slide1Image015 ={line10Img15}
 Slide1Image016 ={line10Img16}
 Slide1Image017 ={line10Img17}
 Slide1Image018 ={line10Img10}
 Slide1Image019 ={Slide1Image019}
 
      />


    <ThirdSlider
        hh="Best Sellers in Kitchen"
 Slide1Image01 ={line11Img1}
Slide1Image02 ={line11Img2}
Slide1Image03 ={line11Img3}
Slide1Image04 ={line11Img1}
 Slide1Image05={line11Img5}
   Slide1Image06={line11Img6}
 Slide1Image07 ={Slide1Image019}
 Slide1Image08 ={line11Img8}
 Slide1Image09 ={line11Img9}
 Slide1Image010 ={line11Img10}
 Slide1Image011 ={line11Img11}
 Slide1Image012 ={line11Img12}
 Slide1Image013 ={line11Img1}
 Slide1Image014 ={line11Img5}
 Slide1Image015 ={line11Img15}
 Slide1Image016 ={line11Img16}
 Slide1Image017 ={line11Img17}
 Slide1Image018 ={Slide1Image018}
 Slide1Image019 ={line11Img17}
 
      />

<RecentlyView/>
<Footer/>

</div>
  )
}
export default Index;