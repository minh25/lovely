const express = require('express')
const path = require('path')
const http = require('http')
const fs = require('fs')
const port = process.env.PORT || 5000
const app = express()

// fs.readFile('./index.html', function (err, html) {
//     if (err) {
//         throw err; 
//     }       
//     http.createServer(function(request, response) {  
//         response.writeHeader(200, {"Content-Type": "text/html"});  
//         response.write(html);  
//         response.end();  
//     }).listen(process.env.PORT || 5000);
// });

app.get('/', (req, res) => 
    res.sendFile(path.join(__dirname + '/index.html'))
)

app.listen(port, () => console.log(`Listening on port ${port}!`))