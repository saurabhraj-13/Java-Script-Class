// Execution Context
// Memory allocation
// a = 10
// b = 20
// addNumber = fnCode
// sumResult1 = undefined
// sumeResult2 = undefined

// Execution phase

// console.log(a);
// var a = 10;
// var b = 20;

function addnumber(num1,num2){
    var sum = num1+num2;
    return sum;
}

// console.log(addnumber(a,b));
console.log(addnumber(5,9));


// let , const 
let a = 10;
const b = 20;
var c = 40;

console.log(a);
function addnum(num1,num2){
  const sum = num1+ num2;
  return sum;
}
console.log(addnum(5,4));
console.log(addnum(a,b));

function print(){
    console.log(a);
    console.log(c);
}
print();