import React,{useEffect,useState,useRef} from 'react';
import { Table,Button,Form } from 'react-bootstrap';

function ViewProduct() {
  let [pro, setPro] = useState([]);
  let [name, setName] = useState("");
  let [category, setCategory] = useState("");
  let [price, setPrice] = useState("");
  let [quantity, setQuantity] = useState("");
  let [image, setImage] = useState("");
  let [description, setDescription] = useState("");
  let [proId, setProId] = useState(null);

  let [open, setOpen] = useState(false);
  let btnHide = useRef();
  let btnShow = useRef();
let urlImg = "http://206.189.124.254:9000"
  useEffect(() => {
    getProduct();
  }, []);
  function getProduct() {
    let url = "http://206.189.124.254:9000/products";
    fetch(url)
      .then((res) => res.json())
      .then((result) => {
        setPro(result);
        setProId(result[0]._id)
        // alert('working...')
      });
  }

  function deletePro(_id) {
    let url = "http://206.189.124.254:9000/product/" + _id;
   
    if (window.confirm('Are you sure?')) {
    
      fetch(url, {
        headers: {
          'content-type': 'application/json'
        },
        method: "DELETE",
      })
      .then((res) => res.json())
      .then((result) => {
        getProduct();
      });
    }
  }

  function edithPro(i) {
    if (!open) {
      console.log(pro[i]);
      let product = pro[i];
      setName(product.name);
      setCategory(product.category);
      setPrice(product.price);
      setQuantity(product.quantity);
      // setImage(product.image);
      setDescription(product.description);
      setProId(product._id);

      btnHide.current.style.display = 'block';
      btnShow.current.style.display = 'none';

  }
  }
  function updatePro() {
    let item ={name,category,price,quantity,image,description}
    let url = "http://206.189.124.254:9000/update/product" + proId;
    console.warn("item", item)
  
    fetch(url, {
      headers: {
        'accept': 'application/json',
        'content-type': 'application/json'
      },
      method: "PUT",
      body: JSON.stringify(item)

    })
    .then((res) => res.json())
    .then((result) => {
      getProduct();
    });
    btnHide.current.style.display = 'none';
    btnShow.current.style.display = 'block';

    console.log(proId)
  }

  function cancelPro() {
    btnHide.current.style.display = 'none';
    btnShow.current.style.display = 'block';

  }




 
  return (
        <>
        <section className="">      
          <div className="adminViewPro" ref={btnShow} style={{display:'block'}}>
            
         
           
          <Table striped bordered hover>
  <thead>
          <tr>
       <th>#</th>
      <th>Image</th>
      <th> Name</th>
       <th>Category</th>
          <th>Price</th>
      <th>Quantity</th>
          <th>Description</th>
     <th>Manage Product</th>
    </tr>
  </thead>
 
              <tbody>
              {pro.map((e,i) => {
                if (e.category === 'chris') {
                return (
    <tr key={i}>
       <td>{i}</td>
                    <td><img src={e.image} alt="fyn image" style={{width:'50px',height:'50px', objectFit:'contain',borderRadius:'50%'}}/></td>
      <td>{e.name}</td>
      <td>{e.category}</td>
      <td>{e.price}</td>
      <td>{e.quantity}</td>
      <td>{e.description}</td>
       <td>
       <Button variant="success p-2"  onClick={()=>edithPro(i)}>Edith</Button>||
       <Button variant="danger p-2"  onClick={()=>deletePro(e._id)}>Delete</Button>
       </td>
                  </tr>
                  );
                      
           }
                })}
                
      </tbody>
              
            </Table>
          </div>
        </section>

        <section className="adminCreatePost" ref={btnHide} style={{display:'none'}}>
                <div>
                <Form encType="application/form-data" method>
  <Form.Group controlId="formBasicEmail">
    <Form.Label>Name of  Product</Form.Label>
    <Form.Control type="name" value={name}onChange={(e)=>setName(e.target.value)}  placeholder="" />
   
  </Form.Group>

  <Form.Group controlId="formBasicPassword">
    <Form.Label>Category of Product</Form.Label>
    <Form.Control type="text"  value={category}onChange={(e)=>setCategory(e.target.value)}  placeholder="" />
              </Form.Group>
              <Form.Group controlId="formBasicPassword">
    <Form.Label>Price of Product</Form.Label>
    <Form.Control type="number"  value={price} onChange={(e)=>setPrice(e.target.value)}  placeholder="" />
  </Form.Group>
  <Form.Group controlId="formBasicPassword">
    <Form.Label>Quantity of Product</Form.Label>
    <Form.Control type="number" value={quantity}onChange={(e)=>setQuantity(e.target.value)}  placeholder="" />
  </Form.Group>
  <Form.Group controlId="formBasicPassword">
    <Form.Label>Image of Product</Form.Label>
    <Form.Control type="file"  value={image} onChange={(e)=>setImage(e.target.value)} placeholder=""/>
  </Form.Group>


      <Form.Group controlId="exampleForm.ControlTextarea1">
    <Form.Label>Description of Product</Form.Label>
    <Form.Control as="textarea" value={description} onChange={(e)=>setDescription(e.target.value)} rows={3} />
              </Form.Group>
              <div className="flex" style={{marginLeft:'10px'}}>
              <Button variant="danger" onClick={(e)=> updatePro(e._id)}>
    Update
                </Button>
                <Button variant="success" onClick={()=> cancelPro()}>
    Cancel
  </Button>
              </div>
  
</Form>
           
            </div>
            
            
            </section>        
</>
)};
export default ViewProduct;