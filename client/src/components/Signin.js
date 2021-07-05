import React,{useState} from 'react';
import {useHistory} from "react-router-dom"
import * as mdb from 'mdb-ui-kit';
import './signin.css';


function Sign(){

  let history = useHistory()

  const [Login, setLogin] = useState ({
    username: "",
    email: "",
    password: "",
    message: "no entered"
  })

  const setting = (e) =>{
    setLogin( { ...Login, [e.target.name]: e.target.value } )
  }

  const loggedmessage = (e) =>{
    setLogin( {...Login , message: e })
  }

  function signin(e){
    e.preventDefault();

    const {name, email, password} = Login

    console.log(Login)

    console.log("ok so, after the click we get this")

    const sendmethod = {
      method: "POST",
      body: JSON.stringify(Login),
      
      headers:{
        'Content-Type': 'application/json',
        'Accept': 'application/json'
      }
    }
    fetch("http://localhost:5000/log", sendmethod)
    .then( (res) => res.json() )
    .then( ( message ) => {

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

    }      

    )
  }

    return <div>

    <div className="bg-image d-flex justify-content-center align-items-center sfondo text-center">

      <div className="container col-lg-7 formulario">
        Sign in

        <form onSubmit={signin}>

        <div class="row form-outline mb-1 text-start">

          <div class="col-lg-12 col-12 form-outline mb-4 text-start ">

            Username
            <label class="form-label border border-secondary my-1 mx-1 w-75" for="form1Example1" >
            
              <input type="text" id="form1Example1" class="form-control" name="username" value={Login.username}
                onChange={setting}/>
            </label>

          </div>

        </div>

        <div class="form-outline mb-2 text-start">
          Email
          <label class="form-label border border-secondary mx-4 w-75 " for="form1Example1" >
          
            <input type="email" id="form1Example1" class="form-control" name="email" value={Login.email}
              onChange={setting} />
          </label>

        </div>

        <div class="form-outline mb-1 text-start">
          Password
          <label class="form-label border border-secondary mx-2 w-75 " for="form1Example1" >
          
            <input type="password" id="form1Example1" class="form-control" name="password" value={Login.password}
              onChange={setting} placeholder="password"/>
          </label>

        </div>

        <h2> {Login.message} </h2>

        <input type="submit" value="Submit" />

        </form>
        
      </div>
    </div>

  </div>
}

export default Sign;