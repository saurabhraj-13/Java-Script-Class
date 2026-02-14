let array = [10 ,"saurabh" , "raj" , 89];
console.log(array);
console.log(array.length);
console.log(typeof array);

// push : insert element at end
array.push(100);
console.log(array);
// pop: delete element from end
console.log(array.pop());

// use unshift to add element in arrray at 1st position
array.unshift(20);
array.unshift('my name');
console.log(array);

// use shift to delete at 1st position
console.log(array.shift());

           //  for loop
// let arr = [10,20,30,40,50,60];
// for(let i = 0 ; i<arr.length ; i++){
//     console.log(arr[i]);
// }

         // for of loop
// for(let num of arr){
//     console.log(num);
// }

// object(non primitive) : copy by reference hote hai
// primitive copy by value

const arr1 = [10,50,90,40,30,20,57];
// arr1[2]=100;
console.log(arr1);
console.log(arr1.slice(1,3));
const arr2 = arr1.splice(1, 3 , 'sohem' ,24)
console.log(arr2);

const arr3 = [10,40,60];
const arr4 = [60,80,30];
const arr5 = ['saurabh , 90' , true];

// arr3.push(arr4);

console.log(arr3.concat(arr4));
// Spread operator
arr6 = [...arr3,...arr4,...arr5];
console.log(arr6);

const names = ['saurabh' , 'raj' , 'rohan'];
console.log(names.toString()); 
console.log(names.join('-'));
console.log(names.lastIndexOf('raj'));
console.log(names.includes('raj'));

names.sort();
names.reverse();
console.log(names);

const num = [100,80,70,50,33,77,];
num.sort((a,b) => a-b);
// -ve : phele a aayegaa fr
// -ve : b aayegaa fr a aayegaa
console.log(num);

const numb = [10,99,80,55,[23,49,[22,29,58],48,96],45,37,28,20];
console.log(numb);
console.log(numb[4][2][1]);
console.log(numb.flat(1));
console.log(numb.flat(Infinity));
