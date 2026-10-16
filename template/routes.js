const fs = require('fs');


const requestHandler = (req , res )=>{


        const url = req.url ;
        const method = req.method;
    
        if( url === '/'){
            res.setHeader("content-type" , "text/html");
            res.write("<html>");
            res.write('<head><title>Send Message</title></head>');
            res.write('<body><form action="/message" method="POST"><input name="message" type="text"/> <button type="submit">Send</button></form></body>');
            res.write('</html>');
            return res.end();
        }else if(url === '/message' && method === "POST"){
            const body = [];
            
            req.on("data", (chunk)=>{
                console.log(chunk);
                body.push(chunk);
            })
    
            req.on("end", ()=>{
                const parsedBody = Buffer.concat(body).toString();
                console.log(parsedBody);
                const message = parsedBody.split("=")[1];
                // fs.writeFileSync('message.txt' , message);
                fs.writeFile("message.txt",message,(err)=>{
                    res.statusCode = 302;
                    res.setHeader("Location" , "/");
                    return res.end();
                })
            })
    
        }else{

            res.setHeader("content-type" , "text/html");
            res.write("<html>");
            res.write('<head><title>ERROR</title></head>');
            res.write('<body>NO Route found</body>');
            res.write('</html>');
            return res.end();
        }
    
}


exports.handler = requestHandler;
exports.freeText = "This is some hard code text";