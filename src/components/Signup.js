import React, { useState } from 'react';
// import '../css/Register.css';
import Button from 'react-bootstrap/Button';


const Register = () => {
  const [user, setUser] = useState({
    name:"",
    email:"",
    password:"",
  });

  const getUserData = (e) => {
    const { name, value } = e.target;
    setUser({
      ...user,
      [name]: value,
    });
  };

  const postData = async (e) => {
    e.preventDefault();

    const { name, email, password } = user;

    if( name && email && password){
      const res = await fetch("https://news-01-paper-default-rtdb.firebaseio.com/signUpForm.json",
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          name,
          email,
          password
        })
      });
      console.log(res, 'resData')

      if(res){
        setUser({
          name:"",
          email:"",
          password:""
        });
        alert("Data Stored Sucessfully")
      }

    }else{
      alert("please fill all the data")

    }

   
  }

  return (
    <div className='container-fluid d-flex align-items-center justify-content-center mt-5'>
      <div className='row'>
        <div className='col col-xl-10'>
          <form className='rounded bg-white shadow p-5' method='POST'>
            <div className="mb-3">
              <label htmlFor="name" className="form-label">Name</label>
              <input type="text" className="form-control" id="example1" placeholder='Enter your name' name='name'  onChange={getUserData} value={user.name}  required />
            </div>
            <div className="mb-3">
              <label htmlFor="exampleInputEmail1" className="form-label">Email address</label>
              <input type="email" className="form-control" id="exampleInputEmail1" name='email' placeholder='Enter your email' onChange={getUserData} value={user.email}  required />
              <div id="emailHelp" className="form-text">We'll never share your email with anyone else.</div>
            </div>
            <div className="mb-3">
              <label htmlFor="exampleInputPassword1" className="form-label">Password</label>
              <input type="password" className="form-control" id="exampleInputPassword1" name='password' onChange={getUserData} value={user.password}/>
            </div>
            <Button className="btn btn-default w-40 my-4 mx-0 buttons" type="submit" onClick={postData}>
                  Sign Up
                </Button>
          </form>
        </div>
      </div>
    </div>
  );
}

export default Register;
