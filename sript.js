var b1 = document.getElementById("b1")
var h11 = document.getElementById("h11")
b1.onclick = function() {
    h11.style.color = "red";
    console.log("red")
}
var b2 = document.getElementById("b2")
b2.onclick = function() {
    h11.style.color = "green";
    console.log("green")
}

var num = 38 % 5;
console.log(num)
console.log("Hello World!")