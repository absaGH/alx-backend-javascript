interface Student {
  firstName: string
  lastName: string
  age: number
  location: string
}

const stud1: Student = {
  firstName: 'Alex',
  lastName: 'Girma',
  age: 20,
  location: 'Addis Ababa',
  }

const stud2: Student = {
  firstName: 'John',
  lastName: 'Abebe',
  age: 24,
  location: 'Washington',
  }

const studentList: Student[] = [stud1, stud2];
const headers: string[] = ['firstName', 'location'];
const table: HTMLTableElement = document.createElement('table');
let tr: HTMLTableRowElement = table.insertRow(-1);
for (let h = 0; h < 2; h++) {
  let th: HTMLTableCellElement = document.createElement('th');
  th.innerHTML = headers[h];
  tr.appendChild(th);
  }

for (let i = 0; i < studentList.length; i++) {
  tr = table.insertRow(-1);
  for (let j = 0; j < headers.length; j++) {
    let tdName:  HTMLTableCellElement= document.createElement('td');
    let tdlocation: HTMLTableCellElement = document.createElement('td');
    tdName = tr.insertCell(-1);
    tdName.innerHTML = studentList[i].firstName;
    tdlocation = tr.insertCell(-1);
    tdlocation.innerHTML = studentList[i].location;
  }
}