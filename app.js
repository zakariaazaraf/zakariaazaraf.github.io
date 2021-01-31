const http = require('http');
const fs = require('fs')
const path = require('path')
const nodemailer = require('nodemailer')
const { parse } = require('querystring');

const hostname = '127.0.0.1';
const port = 3000;

const server = http.createServer((req, res) => {

 /*  if(req.method === 'post'){
    res.write('Data Gotten')
    res.end()
  } */

  

 if(req.url === '/'){

   if (req.method === 'POST') {
    let body = '';
    req.on('data', chunk => {
        body += chunk.toString();
    });
    req.on('end', () => {
        //console.log(parse(body));
        let data = JSON.parse(body)
        
        /* console.log(data.Email)
        console.log(data.Subject)
        console.log(data.Message) */

        let transporter = nodemailer.createTransport({
        service: 'gmail',
        auth: {
          user: 'zakariabenaais@gmail.com',
          pass: 'ziko1997rf'
        }
        });

        let mailOptions = {
        from: data.Email , // THE EMAIL SENDER
        to: 'zakariabenaais@gmail.com', // THE EMAIL RECIVERS, IT COULD BE MORE THEN ONE
        subject: data.Subject,
        text: data.Message
        };

        transporter.sendMail(mailOptions, function(error, info){
        if (error) {
          console.log(error);
        } else {
          console.log('Email sent: ' + info.response);
        }
        });
        res.end('ok');
    });
}

    fs.readFile(
        path.join(__dirname, 'index.html'),
        (error, content)=>{
            if(error) throw error;
            res.writeHead(200, { 'Content-Type': "text/html" });
            res.end(content)
        }
    )

 }else {

   let filePath = path.join(
    __dirname,
    /* req.url !== "/" ?? */ req.url
  );

  // Extension of file
  let extentionName = path.extname(filePath);


  // Initial content type
  let contentType = "text/html";

  // Check ext and set content type
  switch (extentionName) {
    case ".js":
      contentType = "text/javascript";
      break;
    case ".css":
      contentType = "text/css";
      break;
    case ".json":
      contentType = "application/json";
      break;
    case ".png":
      contentType = "image/png";
      break;
    case ".jpg":
      contentType = "image/jpg";
    case ".gif":
      contentType = "image/gif";
      break;
      case ".txt":
      contentType = "text/plain";
      break;
      case ".ico":
      contentType = "image/x-icon";
      break;
  }
  

  fs.readFile(
        path.join(filePath),
        (error, content)=>{
            if(error) throw error;
            res.writeHead(200, { 'Content-Type': contentType });
            res.end(content)
        }
    )
    /* res.writeHead(200, {})
    res.statusCode = 404;
    res.setHeader('Content-Type', 'text/plain');
    res.end(req.url); */
 }

});

server.listen(port, hostname, () => {
  console.log(`Server running at http://${hostname}:${port}/`);
});