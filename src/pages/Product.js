import React from 'react';
import { Link } from 'react-router-dom';
import ProductSec1 from '../components/ProductSec1';
import Navbar from '../components/Navbar';
import ProductSce2 from '../components/ProductSec2';
import ProductSec3 from '../components/ProductSe3';
import ProductSec4 from '../components/ProductSec4';
import RecentlyView from '../components/RecentlyView';
import Footer from '../components/Footer';


function Product() {
  return(
    <div>
      <Navbar/>
      <ProductSec1 />
      <ProductSce2 />
      <ProductSec3 />
      <ProductSec4 />
      <ProductSec3 />
      <RecentlyView />
      <Footer/>

    </div>
  )
}
export default Product;