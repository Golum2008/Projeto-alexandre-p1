var fundo


function preload() {
    fundo = loadImage("fundo.jpg");
}

function setup() {
    // cria espaço no jogo
    //createCanvas(1000, 1000);
    createCanvas(windowWidth, windowHeight);
}

function draw() {
    //fundo
    background(fundo);


}