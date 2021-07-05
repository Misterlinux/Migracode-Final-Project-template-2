import './App.css';
import ReactDOM from 'react-dom';
import Home from "./components/Home.js"
import Sign from "./components/Signin.js"
import Log from "./components/Login.js"
import Signout from "./components/Out.js"
import * as mdb from 'mdb-ui-kit';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";


function App() {

  return (
    <div>

    <Router>

    <nav class="navbar navbar-expand-md navbar-light bg-secondary" >

<div class="container">

  <a class="navbar-brand mb-0" href="/">Brand</a>

  <button
    class="navbar-toggler"
    type="button"
    data-mdb-toggle="collapse"
    data-mdb-target="#navbarSupportedContent"
    aria-controls="navbarSupportedContent"
    aria-expanded="false"
    aria-label="Toggle navigation"
  >
    <i class="fas fa-bars"></i>
  </button>


  <div class="collapse navbar-collapse" id="navbarSupportedContent">
    
    <ul class="navbar-nav ms-auto mb-2 mb-lg-0">
      
      <li class="nav-item mx-4">
        <a class="nav-link active" aria-current="page" href="#">Home</a>
      </li>
      <li class="nav-item mx-4">
        <a class="nav-link" href="#">Link</a>
      </li>

      <li class="nav-item dropdown mx-4">
        <a
          class="nav-link dropdown-toggle"
          href="#"
          id="navbarDropdown"
          role="button"
          data-mdb-toggle="dropdown"
          aria-expanded="false"
        >
          Dropdown
        </a>

        <ul class="dropdown-menu" aria-labelledby="navbarDropdown">
          <li><a class="dropdown-item" href="#">Action</a></li>
          <li><a class="dropdown-item" href="#">Another action</a></li>
          <li><hr class="dropdown-divider" /></li>
          <li>
            <a class="dropdown-item" href="#">Something else here</a>
          </li>
        </ul>
      </li>

    </ul>

    
  </div>

</div>
</nav>


<Switch>


<Route
        path='/'
        exact >
        <Home/>  
</Route>

<Route
        path='/signin'
        exact >
        <Sign/>  
</Route>

<Route
        path='/login'
        exact >
        <Log/>  
</Route>

<Route
        path='/out'
        exact >
        <Signout/>  
</Route>

</Switch>


<footer class="bg-light text-center text-lg-start">

<div class="container p-4">

<div class="row">

  <div class="col-lg-4 col-md-12 mb-4 mb-md-0">
    <h5 class="text-uppercase">Footer Content</h5>

    <p>
      Lorem ipsum dolor sit amet consectetur, adipisicing elit. Iste atque ea quis
      molestias. Fugiat pariatur maxime quis culpa corporis vitae repudiandae aliquam
      voluptatem veniam, est atque cumque eum delectus sint!
    </p>
  </div>

  <div class="col-lg-2 col-md-6 mb-4 mb-md-0">
    <h5 class="text-uppercase">Links</h5>

    <ul class="list-unstyled mb-0">
      <li class="mb-2">
        <a href="#!" class="text-dark">Link 1</a>
      </li>
      <li class="mb-2">
        <a href="#!" class="text-dark">Link 2</a>
      </li>
    </ul>
  </div>

  <div class="col-lg-2 col-md-6 mb-4 mb-md-0">
    <h5 class="text-uppercase mb-0">Links</h5>

    <ul class="list-unstyled">
      <li class="mb-2">
        <a href="#!" class="text-dark">Link 1</a>
      </li>
      <li class="mb-2"> 
        <a href="#!" class="text-dark">Link 2</a>
      </li>
    </ul>
  </div>

  <div class="col-lg-4">
    <h4 class="text-uppercase"> Contact us</h4>

    <footer class="text-center text-white ">
    <div class=" pt-1">

      <section class="mb-4">
        <a
          class="btn btn-link btn-floating btn-lg text-dark m-1 btn-outline-dark"
          href="#!"
          role="button"
          data-mdb-ripple-color="dark"
          ><i class="fab fa-facebook-f"></i>
        </a>

        <a
          class="btn btn-link btn-floating btn-lg text-dark m-1"
          href="#!"
          role="button"
          data-mdb-ripple-color="dark"
          ><i class="fab fa-twitter"></i
        ></a>

        <a
          class="btn btn-link btn-floating btn-lg text-dark m-1"
          href="#!"
          role="button"
          data-mdb-ripple-color="dark"
          ><i class="fab fa-google"></i
        ></a>

        <a
          class="btn btn-link btn-floating btn-lg text-dark m-1"
          href="#!"
          role="button"
          data-mdb-ripple-color="dark"
          ><i class="fab fa-instagram"></i
        ></a>

        <a
          class="btn btn-link btn-floating btn-lg text-dark m-1"
          href="#!"
          role="button"
          data-mdb-ripple-color="dark"
          ><i class="fab fa-linkedin"></i
        ></a>
        <a
          class="btn btn-link btn-floating btn-lg text-dark m-1"
          href="#!"
          role="button"
          data-mdb-ripple-color="dark"
          ><i class="fab fa-github"></i
        ></a>

      </section>
    </div>

<div class="text-center text-dark p-3">
© 2020 Copyright:
<a class="text-dark" href="https://mdbootstrap.com/">MDBootstrap.com</a>
</div>
</footer>

  </div>

</div>
</div>

<div class="text-center p-3" >
© 2020 Copyright:
<a class="text-dark" href="https://mdbootstrap.com/">MDBootstrap.com</a>
</div>

</footer>

    </Router>

  </div>
  );
}

export default App;
