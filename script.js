// let item = document.querySelectorAll(".item");
let itemOne = document.querySelector("#itemOne");
let itemTwo = document.querySelector("#itemTwo");
let itemThree = document.querySelector("#itemThree");
let itemFour = document.querySelector("#itemFour");    
// item.forEach((i) => {
//     setTimeout(() => { i.style.display = "block" }, 5000);
// })

setTimeout(() => { itemOne.style.color = "#ffffffe5" }, 500);
setTimeout(() => { itemTwo.style.color = "#ffffffe5" }, 1250);
setTimeout(() => { itemThree.style.color = "#ffffffe5" }, 2000);
setTimeout(() => { itemFour.style.color = "#ffffffe5" }, 2750);


// setTimeout(()=>{item.setAttribute("display","block")}, 1000)