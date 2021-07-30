import React,{useState} from 'react'
// import {Form,Button} from 'react-bootstrap';


function TestingOut() {
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
        });
    };

    return (
        <>
                        <section className="adminCreatePost">
                <div>
                    <input type="text" value={name} onChange={ (e)=>setName(e.target.value)}/>
                </div>
                <div>
                    <input type="text" value={phone} onChange={ (e)=>setPhone(e.target.value)}/>
                </div>
                <div>
                    <input type="text" value={email} onChange={ (e)=>setEmail(e.target.value)}/>
                </div>  <div>
                    <input type="text" value={password} onChange={ (e)=>setPassword(e.target.value)}/>
                </div>  <div>
<button onClick={()=>createPost()}>Now</button>                </div>
                </section>
            </>
    )
}
export default TestingOut;