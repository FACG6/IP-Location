const path = require('path');
const fs = require('fs');
const queryString = require('querystring');
const req = require('request');
require('env2')('./config.env');

const { key } = process.env;


const handleHome = (request, response) => {
  const filePath = path.join(__dirname, '..', 'public', 'index.html');
  fs.readFile(filePath, (error, file) => {
    if (error) {
      response.writeHead(500, { 'Content-Type': 'text/html' });
      fs.createReadStream(path.join(__dirname, '..', 'public', 'html', 'serverError.html')).pipe(response);
    } else {
      response.writeHead(200, { 'Content-Type': 'text/html' });
      response.end(file);
    }
  });
};
// static service handler
const staticHandler = (request, response, endpoint) => {
  const contentType = {
    html: 'test/html',
    css: 'text/css',
    js: 'text/javascript',
    jpg: 'image/jpg',
    ico: 'image/x-icon',
    png: 'image/png',
  };
  const filePath = path.join(__dirname, '..', endpoint);
  const extension = endpoint.split('.')[1];
  fs.readFile(filePath, (error, file) => {
    if (error) {
      response.writeHead(404, { 'Content-Type': 'text/html' });
      fs.createReadStream(path.join(__dirname, '..', 'public', 'html', 'pageNotFound.html')).pipe(response);
    } else {
      response.writeHead(200, { 'Content-Type': contentType[extension] });
      response.end(file);
    }
  });
};
const postHandler = (request, response) => {
  let allData = 'data=';
  request.on('data', (chunkOfData) => {
    allData += chunkOfData;
  });
  request.on('end', () => {
    const convertedData = queryString.parse(allData);
    const options = {
      method: 'GET',
      url: `https://api.ipdata.co/${convertedData.data}?api-key=${key}`,
    };
    req.get(options, (err, res, body) => {
      if (err) {
        response.writeHead(500, { 'Content-Type': 'text/html' });
        fs.createReadStream(path.join(__dirname, '..', 'public', 'html', 'serverError.html')).pipe(response);
      } else {
        response.writeHead(200, { 'Content-Type': 'application/json' });
        response.write(body);
        response.end();
      }
    });
  });
};
const notFoundHandler = (request, response) => {
  response.writeHead(404, { 'Content-Type': 'text/html' });
  fs.createReadStream(path.join(__dirname, '..', 'public', 'html', 'pageNotFound.html')).pipe(response);
};

module.exports = {
  handleHome,
  staticHandler,
  postHandler,
  notFoundHandler,
};
