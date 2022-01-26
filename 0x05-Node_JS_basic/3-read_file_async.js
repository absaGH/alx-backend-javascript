const fs = require('fs');

const util = require('util');

const readFile = util.promisify(fs.readFile);

function countStudents(pth) {
  const FIELD = [];
  const Fcount = [];
  const LIST_OF_FIRSTNAMES = [];
  let fls = [];
  const promise = (resolve, reject) => {
    readFile(pth, 'utf8', (err, data) => {
      if (err) reject(Error('Cannot load the database'));
      else {
        const Fdata = data.trim();
        const len = Fdata.split('\n').length;
        const lines = Fdata.split('\n');
        console.log(`Number of students: ${len - 1}`);
        for (let i = 1; i < len; i += 1) {
          fls = lines[i].split(',');
          if (!FIELD.includes(fls[3])) {
            FIELD.push(fls[3]);
            Fcount.push(1);
            LIST_OF_FIRSTNAMES.push(`${fls[0]}`);
          } else {
            Fcount[FIELD.indexOf(fls[3])] += 1;
            LIST_OF_FIRSTNAMES[FIELD.indexOf(fls[3])] = LIST_OF_FIRSTNAMES[FIELD.indexOf(fls[3])].concat(`, ${fls[0]}`);
          }
        }
        const message = [];
        for (let i = 0; i < FIELD.length; i += 1) {
          console.log(`Number of students in ${FIELD[i]}: ${Fcount[i]}. List: ${LIST_OF_FIRSTNAMES[i]}`);
          message.push(`Number of students in ${FIELD[i]}: ${Fcount[i]}. List: ${LIST_OF_FIRSTNAMES[i]}`);
        }
        resolve(message);
      }
    });
  };
  return new Promise(promise);
}

module.exports = countStudents;
