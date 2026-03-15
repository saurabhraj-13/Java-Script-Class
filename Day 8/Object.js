//Object
// keyvalue
const user = {
    name : 'saurabh',
    age : 20,
    email: 'ssaurabhraj86',
    city: 'nke'
}
// console.log(user);
// CRUD operation : create read update delete

//create
// user.amount = 1000;

// read
// console.log(user.age);

//update
// user.city = 'delhi';
// console.log(user);

//delete
// delete user.email;
// console.log(user);


// console.log(Object.keys(user));
// console.log(Object.values(user));
// console.log(Object.entries(user));

// for(let keys in user){
    //     console.log(keys , user[keys]);
    // }
    
    // const name = user.name;
    // const age = user.age;
    
    const{name,age} = user
    console.log(name ,age);
    
    // foor of loop
    for(let keys of Object.keys(user)){
        console.log(keys);
    }


    const user1 = {
        name : 'saurabh',
        age : 20,
        email: 'ssaurabhraj86',
        city: 'nke',
        greeting: function(){
            console.log("Wlcome to Java Script series");
            return 100;
        }
    }

    console.log(user1.greeting());