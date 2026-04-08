// function change(){
//     const element = document.getElementById("first");
//     element.textContent="hello";
// }

// const element1 = document.getElementById("second");
// element1.onclick = function change(){
//     element1.textContent = "Java Script is completed";
// }
const element = document.getElementById("first");
element.addEventListener('click',()=>{
    element.textContent = "Strike is Coming";
})

element.addEventListener('click',()=>{
    element.style.backgroundColor="brown";
})

const child1 = document.getElementById("child1");
child1.addEventListener('mouseenter',()=>{
    child1.textContent = "I am clicked";
})

const parent = document.getElementById("parent");
// console.log(parent.children);

function handleClick(e){
   e.target.textContent = "I am Clicked";
   parent.removeEventListener('mouseenter',handleClick);
}

parent.addEventListener('click',handleClick)