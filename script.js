function myFun(){
let v1 = document.getElementById('one').value
let v2 = document.getElementById('two').value
let v3 = document.getElementById('three').value

const color = "rgb("+v1+","+v2+","+v3+")";
document.getElementById('color').style.background = color
document.getElementById('name').style.color = color;}