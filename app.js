let para = document.getElementById("para1");
    para.setAttribute("style", "color:green");

let para1 = document.getElementById("para2");
    para1.setAttribute("style", "color:green");

let para2 = document.getElementById("para3");
    para2.setAttribute("style", "color:green");

let para3 = document.getElementById("para4");
    para3.setAttribute("style", "color:green");

let para4 = document.getElementById("para5");
    para4.setAttribute("style", "color:green");

let a = document.getElementsByClassName()


document.getElementById('para3').style.fontSize = "3rem";

document.getElementById("para1").animate([
    // keyframes
    { transform: 'translateX(250px)' },
    { transform: 'translateY(300px)' }
], {
    // timing options
    duration: 1000,
    iterations: Infinity
});

document.getElementById("para5").animate([
    // keyframes
    { transform: 'translateX(250px)' },
    { transform: 'translateY(-300px)' }
], {
    // timing options
    duration: 1000,
    iterations: Infinity
});