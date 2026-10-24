# Node Backend ( Basic )

Basic node backend project template with mvc structure with pre defined authentication middlware with jsonwebtoken library . Using Error handler Middleware for consistant error handling and wrapper functions . 

## Structure 

Project Root : 
    - db connection : ./db/config.js
    - publics : server pbulic files 
    - uploads : directory for saving uploads to server 
    - src : Project source code 
        - controller : buisness logic for backend 
        - routes : all the backend api routes 
        - middlewares : authentication , error handler middlewares 
        - services : directory for db queries files 
        

## Example env : 

PORT=5001
JWT_SECRET_CLIENT=
JWT_SECRET_ADMIN=
DB_URL=

## Installation 

- Go to project dir 
- run npm i 
- npm run dev

