// Variaveis da Bolinha
let xBolinha = 300;
let yBolinha = 200;
let diametro = 15;
let raio = diametro / 2;

// Velocidade da Bolinha
let velocidadeXdaBolinha = 6;
let velocidadeYdaBolinha = 6;

// Variaveis da raquete
let xRaquete = 5;
let yRaquete = 150;
let larguraRaquete = 10;
let alturaRaquete = 90;

// Raquete do oponente
let xRaqueteOponente = 585;
let yRaqueteOponente = 150;
let velocidadeYOponente = 1;

//placar do jogo
let meusPontos = 0;
let pontosDoOponente = 0;

// sons do jogo
let raquetada;
let pontos;
let trilha;

// Chance de erro do adversario
let chanceDeErrar = 0;

function preload() {
  trilha = loadSound("trilha.mp3");
  pontos = loadSound("ponto.mp3");
  raquetada = loadSound("raquetada.mp3");
  
}

function setup() {
  createCanvas(600, 400);
  trilha.loop();
}

function draw() {
  background(0);
  mostraBolinha();
  movimentaBolinha();
  verificaColisaoBorda();
  criaRaquete(xRaquete, yRaquete);
  criaRaquete(xRaqueteOponente, yRaqueteOponente);
  movimentaMinhaRaquete();
  verificaColisaoRaquete();
  verificaColisaoRaqueteOponente();
  movimentaRaqueteOponente();
  incluiPlacar();
  marcaPonto();
  calculaChanceDeErrar();
}

function mostraBolinha() {
  circle(xBolinha, yBolinha, diametro);
}

function movimentaBolinha() {
  xBolinha += velocidadeXdaBolinha;
  yBolinha += velocidadeYdaBolinha;
}

function verificaColisaoBorda() {
   if(xBolinha + raio > width || xBolinha - raio < 0) {
    velocidadeXdaBolinha *= -1;
  }
   if(yBolinha + raio > height || yBolinha - raio < 0) {
    velocidadeYdaBolinha *= -1;
  }  
}

function criaRaquete(x, y) {
  rect(x, y, larguraRaquete, alturaRaquete);
}

function movimentaMinhaRaquete() {
  if (keyIsDown(UP_ARROW)) {
      yRaquete -= 10;
  }
  if (keyIsDown(DOWN_ARROW)) {
      yRaquete += 10;
  }
}

function verificaColisaoRaquete() {
    if (xBolinha - raio < xRaquete + larguraRaquete && yBolinha - raio < yRaquete + alturaRaquete && yBolinha + raio > yRaquete) {
        velocidadeXdaBolinha *= -1;
        raquetada.play();
    }
}

function verificaColisaoRaqueteOponente() {
    if (xBolinha + raio > xRaqueteOponente + larguraRaquete && yBolinha + raio > yRaqueteOponente - alturaRaquete && yBolinha - raio > yRaqueteOponente) {
        velocidadeXdaBolinha *= -1;
        raquetada.play();
    }
}

function movimentaRaqueteOponente() {
    velocidadeYOponente = yBolinha - yRaqueteOponente - larguraRaquete / 2 - 30;
    yRaqueteOponente += velocidadeYOponente + chanceDeErrar
  calculaChanceDeErrar()
}

function incluiPlacar() {
    stroke(255);
    textAlign(CENTER);
    textSize(16);
    fill(color(255, 140, 0));
    rect(200, 10, 40, 20);
    fill(255);
    text(meusPontos, 220, 26);
    fill(color(255, 140, 0));
    rect(400, 10, 40, 20);
    fill(255);
    text(pontosDoOponente, 420, 26);
}

function marcaPonto() {
    if (xBolinha > 590) {
        meusPontos += 1;
        pontos.play();
    }
    if (xBolinha < 10) {
        pontosDoOponente += 1;
        pontos.play();
    }
}

function calculaChanceDeErrar() {
  if (pontosDoOponente >= meusPontos) {
    chanceDeErrar += 1
    if (chanceDeErrar >= 39){
    chanceDeErrar = 40
    }
  } else {
    chanceDeErrar -= 1
    if (chanceDeErrar <= 35){
    chanceDeErrar = 35
    }
  }
}
