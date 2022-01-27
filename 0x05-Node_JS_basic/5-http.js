const http = require('http');

const countStudents = require('./3-read_file_async');

const pth = process.argv[2];

const app = http.createServer(async (req, res) => {
  if (req.url === '/') {
    res.writeHead(200, { 'Content-Type': 'text/html' });
    res.write('Hello Holberton School!');
    res.end();
  } else if (req.url === '/students') {
    res.writeHead(200, { 'Content-Type': 'text/html' });
    res.write('This is the list of our students\n');
    try {
      const data = await countStudents(pth);
      res.write(`${data.join('\n')}`);
    } catch (error) {
      res.end(error.message);
    }
    res.end();
  }
});

app.listen(1245);

module.exports = app;
