function volume(r,h){
    return Math.PI*(r**2)*h;
}
let total = volume(7,10);
console.log(total.toFixed(2));

// Traditional function
const multiple = function(n){
    return n*n
}
console.log(multiple(5));

// Arrow function
const squre = (n) => n*n;
console.log(squre(5));

// Function calling another function

function SumSalary(salary1,salary2){
    return salary1+salary2;
}
function IncreseSalary(){
    return 
}
console.log(SumSalary(10000,12000));

