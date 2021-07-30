import React, { useRef, useState,useContext } from 'react';
import { Store } from '../../context/store';
import { Link } from 'react-router-dom';

import Header from '../adminComponents/Header'
import AdminBanner from '../adminComponents/AdminBanner'
import ViewProduct from '../adminComponents/ViewProduct';
import CreateProduct from '../adminComponents/CreateProduct';
import ViewUser from '../adminComponents/ViewUser';
import CreateUser from '../adminComponents/CreateUser';
import TestingOut from '../adminComponents/TestingOut';
import ProEdith from '../adminComponents/ProEdith';
import UserEdith from '../adminComponents/UserEdith';





function AdminIndex() {
    let store = useContext(Store)
    let [note, setNote] = store.data;
    // let [Open,setOpen]= useState(false)
     let contCreateUser = useRef();
    let contViewUser = useRef();
     let  contCreateProduct = useRef();
    let contViewProduct = useRef();
    let contEdithPro = useRef();
    let contUserEdith = useRef();


    

    function viewCreateProduct() {
        contCreateProduct.current.style.display = 'block';
        contViewProduct.current.style.display = 'none';
        contCreateUser.current.style.display = 'none';
        contViewUser.current.style.display = 'none';
        contEdithPro.current.style.display = 'none';
        contUserEdith.current.style.display = 'none';


        note = 'CREATE A PRODUCT';
        setNote(note);

    }
    function viewAllProducts() {
        contViewProduct.current.style.display = 'block';
        contCreateUser.current.style.display = 'none';
        contCreateProduct.current.style.display = 'none';
        contViewUser.current.style.display = 'none';
        contEdithPro.current.style.display = 'none';
        contUserEdith.current.style.display = 'none';

        note = 'LIST OF ALL PRODUCTS';
        setNote(note);

    } function viewCreateUser() {
             contCreateUser.current.style.display = 'block';
             contCreateProduct.current.style.display='none'
             contViewProduct.current.style.display='none' 
        contViewUser.current.style.display = 'none';
        contEdithPro.current.style.display = 'none';
        contUserEdith.current.style.display = 'none';
        note = 'CREATE A USERS';
        setNote(note);

    }
    function viewAllUsers() {
        contViewUser.current.style.display = 'block';
        contCreateUser.current.style.display='none'
        contCreateProduct.current.style.display='none'
        contViewProduct.current.style.display = 'none'
        contEdithPro.current.style.display = 'none'
        contUserEdith.current.style.display = 'none';
        note = 'LIST OF ALL USERS';
        setNote(note);
    }
    function edithProduct() {
        contEdithPro.current.style.display = 'block';
        contViewUser.current.style.display = 'none';
        contCreateUser.current.style.display = 'none';
        contCreateProduct.current.style.display = 'none';
        contViewProduct.current.style.display = 'none';
        contUserEdith.current.style.display = 'none';
        note = 'EDITH A PRODUCT';
        setNote(note);
    }
    function edithUser() {
        contEdithPro.current.style.display = 'none';
        contViewUser.current.style.display = 'none';
        contCreateUser.current.style.display = 'none';
        contCreateProduct.current.style.display = 'none';
        contViewProduct.current.style.display = 'none';
        contUserEdith.current.style.display = 'block';

        note = 'EDITH A USER';
        setNote(note);
        
    }
    return (
        <>
            <section className="adminContainer">
               
                <div className="flex">
                    <div>
                        <Header
                            viewCreateProduct={viewCreateProduct}
                            viewAllProducts={viewAllProducts}
                            viewCreateUser={viewCreateUser}
                            viewAllUsers= {viewAllUsers}
                        
                        />
                
                    </div>
                    <div className="adminBannerCont1">

                        <div>
                            <AdminBanner/>
                            </div>
                        <div className="adminBannerBody">
                            <div ref={contCreateUser} style={{display:'none'}}>
                                <CreateUser/>
                            </div>
                            <div ref={contViewUser} style={{display:'none'}}>
                                <ViewUser
                                edithUser={edithUser}
                                />
                            </div>
                            <div ref={contUserEdith} style={{display:'none'}}>
                                <UserEdith/>
                            </div>
                            <div  ref={contCreateProduct} style={{display:'none'}}>
                            <CreateProduct/>
                            </div>
                            <div  ref={contEdithPro} style={{display:'none'}}>
                            <ProEdith/>
                            </div>
                            <div  ref={contViewProduct} style={{display:'block'}}>             
                                <ViewProduct
                                edithProduct={edithProduct}
                                />
                            </div>
                            </div>
                    </div>
                    <div className="btnHomePage">
                    <Link to="/index">Home Page</Link>
                </div>
               </div>
                
</section>

        
        </>
    )
}
export default AdminIndex;