import React, {useState}  from 'react';
import * as mdb from 'mdb-ui-kit';
import './login.css';
import {Redirect, Route, Link, useHistory } from 'react-router-dom';


function Log(){
    
  let history = useHistory();

  const [loginCredentials, setLoginCredentials] = useState({
      username: "",
      password: "",
      loggedIn : false,
      message: "no entered"
  })

  const handleFunction  =(e)=>{
    setLoginCredentials({...loginCredentials , [e.target.name] : e.target.value})
  }

  const loggedmessage = (e) =>{
    setLoginCredentials( {...loginCredentials , message: e })
  }

  const test = async (e) => {

    e.preventDefault();

    const {username , password} = loginCredentials;

    const sendmethod = {
      method: "POST",
      body: JSON.stringify(loginCredentials),
      
      headers:{
        'Content-Type': 'application/json',
        'Accept': 'application/json'
      }
    }

    const response = await fetch('http://localhost:5000/mini', sendmethod );
    const json = await response.json();

    if(!json.loggedIn){

      console.log(json)
      loggedmessage(json.message)
      setTimeout( 
        function(){
          history.push("/") 
        }
        ,3000)
    }
    else{
      loggedmessage( json.message )
    }


}


/* alternative fetch
  function test(e){
    e.preventDefault();

    const {name , password} = loginCredentials;

    console.log(loginCredentials)

    console.log("is this working")

    const sendmethod = {
        method: 'POST', 
        body: JSON.stringify(loginCredentials),
        headers:{
        'Content-Type': 'application/json',
        'Accept': 'application/json'
        }
    }
    fetch("http://localhost:5000/mini",sendmethod)
    .then((res) => res.json())
    .then((message) => {
      
      if(!message.loggedIn){

        console.log(message)
        loggedmessage(message.message)
        setTimeout( 
          function(){
            history.push("/") 
          }
          ,3000)
      }
      else{
        loggedmessage(message.message)
      }



    })

  }
*/

    return <div>

      <div className="bg-image d-flex justify-content-center align-items-center sfondo text-center">

        <div className="container col-lg-7 formulario">
          Log In 

        <form onSubmit={test}>

        <div class="form-outline mb-2 mt-3 text-start">
          Username    
          <label class="form-label border border-secondary mx-4 w-75 " for="form1Example1" >
          
            <input type="text" id="form1Example1" class="form-control"  
                   name="username" value={loginCredentials.username} onChange={handleFunction} placeholder="username"/>
          </label>

        </div>

        <div class="form-outline mb-1 text-start">
          Password
          <label class="form-label border border-secondary mx-2 w-75 " for="form1Example1" >
          
            <input type="password" id="form1Example1" class="form-control" 
                   name="password" value={loginCredentials.password} onChange={handleFunction} placeholder="password"/>
          </label>

        </div>

        <h2> {loginCredentials.message} </h2>

          <button onClick={test} className="signup">Sign up</ button>

        </form>
          
        </div>

      </div>

    </div>
}

export default Log;