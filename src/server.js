const http = require('http');
const router = require('./router.js');

const port = process.env.PORT || 5000;
const server = http.createServer(router);
server.listen(port, () => {
  // eslint-disable-next-line no-console
  console.log(`server is running in localhost:${port}`);
});
