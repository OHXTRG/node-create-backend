# Node Backend ( Basic )

Basic node backend project template with mvc structure.It has proper error handling and logging systems. 
- Pre-defined authentication middleware with jsonwebtoken library
- Consistent error handingling middleware with customm error handling class 
- Wrapper function for controller for proper error logging and handling error
- support different environments with cross-env library 
- Includes cros , express , jsonwebtoken , nodemon , cross-env , dotenv dependencies pre installed 

## Structure 

Project Root : 
    - db connection : ./db/config.js
    - publics : server pbulic files 
    - uploads : directory for saving uploads to server 
    - logs : log files ( info , warn , error )
    - src : Project source code 
        - controller : buisness logic for backend 
        - routes : all the backend api routes 
        - middlewares : authentication , error handler middlewares 
        - services : directory for db queries files 
        - logger : for logging error info and warn for logs with file rotation limited to 5 mb size
        

## Example env : 

PORT=5001
JWT_SECRET_CLIENT=
JWT_SECRET_ADMIN=
DB_URL=

## Installation 

- Go to project dir 
- run npm i 
- npm run dev

## Scripts 

- npm run dev : load development env 
- npm run prod : load production env

- can make the addtional environment : 
- Create new Script with your favourable enviroment ( __ENV)
    - npm run ${__ENV} :  "cross-env NODE_ENV=${__ENV} node ./src/server.js"

