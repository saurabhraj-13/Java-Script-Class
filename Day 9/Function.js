// funxtion
 function greeting(){
    console.log("Welcome to java Script ")
 }

 function add(nums1 , nums2){
    const sum = nums1+nums2;
    console.log(sum);
 }

 greeting();
 add(2,5);

 // this fun add many number togther


// rest operator

 function addnum(...num){
    let sum = 0;
    for(let n of num){
        sum = sum+n;
    }
    console.log(sum);
 }

 addnum(1,6,7,8,9);


 // add two array 

 const arr = [10,30,50,70];
 const arr2 = [20,40,60,80];

 const ans = [...arr, ...arr2];
 console.log(ans);

 // function : Expression

 const addNumber= function(num1 , num2){
   return num1+num2;
 }
 console.log(addNumber(2,4));


// arrow Function

const add1 = (num1,num2) =>{
   return num1+num2;
}
console.log(add1(6,6));

// another way to add num using arrow fun 
const add2 = (num1,num2) =>  num1+num2;
console.log(add2(7,7));

// sort array using arrow function 
 let arr1 = [70 ,6, 50,23,12];

 arr1.sort((a,b) => a-b);
 console.log(arr1);

 // square of num using arrow function

 const square = (num) => num*num;
 console.log(square(6));

 const greeting1 = () => {
   return{
      name : 'saurabh',
      age : 20
   }
 }
 console.log(greeting1()); 

 // another way 

 const greeting3 = () => ({ name: 'saurabh' , age:20})
 console.log(greeting3());

 // IIFE

 function greet() {
   console.log("welcome")
 }
  function remainder(callback) {
   console.log("welcome to java script");
   callback();
   console.log("class is starting");
  }

  function start() {
   console.log("we are going tp start js class");
  }

  remainder(greet);
  start();


  function zomataoorderplaced() {
   console.log("we have start preparing order ");
  }

  function payment(amount){
   console.log(`${amount} payment is initialized`);
   console.log("payment is completed");
   zomataoorderplaced();
  }
  
// zomataoorderplaced();
payment(400);