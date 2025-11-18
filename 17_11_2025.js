let Employee={
    Name:"Abisharan",
    Age:24,
    Department:"IT",
    Address:{
        City:"Jaffna",
        Zip:40000,
    },
    Skills:["Leadership","Problem solving","Teamwork"]
}
console.log(Employee.Address.City);
console.log(Employee["Address"]["Zip"])

const{Name,Department}=Employee;
console.log(Name);
console.log(Department);

Employee.introduce=function(){
    console.log(`Hi, My name is ${this.Name}. I am working in ${this.Department} department`);
}
Employee.introduce();

let introduce = () => {
    console.log(`Hi, My name is ${Name}. I am working in ${Department} department`);
}
introduce();

Employee.Skills.forEach(skill => console.log(skill));

console.log(Object.keys(Employee));
console.log(Object.values(Employee));



let students=[
    {name:"Asha",score:85},
    {name:"Karan",score:92},
    {name:"Lina",score:78},
    {name:"Niro",score:88}
];
students.forEach(nam => console.log(nam.name));

const scores = students.map(student => student.score);
console.log(scores);

const topStudent = students.filter(student => student.score>80);
console.log(topStudent);

const totalScore = students.reduce((sum,student) => sum+student.score,0);
console.log(totalScore);

const avgScore = totalScore/students.length;
console.log(avgScore);

console.log(students.some(student => student.score>80));
console.log(students.every(student => student.score>80));

const nested = [[1,2],[3,4],[5,6]];
console.log(nested.flat());

const FlatMapped = nested.flatMap(arr => arr.map(n => n*2));
console.log(FlatMapped);