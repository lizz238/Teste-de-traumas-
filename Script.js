const perguntasInfancia = [
  "Algumas lembranças da infância ainda despertam emoções fortes em você?",
  "Você evita pensar ou falar sobre determinadas experiências da infância?",
  "Situações atuais fazem você se lembrar de experiências difíceis do passado?",
  "Você sente tristeza, raiva ou medo ao recordar determinadas situações?",
  "Algumas lembranças ainda interferem no seu bem-estar?",
  "Você tem dificuldade para confiar completamente nas pessoas?",
  "Você costuma ter medo de ser abandonado(a) ou rejeitado(a)?",
  "Você sente dificuldade para estabelecer limites?",
  "Você fica preocupado(a) em decepcionar outras pessoas?",
  "Experiências passadas influenciam seus relacionamentos atuais?",
  "Você costuma ser muito crítico(a) consigo mesmo(a)?",
  "Às vezes sente que não é bom/boa o suficiente?",
  "Você sente dificuldade para reconhecer suas qualidades?",
  "Você costuma sentir culpa por coisas que não estão totalmente sob seu controle?",
  "Comentários ou críticas afetam muito a forma como você se enxerga?",
  "Conflitos provocam uma reação emocional muito intensa?",
  "Você tem dificuldade para relaxar quando está sob pressão?",
  "Algumas situações fazem você ficar constantemente em alerta?",
  "Você tem dificuldade para controlar suas emoções quando está muito estressado(a)?",
  "Experiências difíceis influenciam suas reações diante de problemas atuais?"
];

let perguntaAtual = 0;
let pontuacao = 0;
let testeAtual = perguntasInfancia;

function esconderTelas() {
  document.querySelectorAll(".tela").forEach(function(tela) {
    tela.classList.remove("ativa");
  });
}

function mostrarTestes() {
  esconderTelas();
  document.getElementById("testes").classList.add("ativa");
}

function voltarInicio() {
  esconderTelas();
  document.getElementById("inicio").classList.add("ativa");
}

function iniciarTeste(tipo) {
  perguntaAtual = 0;
  pontuacao = 0;
  testeAtual = perguntasInfancia;

  esconderTelas();
  document.getElementById("pergunta").classList.add("ativa");

  mostrarPergunta();
}

function mostrarPergunta() {
  document.getElementById("numeroPergunta").textContent =
    perguntaAtual + 1;

  document.getElementById("textoPergunta").textContent =
    testeAtual[perguntaAtual];

  document.getElementById("barraProgresso").style.width =
    ((perguntaAtual + 1) / testeAtual.length * 100) + "%";
}

function responder(pontos) {
  pontuacao += pontos;

  if (perguntaAtual < testeAtual.length - 1) {
    perguntaAtual++;
    mostrarPergunta();
  } else {
    mostrarResultado();
  }
}

function mostrarResultado() {
  esconderTelas();
  document.getElementById("resultado").classList.add("ativa");

  let titulo;

  if (pontuacao <= 20) {
    titulo = "Baixo impacto relatado";
  } else if (pontuacao <= 40) {
    titulo = "Impacto moderado";
  } else if (pontuacao <= 60) {
    titulo = "Impacto elevado";
  } else {
    titulo = "Impacto muito elevado";
  }

  document.getElementById("resultadoTitulo").textContent = titulo;

  document.getElementById("resultadoTexto").textContent =
    "Pontuação: " + pontuacao + " de 80. Este resultado é educativo e não representa um diagnóstico.";
}
