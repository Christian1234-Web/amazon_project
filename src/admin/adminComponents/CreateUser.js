import React,{useState} from 'react'
import {Form,Button} from 'react-bootstrap';


function CreateUser() {
  let [name, setName] = useState();
  let [phone, setPhone] = useState();
  let [email, setEmail] = useState();
  let [password, setPassword] = useState();
  // let userId = '1';
  let createPost = () => {
    let url = "http://206.189.124.254:9000/register";
    let createObject = {
      name,
      phone,
      email,
      password

    };
    
    fetch(url, {
      headers: {
        "content-type": "application/json"
      },
      method: "Post",
      body: JSON.stringify(createObject)
    })
      .then((res) => res.json())
      .then((result) => {
        console.log(result);
      })
  };

    return (
        <>
                        <section className="adminCreatePost">
                <div>
                <Form>
  <Form.Group controlId="formBasicEmail">
    <Form.Label>Name of  User</Form.Label>
    <Form.Control type="name" name="name" value={name} onChange={(e)=> setName(e.target.value)} placeholder=""/>
   
  </Form.Group>

  <Form.Group controlId="formBasicPassword">
    <Form.Label>Phone Number of User</Form.Label>
    <Form.Control type="number" name="phone" value={phone} onChange={(e)=> setPhone(e.target.value)} placeholder=""/>
              </Form.Group>
              <Form.Group controlId="formBasicPassword">
    <Form.Label>Email of User</Form.Label>
    <Form.Control type="email" name="email" value={email} onChange={(e)=> setEmail(e.target.value)} placeholder=""/>
  </Form.Group>
  <Form.Group controlId="formBasicPassword">
    <Form.Label>Password of User</Form.Label>
    <Form.Control type="password" name="password" value={password} onChange={(e)=> setPassword(e.target.value)} placeholder=""/>
  </Form.Group>
 
  <Button variant="danger"   onClick={()=>createPost()}>
    Submit
  </Button>
</Form>
           
                </div>
                </section>
            </>
    )
}
export default CreateUser;