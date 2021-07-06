Template of Migracode's Final-Project:

To Start:

-cd Server
-cd Client

-in case the node_modules doesnt work just delete them and:

-npm install

-the mdb (boostrap) used isnt the optimal one for this kind of frontend

-the table in the .sql file is the one used in server.js

use of Pages:
-Sign-in: to add new users, they should start as loggedin=True
-log in: checks if the user is already loggedin, if not will change loggedin=true
-log out or delete (out.js) : allows to use rboth username OR email to log out, will need password to delete an account
