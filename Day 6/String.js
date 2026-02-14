const st1 = "saurabh";
const st2= 'shyam';
const st3 = `raj`;
const age = 20;
const st4 = `Saurabh age is ${age}`;
console.log(st4);
console.log(st4.length);
console.log(st1,st2,st3);

// Upper case
console.log(st4.toUpperCase());
// lower case
console.log(st4.toLowerCase());
// to find indx num 
console.log(st4.indexOf('age'));

const st5 = `my name is saurabh raj i am from bihar, my name is saurabh raj`;
console.log(st5.lastIndexOf('saurabh'));
console.log(st5.includes('saurabh'));

// slice
console.log(st5.slice(2,30));
console.log(st5.slice(10));
console.log(st5.slice(-30));
console.log(st5.substring(3,15));

// to add two string 
const first = `saurabh`;
const last = `raj`;
console.log(first+last);
console.log(first+" "+last);
console.log("saurabh"+100);
console.log(100 +first+" "+last+854);

const name = `my name is saurabh raj my name`;
console.log(name.replaceAll(`my` , `we`));

const they = `    saurabh    `
console.log(they);
console.log(they.trim());

const allnmae = `saurabh , mohit , aditya , ajit , shyam , muskan`;
console.log(allnmae.split());



// Date And time 

let now = new Date();
console.log(now);
console.log(now.toString());
console.log(now.toISOString());
console.log(now.toLocaleString());


console.log(now.getDate());
console.log(now.getDay());
console.log(now.getMonth());
console.log(now.getFullYear());
console.log(now.getTime());