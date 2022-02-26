import React,{useContext,useState} from 'react'
import { Link } from 'react-router-dom';
import { Store } from '../../context/store';


function Header(props) {

    let store = useContext(Store)
    let [note, setNote] = store.data;
    return (
        <>
            <section className="adminHeader">
                <div className="adminHdCnt">
                    <li>
                        <Link  onClick={()=> props.viewAllProducts()}>All Products</Link>
                    </li>
                    <li>
                        <Link onClick={()=> props.viewCreateProduct()}>Create Product</Link>
                    </li>
                    <li>
                        <Link  onClick={()=> props.viewAllUsers()}>All Users</Link>
                    </li>
                    <li>
                        <Link  onClick={()=> props.viewCreateUser()}>Create User</Link>
                    </li>
           </div>

            </section>


            </>
    )
}
export default Header;