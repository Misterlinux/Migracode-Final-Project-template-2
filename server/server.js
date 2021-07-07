const express = require("express");
var app = express();

const bodyParser = require("body-parser");

const cookieParser = require('cookie-parser');
app.use(cookieParser());

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

const session = require('express-session');
const { response } = require("express");
app.use(session({
    secret: 'keyboard cat',
    resave: false,
    saveUninitialized: true
}))

const { Pool } = require("pg");

const pool = new Pool({
    user: "postgres",
    host: "localhost",
    database: "postgres",
    password: "",
    port: 5432,
  });

app.all('*', function(req, res, next) {
    res.header('Access-Control-Allow-Origin', 'URLs to trust of allow');
    res.header('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, PATCH, DELETE');
    res.header('Access-Control-Allow-Headers', 'Content-Type');
    if ('OPTIONS' == req.method) {
    res.sendStatus(200);
    } else {
      next();
    }
});

app.post("/out", (request, response) => {

    const user = request.body.userpass;
    const pass = request.body.password;

    console.log( user )

    if( user && !pass ){
        console.log("welcomed before its starts working")
        pool
        .query(' SELECT * FROM users where username=$1' , [ user ] )
        .then((resultado) => {
            console.log( user )
            console.log( resultado.rows[0].loggedin )
            if( resultado.rows.length > 0 && resultado.rows[0].loggedin){
    
                request.body.message = " time to update teh table"
                const outed = false;
                request.body.loggedIn = outed;

                const query =
                "UPDATE users SET loggedin=$2 WHERE username=$1 OR email=$1  ";
                pool
                    .query(query, [ user, outed ])
                    .then(() => 
                        console.log( "ok, lets see if its deleted " ),
                        response.send( request.body  )
    
                    )
                    .catch((e) => console.error(e));
    

            }else{
                
                console.log(user)
                console.log(pass)
                request.body.message = " no user match or already logged out"

                return response
                    .status(202)
                    .send( request.body)

            }

        })

    }else if( user && pass ){

        pool
        .query(' SELECT * FROM users where username=$1 and password=$2 OR email=$1 and password=$2 ' , [ user, pass ] )
        .then((resultado) => {

            if( resultado.rows.length > 0 ){

                request.body.message = " yes the user to delete exist"

                const query =
                "DELETE FROM users WHERE username=$1 and password=$2 or email=$1 and password=$2 ";
                pool
                    .query(query, [ user, pass ])
                    .then(() => 
                        console.log( "ok, lets see if its deleted " ),
                        response.send( request.body  )
    
                    )
                    .catch((e) => console.error(e));


            }else{

                request.body.message = " no user match the user or email given"

                return response
                    .status(202)
                    .send( request.body)

            }
        })


    }

})


app.post("/log", (request, response) => {

    const user = request.body.username;
    const mail = request.body.email;
    const pass = request.body.password;

    pool
    .query('SELECT * FROM users where username=$1 or password=$2 or email=$3', [ user, pass, mail ] )
    .then((resultado) => {

        if( resultado.rows.length > 0 ){

            if( resultado.rows[0].email == mail ){
                request.body.message = " this user email is already registered "

                return response
                    .status(202)
                    .send( request.body)

            }else if( resultado.rows[0].username == user ){
                request.body.message = " this user username already exist "

                return response
                    .status(202)
                    .send( request.body)

            }else if( resultado.rows[0].password == pass  ){
                request.body.message = " this user password is already in use"

                return response
                    .status(202)
                    .send( request.body)
            }else{
                request.body.message = " there are problems with the current user, try changing the paramethers "

                return response
                    .status(202)
                    .send( request.body)
            }


        }else{

            request.body.message = "user created";
            const accessed = true;
            request.body.loggedIn = accessed;

            const query =
            "INSERT INTO users (username, email, password, loggedin) VALUES ($1, $2, $3, $4)";
            pool
                .query(query, [user, mail , pass, accessed])
                .then(() => 
                    console.log( "and so we created a new one" ),
                    response.send( request.body  )

                )
                .catch((e) => console.error(e));

        }
        
    })



})

app.post('/mini', (request, response) => {

    const named = request.body.username;
    const access = request.body.password;

    console.log( "ok so, we got the mini? ")
    if (named && access) {

        pool
        .query('SELECT * FROM users where username=$1 and password=$2', [named, access] )
        .then((resultado) => {

            console.log( "did I got this far? ")
            if( resultado.rows.length > 0 && !resultado.rows[0].loggedin ){
                console.log( "where did we get? ")
                request.body.message = "granted log in"
                const innit = true;
                request.body.loggedIn = innit;

                const query =
                "UPDATE users SET loggedin=$2 WHERE username=$1 ";
                pool
                    .query(query, [ named, innit ])
                    .then(() => 
                        console.log( "time to log in " ),
                        response.send( request.body  )
    
                    )
                    .catch((e) => console.error(e));


            }
            else if( resultado.rows.length > 0 && resultado.rows[0].loggedin ){
                request.body.message = "already logged in "
                const innit = false;
                request.body.loggedIn = innit;

                return response
                    .status(202)
                    .send( request.body)
            }
            else if( resultado.rows.length == 0  ){
                request.body.message = " both user and username aren't present"
                const innit = false;
                request.body.loggedIn = innit;

                return response
                    .status(202)
                    .send( request.body)
            }

        }
        
        )

    } 
    else if( !named || !access ){

        const innit = false;
        request.body.loggedIn = innit;

        request.body.message = "Username or Password missing"
        response.send(request.body);

    }
    else {

        const innit = false;
        request.body.loggedIn = innit;
        request.body.message = "you are already logged in"
        
        response.send(request.body);
    }

});

var port = 5000;
app.listen(port, () => 
    console.log(`SERVER LISTENING IN PORT : ${port}`)
);