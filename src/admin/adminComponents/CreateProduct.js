import React,{useState} from 'react';
import { Form ,Button} from 'react-bootstrap';


function CreateProduct() {
  let [name, setName] = useState();
  let [category, setCategory] = useState();
  let [price, setPrice] = useState();
  let [quantity, setQuantity] = useState();
  let [image, setImage] = useState();
  let [description, setDescription] = useState();

  // let createProduct = () => {
   
    // let url = "http://206.189.124.254:9000/create/product";
    // let productObject = {
    //   name,
    //   category,
    //   price,
    //   quantity,
    //   image,
    //   description
    // };
    
  //   fetch(url, {
  //     headers: {
  //       "content-type": "application/json"
  //     },
  //     method: "Post",
  //     body: JSON.stringify(productObject)
  //   })
  //     .then((res) => res.json())
  //     .then((result) => {
  //       console.log(result);
  //     })
  // };


    return (
        <>
            <section className="adminCreatePost">
                <div>
                <Form action="http://206.189.124.254:9000/create/product" method="POST" enctype="multipart/form-data">
                        <Form.Group controlId="formBasicEmail">
                          <Form.Label>Name of  Product</Form.Label>
                          <Form.Control type="name" name="name"value={name}  onChange={(e)=>setName(e.target.value)} placeholder="" />
                        
                        </Form.Group>

                        <Form.Group controlId="formBasicPassword">
                          <Form.Label>Category of Product</Form.Label>
                          <Form.Control type="text" name="category" value={category} onChange={(e)=>setCategory(e.target.value)} placeholder="" />
                                    </Form.Group>
                                    <Form.Group controlId="formBasicPassword">
                          <Form.Label>Price of Product</Form.Label>
                          <Form.Control type="number" name="price" value={price}  onChange={(e)=>setPrice(e.target.value)} placeholder="" />
                        </Form.Group>
                        <Form.Group controlId="formBasicPassword">
                          <Form.Label>Quantity of Product</Form.Label>
                          <Form.Control type="number" name="quantity" value={quantity}  onChange={(e)=>setQuantity(e.target.value)} placeholder="" />
                        </Form.Group>
                        <Form.Group controlId="formBasicPassword">
                          <Form.Label>Image of Product</Form.Label>
                          <Form.Control type="file" name="image" value={image}  onChange={(e)=>setImage(e.target.value)} placeholder=""/>
                        </Form.Group>


                            <Form.Group controlId="exampleForm.ControlTextarea1">
                          <Form.Label>Description of Product</Form.Label>
                          <Form.Control as="textarea" name='description' value={description} onChange={(e)=>setDescription(e.target.value)} rows={3} name="description"/>
                        </Form.Group>
                        <Button variant="danger" type="submit">
                          Submit
                        </Button>
              </Form>
           
            </div>
            
            
            </section>
        
        </>
    )
}
export default CreateProduct;