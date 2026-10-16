const http = require('http');
const requestHandler = require("./routes")

console.log(requestHandler.freeText);

const server = http.createServer(requestHandler.handler);


server.listen(3000 , ()=>console.log(`Server is running at 3000 port.....`));

