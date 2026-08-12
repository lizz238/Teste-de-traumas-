const perguntasInfancia = [
  "Algumas lembranças da infância ainda despertam emoções fortes em você?",
  "Você evita pensar ou falar sobre determinadas experiências da infância?",
  "Situações atuais às vezes fazem você se lembrar de experiências difíceis do passado?",
  "Você sente tristeza, raiva ou medo quando recorda determinadas situações da infância?",
  "Algumas lembranças do passado ainda interferem no seu bem-estar atualmente?",
  "Você tem dificuldade para confiar completamente nas pessoas?",
  "Você costuma ter medo de ser abandonado(a) ou rejeitado(a)?",
  "Você sente dificuldade para estabelecer limites nos relacionamentos?",
  "Você fica muito preocupado(a) com a possibilidade de decepcionar outras pessoas?",
  "Experiências passadas influenciam a maneira como você se relaciona atualmente?",
  "Você costuma ser muito crítico(a) consigo mesmo(a)?",
  "Às vezes sente que não é bom/boa o suficiente?",
  "Você sente dificuldade para reconhecer suas próprias qualidades?",
  "Você costuma sentir culpa por coisas que não estão totalmente sob seu controle?",
  "Comentários ou críticas podem afetar muito a forma como você se enxerga?",
  "Situações de conflito fazem você sentir uma reação emocional muito intensa?",
  "Você tem dificuldade para relaxar quando está sob pressão?",
  "Algumas situações fazem você ficar constantemente em estado de alerta?",
  "Você costuma ter dificuldade para controlar suas emoções quando está muito estressado(a)?",
  "Experiências difíceis do passado parecem influenciar suas reações diante de problemas atuais?"
];

let perguntaAtual = 0;
let pontuacao = 0;

function mostrarTestes() {
  esconderTelas();
  document.getElementById("testes").classList.add("ativa");
}

function voltarInicio() {
  esconderTelas();
  document.getElementById("inicio").classList.add("ativa");
}

function iniciarTeste() {
  perguntaAtual = 0;
  pontuacao = 0;

  esconderTelas();
  document.getElementById("pergunta").classList.add("ativa");

  mostrarPergunta();
}

function mostrarPergunta() {
  document.getElementById("numeroPergunta").textContent =
    perguntaAtual + 1;

  document.getElementById("textoPergunta").textContent =
    perguntasInfancia[perguntaAtual];

  document.getElementById("barraProgresso").style.width =
    ((perguntaAtual + 1) / perguntasInfancia.length * 100) + "%";
}

function responder(pontos) {
  pontuacao += pontos;

  if (perguntaAtual < perguntasInfancia.length - 1) {
    perguntaAtual++;
    mostrarPergunta();
  } else {
    mostrarResultado();
  }
}

function mostrarResultado() {
  esconderTelas();

  document.getElementById("resultado").classList.add("ativa");

  let titulo = "";
  let mensagem = "";

  if (pontuacao <= 20) {
    titulo = "Baixo impacto relatado";
    mensagem =
      "Suas respostas indicam poucos sinais de impacto emocional neste questionário.";
  } else if (pontuacao <= 40) {
    titulo = "Impacto moderado";
    mensagem =
      "Suas respostas indicam alguns aspectos que podem merecer atenção e reflexão.";
  } else if (pontuacao <= 60) {
    titulo = "Impacto elevado";
    mensagem =
      "Suas respostas indicam vários aspectos que podem estar afetando seu bem-estar.";
  } else {
    titulo = "Impacto muito elevado";
    mensagem =
      "Suas respostas indicam um nível elevado de impacto neste questionário.";
  }

  document.getElementById("resultadoTitulo").textContent = titulo;

  document.getElementById("resultadoTexto").textContent =
    mensagem + " Pontuação: " + pontuacao + " de 80.";
}

function esconderTelas() {
  document.querySelectorAll(".tela").forEach(tela => {
    tela.classList.remove("ativa");
  });
}
