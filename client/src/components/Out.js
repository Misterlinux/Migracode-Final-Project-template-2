import React,{useState} from 'react';
import {useHistory} from "react-router-dom"
import * as mdb from 'mdb-ui-kit';
import './signin.css';


function Signout(){

  let history = useHistory()

  const [Logout, setLogout] = useState ({
    userpass: "",
    password: "",
    message: "no entered"
  })

  const setting = (e) =>{
    setLogout( { ...Logout, [e.target.name]: e.target.value } )
  }

  const loggedmessage = (e) =>{
    setLogout( {...Logout , message: e })
  }

  function out(e){
    e.preventDefault();

    const {userpass, password} = Logout

    console.log(Logout)

    console.log("ok so, after the click we get this")

    const sendmethod = {
      method: "POST",
      body: JSON.stringify(Logout),
      
      headers:{
        'Content-Type': 'application/json',
        'Accept': 'application/json'
      }
    }
    fetch("http://localhost:5000/out", sendmethod)
    .then( (res) => res.json() )
    .then( ( message ) => {

        if(!message.loggedIn){

            console.log(message)
            loggedmessage(message.message)
          }
          else{
            loggedmessage(message.message)
          }


    }      

    )
  }

    return <div>

    <div className="bg-image d-flex justify-content-center align-items-center sfondo text-center">

        <div class="container">

            <div class="row">
                <div className="col-11 col-lg-6 formulario m-1">
                    To delete your account use Username and Password:
                    
                    <form onSubmit={out}>

                        <div class="row form-outline mb-1 text-start">

                        <div class="col-lg-12 col-12 form-outline mb-4 text-start ">

                            Username Or Password
                            <label class="form-label border border-secondary my-1 mx-1 w-50" for="form1Example1" >
                            
                            <input type="text" id="form1Example1" class="form-control" name="userpass" value={Logout.username}
                                onChange={setting}/>
                            </label>

                        </div>

                        </div>

                        <div class="form-outline mb-1 text-start ">
                        Password
                        <label class="form-label border border-secondary mx-2 w-75 " for="form1Example1" >
                        
                            <input type="password" id="form1Example1" class="form-control" name="password" value={Logout.password}
                            onChange={setting} placeholder="password"/>
                        </label>

                        </div>

                        <h2> {Logout.message} </h2>

                        <input type="submit" value="Submit" />

                    </form>



                </div>

                <div className="col-11 col-lg-5 formulario ">
                    To just Log out

                    <form onSubmit={out}>

                        <div class="row form-outline mt-4 text-start">

                        <div class="col-lg-12 col-12 form-outline mb-4 text-start ">

                            Username Or Password
                            <label class="form-label border border-secondary my-1 mx-1 w-50" for="form1Example1" >
                            
                            <input type="text" id="form1Example1" class="form-control" name="userpass" value={Logout.username}
                                onChange={setting}/>
                            </label>

                        </div>

                        </div>

                        <h2> {Logout.message} </h2>

                        <input type="submit" value="Submit" />

                    </form>

                </div>

            </div>
        </div>


    </div>

  </div>
}

export default Signout;