const perguntas = [
  "Algumas lembranças da infância ainda despertam emoções fortes em você?",
  "Você evita pensar ou falar sobre determinadas experiências?",
  "Situações atuais fazem você lembrar de experiências difíceis?",
  "Você sente emoções fortes quando lembra de determinadas situações?",
  "Algumas lembranças ainda interferem no seu bem-estar?"
];

let perguntaAtual = 0;
let pontuacao = 0;

const inicio = document.getElementById("inicio");
const testes = document.getElementById("testes");
const pergunta = document.getElementById("pergunta");
const resultado = document.getElementById("resultado");

function mostrar(tela) {
  inicio.classList.remove("ativa");
  testes.classList.remove("ativa");
  pergunta.classList.remove("ativa");
  resultado.classList.remove("ativa");

  tela.classList.add("ativa");
}

document.getElementById("btnComecar").addEventListener("click", function () {
  mostrar(testes);
});

document.getElementById("btnVoltar").addEventListener("click", function () {
  mostrar(inicio);
});

document.getElementById("btnInfancia").addEventListener("click", function () {
  perguntaAtual = 0;
  pontuacao = 0;

  mostrar(pergunta);
  atualizarPergunta();
});

document.querySelectorAll(".resposta").forEach(function (botao) {

  botao.addEventListener("click", function () {

    pontuacao += Number(botao.dataset.pontos);

    perguntaAtual++;

    if (perguntaAtual < perguntas.length) {
      atualizarPergunta();
    } else {
      mostrarResultado();
    }

  });

});

function atualizarPergunta() {

  document.getElementById("progresso").textContent =
    "Pergunta " + (perguntaAtual + 1) + " de " + perguntas.length;

  document.getElementById("textoPergunta").textContent =
    perguntas[perguntaAtual];
}

function mostrarResultado() {

  mostrar(resultado);

  document.getElementById("resultadoTexto").textContent =
    "Você marcou " + pontuacao + " pontos neste teste educativo.";
}

document.getElementById("btnInicio").addEventListener("click", function () {
  mostrar(inicio);
});
