const {
    handleHome,
    staticHandler,
    postHandler,
    notFoundHandler
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
        notFoundHandler(request,response);
    }
}

module.exports = router;