const path = require('path');
const fs = require('fs');
const queryString = require('querystring');
const handleHome = (request, response,endpoint) => {
    const filePath = path.join(__dirname, '..', 'public', 'index.html');
    fs.readFile(filePath, (error, file) => {
        if (error) {
            response.writeHead(500, { 'Content-Type': 'text/html' });
            response.end('<h2>Server internal error !!!!!</h2>')
        }
        else {

            response.writeHead(200, { 'Content-Type': 'text/html' });
            response.end(file);
        }
    })
}
//static service handler
const staticHandler = (request, response,endpoint) => {
    const contentType = {
        html: 'test/html',
        css: 'text/css',
        js: 'text/javascript',
        jpg: 'image/jpg',
        ico: 'image/x-icon',
        png: 'image/png'
    }
    const filePath = path.join(__dirname, '..', endpoint);
    console.log(filePath)
    const extension = endpoint.split('.')[1];
    fs.readFile(filePath, (error, file) => {
        if (error) {
            response.writeHead(404, { 'Content-Type': 'text/html' })
            response.end('<h2>Page Not Found</h2>');
        }
        else {
            console.log(extension)
            response.writeHead(200, { 'Content-Type': contentType[extension] });
            response.end(file);
        }
    })
}
const postHandler = (request, response) => {
    let allData = 'data=';
    request.on('data', chunkOfData => {
        allData += chunkOfData;
    });
    request.on('end', () => {
        const convertedData = queryString.parse(allData);
        console.log(convertedData);
        
        })
    }


module.exports = {
    handleHome,
    staticHandler,
    postHandler,

}