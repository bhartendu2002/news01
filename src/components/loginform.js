import React, {useEffect} from "react";
import { gapi } from "gapi-script";
import Button from 'react-bootstrap/Button';
import "./loginform.css"
import { auth, } from "./config";
import { signInWithPopup } from "firebase/auth";
import { GithubAuthProvider } from "firebase/auth";
import { GoogleAuthProvider } from "firebase/auth";


const signWithGithub = () => {

    signInWithPopup(auth, new GithubAuthProvider())
        .then((res) => console.log(res))

};

const signWithGoogle = () => {

    signInWithPopup(auth, new GoogleAuthProvider())
        .then((res) => console.log(res))

};

const LoginForm = () => {

    useEffect(() => {
        function start() {
            gapi.client.init({
                clientId: "79474543031-tmjo35916ufn421ej3u1i2ljao2apr4s.apps.googleusercontent.com",
                scope: ""
            })
        }
        gapi.load('client: auth2', start)
    })

  

   

    return (
        <div className='container-fluid d-flex align-items-center justify-content-center mt-5'>
      <div className='row'>
        <div className='col col-xl-11'>
          <form className='rounded bg-white shadow p-5' method='POST'>
            <h5 style={{display:'flex',justifyContent:'center' , textAlign:'center',marginTop:'0%', fontWeight:'bold', color:'#6f60cc'}}>Welcome to Bardeen</h5>
             <p style={{fontSize:'0.6em'}}>Let's log in to launch your automations</p>
            <div className="mt-3 mb-3">
              <input placeholder="Email address" type="email" className="form-control" id="exampleInputEmail1" />
            </div>
            <div className="mb-3">  
              <input placeholder="password" type="password" className="form-control" id="exampleInputPassword1"/>
            </div>
            <Button className="btn btn-default buttons" type="submit">
                  Sign in
                </Button>

                <a href="/Signup" style={{display:'block', textDecoration:'none', marginTop:'1em',  marginBottom:'0em', fontSize:'0.7em'}} className="text">Create Account</a>
                <a href="/Signup" style={{display:'inline-block',textDecoration:'none', marginTop:'0.5em',  marginBottom:'1em', fontSize:'0.7em'}} className="text">Forget Password?</a>

                <div className="alt-login">
                <div className="github" style={{marginRight:'20px'}}  onClick={signWithGithub}></div>

                <div className="google"  style={{marginRight:'20px'}}  onClick={signWithGoogle} ></div>

            </div>
          </form>
        </div>
      </div>
    </div>
    )
}

export default LoginForm