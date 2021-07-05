import React from 'react';
import * as mdb from 'mdb-ui-kit';
import './components/home.css';

function Home(){
    
    return <div>

        <div class="bg-image d-flex justify-content-center align-items-center sfondo">
            <h3> welcome to the page </h3>
            <button
                type="button"
                class="btn btn-outline-primary btn-rounded"
                data-mdb-ripple-color="dark"
                >
                Primary
            </button>
        </div>

    </div>
}

export default Home;