const fs = require('fs');

function countStudents(pth) {
  if (fs.existsSync(pth)) {
    const FIELD = [];
    const Fcount = [];
    const LIST_OF_FIRSTNAMES = [];
    let fls = [];
    const data = fs.readFileSync(pth, { encoding: 'utf8' }).trim();
    const len = data.split('\n').length;
    const lines = data.split('\n');
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
    for (let i = 0; i < FIELD.length; i += 1) {
      console.log(`Number of students in ${FIELD[i]}: ${Fcount[i]}. List: ${LIST_OF_FIRSTNAMES[i]}`);
    }
  } else {
    throw new Error('Cannot load the database');
  }
}

module.exports = countStudents;
