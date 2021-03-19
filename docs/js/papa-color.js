
// const path = document.getElementsByClassName("dadSVG2")


// var testElements = document.getElementsByClassName("dadSVG2");
// var testPaths = Array.prototype.filter.call(testElements, function(testElement){
//   return testElement.nodeName === 'path'
//     ;
// });

const path = document.querySelector(".dadSVG2").querySelectorAll('path')


var i = 0
function pintar () {
for (let i=0; i<=172; i++) {
let pathi = path[i]
var color = colores()
pathi.style.fill = color
pathi.style.stroke = color
}
}


var contador = 0


function pintarInterval () {
contador++
pintar()
if(contador===120){
  clearInterval(pintarInterval)
}
}

var pintarInterval = setInterval(pintarInterval, 3000)





function colores () {

var n = Math.random()
if(n<0.1){
  color = "blue"
}
if(n>0.1 & n<.2){
  color = "red"
}

if(n>0.2 & n<.3){
  color = "green"
}

if(n>0.3 & n<.4){
  color = "magenta"
}
if(n>0.4 & n<.5){
  color = "brown"
}
if(n>0.4 & n<.5){
  color = "orange"
}
if(n>0.4 & n<.5){
  color = "yellow"
}
if(n>0.5 & n<.6){
  color = "pink"
}
if(n>0.6 & n<.7){
  color = "aqua"
}
if(n>0.7 & n<.8){
  color = "chartreuse"
}
if(n>0.8 & n<.9){
  color = "darkorange"
}
if(n>0.9 & n<1){
  color = "lightcoral"
}
return color
}