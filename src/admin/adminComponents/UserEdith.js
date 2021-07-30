import React,{useState} from 'react';
import { Form ,Button} from 'react-bootstrap';


function UserEdith() {
    let [name, setName] = useState();
    let [phone, setPhone] = useState();
    let [email, setEmail] = useState();
    let [password, setPassword] = useState();

  let updateUser = () => {
    
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
 
  <Button variant="danger"   onClick={()=>updateUser()}>
    Update
  </Button>
                    </Form>
                </div>
                </section>
        
        </>
    )
}
export default UserEdith;