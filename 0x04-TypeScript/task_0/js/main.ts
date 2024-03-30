interface Student {
    [key: string]: any;
    firstName: string;
    lastName: string;
    age: Number;
    location: string;
}

const student1: Student = {
    firstName: "Paola",
    lastName: "Gabby",
    age: 12,
    location: "Accra"
};
const student2: Student = {
    firstName: "Paola",
    lastName: "Gabby",
    age: 12,
    location: "Accra"
}; 
const studentsList: Student[] = [student1, student2];
const studentTable = document.createElement('table');

for (let stud of studentsList) {
    let row = document.createElement('tr');

    for (let prop in stud) {
        let cell = document.createElement('td');
        cell.textContent = stud[prop]
        row.appendChild(cell)
    }
    studentTable.appendChild(row);
}

document.body.appendChild(studentTable);
