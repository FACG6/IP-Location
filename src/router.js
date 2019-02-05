const {
    handleHome,
    staticHandler,
    postHandler,
} = require('./handler');

const router = (request, response) => {
    const endpoint = request.url;
    if (endpoint === '/') {
        handleHome(request, response,endpoint);
    } else if (endpoint.includes('/public')) {
        staticHandler(request, response,endpoint);
    } else if (endpoint === '/search') {
        postHandler(request, response);
    }
    else {
        response.writeHead(404, { 'Content-Type': 'text/html' });
        response.end('<h2>Page not found!!!</h2>');
    }
}

module.exports = router;