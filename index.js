const express = require('express')
const path = require('path')
const http = require('http')
const url = require('url')
const fs = require('fs')
const app = express()

// // app.get('/', (req, res) => res.sendFile(path.join(__dirname + '/index.html')))
// // app.get('/', (req, res) => {
// //     res.send('hello')
// // })
// // app.listen(port, () => console.log('Server ready'))

// http.createServer((req, res) => {
//     res.write('Hello World!');
//     res.sendFile(path.join(__dirname + '/index.html'));
//     res.end();
// }).listen(8080);

fs.readFile('./index.html', function (err, html) {
    if (err) {
        throw err; 
    }       
    http.createServer(function(request, response) {  
        response.writeHeader(200, {"Content-Type": "text/html"});  
        response.write(html);  
        response.end();  
    }).listen(3000);
});