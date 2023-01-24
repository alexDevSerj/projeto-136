var valor = ""
var status = "";

function setup(){
  canvas = createCanvas(450,350)
  canvas.center()

  video = createVideo(450, 350)
  video.hide()
}

function  preload(){

}

function draw(){

}

function start(){
  objectDetector = ml5.objectDetector("cocossd", modelLoaded)
  document.getElementById("status").innerHTML = "status: detectando objetos"
  valor = document.getElementById("valor").innerHTML = value
}

function modelLoaded(){
  console.log("modelo foi carregado")
  status = true;
}