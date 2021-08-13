const students = [
    {id: 21, name: 'Thomas'},
    {id: 22, name: 'Butch'},
    {id: 23, name: 'Todles'},
    {id: 24, name: 'tospy'},
];
const newName = [];
for (let i = 0; i < students.length; i++) {
    const element = students[i];
     newName.push(element.name);

}
console.log(newName);

const names = students.map(s => s.name);
const ids = students.map(i => i.id);
const biggers = students.filter(i => i.id>22);
const bigger = students.find(i => i.id>22);
console.log(names);
console.log(ids);
console.log(biggers);
console.log(bigger);