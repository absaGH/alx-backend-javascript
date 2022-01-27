const express = require('express');

const countStudents = require('./3-read_file_async');

const pth = process.argv[2];

const app = express();

app.get('/', (req, res) => {
  res.send('Hello Holberton School!');
});

app.route('/students')
  .get(async (req, res) => {
    const tag = 'This is the list of our students\n';
    try {
      const data = await countStudents(pth);
      res.send(`${tag}${data.join('\n')}`);
    } catch (error) {
      res.send(error.message);
    }
  });

app.listen(1245);

module.exports = app;
