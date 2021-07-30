import React,{useContext,useState,useRef,useEffect} from 'react';


function AddToCart() {
    let [pro, setPro] = useState([]);
    let [name, setName] = useState("");
    let [category, setCategory] = useState("");
    let [price, setPrice] = useState("");
    let [quantity, setQuantity] = useState("");
    let [image, setImage] = useState("");
    let [description, setDescription] = useState("");
    let [total, setTotal] = useState("0");
  
    let [proId, setProId] = useState(null);



    return (
        <>
           
           <div>
              {pro.map((e) => {
                return (
                  <div className="map flex" key={e}>
                    <div>
                    <div><img src={e.image} /></div>
                    <div>{e.name}</div>
                    <div>
                    <select>
                                    <option>
                                Qty 1
                          </option>
                          <option>
                         2
                   </option>
                    <option>
                3
               </option>
                  <option>
                  4
                 </option>
      </select>
                  </div>
                    </div>
                    <div>
                      {e.price}
                    </div>
                   </div>
                  
              )
            })}
                {/* <div>subtotal({msg} items):${total}</div> */}
          </div>     
        
        </>
    )

}export default AddToCart