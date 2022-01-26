const app = require('http');

const requestListener = (req, res) => {
  res.writeHead(200);
  res.end('Hello Holberton School!');
};

const server = app.createServer(requestListener);
server.listen(1245);
