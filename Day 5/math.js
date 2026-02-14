// let a =10;
// console.log(a);
// let b = 342.6869;
// console.log(b.toFixed(2)); //342.69 round off num
// let c = b.toFixed(2);
// console.log(typeof c); // String

// console.log(b.toPrecision(4));
// console.log(b.toString());

// let d = new Number(5);
// let e = new Number(5);
// console.log(d);
// console.log(typeof d);
// console.log(d==e);

// Math function
// console.log(Math.abs(-5));
// console.log(Math.PI);
// console.log(Math.LN10);
// console.log(Math.SQRT2);
// console.log(Math.ceil(6.3));
// console.log(Math.floor(6.3));
// console.log(Math.log10(20));
// console.log(Math.max(10,20,40,11));
// console.log(Math.random());

// [0,1) : it will generate value b/w 0 and 1 , where 0 is included but 1 is not included 

// generate 0-9 number
// console.log(Math.random()*10);
console.log(Math.floor(Math.random()*10)+1);
console.log(Math.floor(Math.random()*6)+1);
//math.floor(math.random()*total no. of outcomes)+shift

//15-25
console.log(Math.floor(Math.random()*11)+15)
//math.floor(math.random(max-min+1))+min;
console.log(Math.floor(Math.random()*(25-15+1))+15)

// OTP Generate : 4 digit(1000-9999)
console.log(Math.floor(Math.random()*(9999-1000+1))+1000);