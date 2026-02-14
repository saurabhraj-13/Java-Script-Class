// Arithmetic Operator
let a = 10;
let b = 20;

console.log(a+b);
console.log(a-b);
console.log(a*b);
console.log(a/b);
console.log(a%b);
// Remainder
console.log(5**3);

// Assignment Operator
let x= 10;
let y= 30;
x=x+y;
x=x-y;
x=x*y;

console.log(x);

// Compersion Operator

let m = 10;
let n =10;
console.log(m==n);
console.log(m>n);
console.log(m<n);
console.log(m<=n);
console.log(m>=n);
console.log(m===n);
console.log(m!=n);

let p="10";
let q = 10;
console.log(p===q);
console.log(p==q);

// Convert String to number

let e = "100";
let r = Number(e);
console.log(r);
console.log(typeof r);

// Convert Any digit to number

let c= "124de";
let u = Number(c);
console.log(u);        // Nan ( Not a number )
console.log(typeof u);  // ( Number)

// Convert Boolean to number
console.log(Number(true));
console.log(Number(false));
console.log(Number(null));
console.log(Number(undefined));
console.log(Number(""));

// Convert Number to String

let d = 500;
let f = String(d);
console.log(f);
console.log(String(true));
console.log(String(false));
console.log(String(null));
console.log(String(undefined));
console.log(String(""));

// Convert Boolean to number
console.log(Boolean(""));
console.log(Boolean("2344"));
console.log(Boolean(null));
console.log(Boolean(5));
console.log(Boolean(undefined));

// Computer Science Challenges
let j = 0.5;
let k = 0.7;
console.log(j+k); // 1.2

let g =0.2;
let h = 0.1; 
console.log(g==h);
console.log(g+h); // 0.30000000000000004

// null is lossely equal to undefined

console.log(null==undefined);
console.log(null===undefined);
console.log(null==0);
console.log(null=="");
console.log(null==true);
console.log(null==false);

// <, >, <=, >= (Null --> is equal to number)

console.log(null>0);
console.log(null>= 0);
console.log(null<= 0);
console.log(null< 0);
console.log(null>= undefined);
console.log(null<=undefined);

console.log("Saurabh" > "Raj");
console.log("Saurabh" < "Raj");
console.log("saurabh" > "Raj");
console.log(10<true);

// ek koi bhi type h , usko agar mujhe compare karna hai dusre kisi type se dono num mein convert honge

console.log(null>="");
console.log(NaN == NaN);

//How to work Loop in Java Script

for(let i = 0 ; i<=10 ; i++){
    console.log(i);
}

// while Loop
let i = 0;
while(i<5){
    console.log(i);
    i++;
}

// Do while loop

// do{
//         console.log(i);
//         i++
// }
//     while(i<15);

// if else Condition

let age =15;
if(age>=18){
    console.log("You are eligible for voting");
}
else{
    console.log("You are not eligible for voting")
}

// else if use

let age1 = 22;
if(age >= 18){
    console.log("You are teenager")
}
else if(age<=60){
    console.log("You are Young")
}
else{
    console.log("You are old")
}

// use of logical opertor
// && , ||
console.log(true && true);
console.log(true && false);
console.log(false && true);
console.log(false && false);

console.log(true || true);
console.log(true || false);
console.log(false || true);
console.log(false || false);

let firstname = "Saurabh";
let secondname = "Sourav";
console.log(firstname && secondname);
console.log(firstname || secondname);

// && condition -- > if first value is false then return first value in && conditon if first is true then return second value 
// || condition -- > alteast one value is true then return its

let name="";
let na = "saurabh"
console.log(name && na);
console.log(name || na);


