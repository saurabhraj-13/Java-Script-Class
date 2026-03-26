// Scope and closure , HOF
// Global_> Accessible to everyone 
// functional -> accesible only to that function
// Block level scope-> accesible only to that Block

// let a= 10;node scope.js
// greet();


function greeting(){
    let a= 100;
    const b = 200;
    var c = 300;
    console.log(a);
    console.log(b);
    console.log(c);
}
greeting();
// console.log(a);
// console.log(b);
// console.log(c);

{
    let x = 500;
    const y = 600;
    var d = 400;
}
console.log(d);
// console.log(x);
// console.log(y);


// Global Scope

let m = 23;
const n = 25;
var o = 27;

function print(){
    console.log(m);
    console.log(n);
    console.log(o);
}
print();

function greet(){
    let global = 40;
    function meet(){
        let num = 10;
        console.log(num);
    }
    meet();
}
greet();

// function createcounter(){
//     function increment(){
//         console.log("this is increment function")
//     }
//     return increment();
// }
// createcounter();

function createcounter() {
    let count = 0;
    function increment(){
        count++;
        return count;
    }
    return increment;
}
const counter = createcounter();
console.log(counter());
console.log(counter());
console.log(counter());

let user ={
    balance : 500,
    deposite : function (amount) {
        if(typeof this.balance=='number' && this.balance>=0){
            this.balance += amount;
        return this.balance;
    }
}, 
     withdraw : function(amount){
        if(typeof this.balance =='number' && this.balance >=0 && amount <=this.balance){
            this.balance -=amount;
            return this.balance;
        }
     }
}
console.log(user.deposite(200));  
console.log(user.withdraw(100));

function double(){

    function execute(){
        console.log("hello");
    }
    return execute;
}
const n1 = double();
n1();

function double(){

   return function execute(){
        console.log("hello");
    }
}
const n2 = double();
n1();

