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
let testeAtual = perguntasInfancia;
function mostrarTestes() {
  esconderTelas();
  document.getElementById("testes").classList.add("ativa");
}

function voltarInicio() {
  esconderTelas();
  document.getElementById("inicio").classList.add("ativa");
}

function iniciarTeste(tipo) {if (tipo === "relacionamentos") {
  testeAtual = perguntasRelacionamentos;
}

if (tipo === "autoestima") {
  testeAtual = perguntasAutoestima;
}

if (tipo === "ansiedade") {
  testeAtual = perguntasAnsiedade;
}

if (tipo === "bemestar") {
  testeAtual = perguntasBemEstar;
}
  perguntaAtual = 0;
  pontuacao = 0;

  if (tipo === "impacto") {
    testeAtual = perguntasImpacto;const perguntasRelacionamentos = [
  "Você tem dificuldade para confiar nas pessoas?",
  "Fica preocupado(a) quando alguém importante demora para responder?",
  "Tem medo de ser abandonado(a) por pessoas próximas?",
  "Você costuma esconder suas necessidades para evitar conflitos?",
  "Tem dificuldade para dizer não quando não quer fazer algo?",
  "Sente necessidade de agradar os outros para manter a relação?",
  "Críticas de pessoas importantes afetam muito você?",
  "Você costuma interpretar pequenos afastamentos como sinal de rejeição?",
  "Tem dificuldade para estabelecer limites claros?",
  "Costuma assumir responsabilidade pelos sentimentos das outras pessoas?",
  "Você permanece em relações que fazem você se sentir mal por medo de ficar sozinho(a)?",
  "Tem dificuldade para expressar quando alguém ultrapassa seus limites?",
  "Você se preocupa excessivamente em decepcionar pessoas próximas?",
  "Quando existe um conflito, costuma pensar que a culpa é sua?",
  "Tem dificuldade para aceitar elogios ou demonstrações de carinho?",
  "Você sente insegurança quando percebe mudanças no comportamento de alguém próximo?",
  "Costuma evitar conversas importantes por medo da reação da outra pessoa?",
  "Tem dificuldade para se sentir completamente seguro(a) emocionalmente em um relacionamento?",
  "Experiências anteriores influenciam sua maneira de confiar atualmente?",
  "Você gostaria de melhorar a forma como estabelece limites e se relaciona?"
];

const perguntasAutoestima = [
  "Você costuma duvidar da sua própria capacidade?",
  "Tem dificuldade para reconhecer coisas boas que faz?",
  "Costuma se comparar com outras pessoas?",
  "Sente que precisa ser perfeito(a) para se sentir satisfeito(a)?",
  "Uma crítica pode fazer você questionar seu próprio valor?",
  "Você costuma dar mais importância aos seus erros do que aos seus acertos?",
  "Tem dificuldade para aceitar elogios?",
  "Sente vergonha de pedir ajuda quando precisa?",
  "Costuma pensar que outras pessoas são melhores ou mais capazes que você?",
  "Você se cobra muito quando comete um erro?",
  "Tem dificuldade para reconhecer seus próprios limites?",
  "Às vezes evita oportunidades por medo de não ser capaz?",
  "Você sente que precisa da aprovação dos outros para se sentir bem consigo mesmo(a)?",
  "Costuma minimizar suas próprias conquistas?",
  "Fica muito preocupado(a) com a opinião das outras pessoas?",
  "Tem dificuldade para falar sobre suas qualidades?",
  "Você costuma pensar negativamente sobre si mesmo(a)?",
  "Sente que precisa provar seu valor para outras pessoas?",
  "Tem dificuldade para tratar a si mesmo(a) com compreensão?",
  "Você gostaria de desenvolver uma visão mais positiva e realista sobre si mesmo(a)?"
];

const perguntasAnsiedade = [
  "Você sente preocupação mesmo quando não existe um problema imediato?",
  "Tem dificuldade para desligar a mente quando tenta descansar?",
  "Costuma imaginar diferentes coisas que podem dar errado?",
  "Sente-se tenso(a) durante situações de pressão?",
  "Tem dificuldade para relaxar depois de um dia estressante?",
  "Você fica pensando repetidamente em problemas que já aconteceram?",
  "Pequenas responsabilidades podem fazer você se sentir sobrecarregado(a)?",
  "Tem dificuldade para se concentrar quando está preocupado(a)?",
  "Você sente que está sempre precisando resolver alguma coisa?",
  "Mudanças inesperadas deixam você muito desconfortável?",
  "Costuma adiar tarefas porque se sente sobrecarregado(a)?",
  "Tem dificuldade para dormir porque fica pensando em problemas?",
  "Você percebe que seu corpo fica tenso quando está sob pressão?",
  "Costuma ficar preocupado(a) com coisas que ainda nem aconteceram?",
  "Quando enfrenta um problema, sente dificuldade para pensar com tranquilidade?",
  "Você sente que precisa estar sempre preparado(a) para algo dar errado?",
  "Tem dificuldade para fazer pausas sem se sentir culpado(a)?",
  "Situações de muita pressão fazem você perder a concentração?",
  "Depois de um período estressante, demora para recuperar sua tranquilidade?",
  "Você gostaria de aprender maneiras melhores de lidar com preocupação e estresse?"
];

const perguntasBemEstar = [
  "Você consegue perceber quando precisa descansar emocionalmente?",
  "Tem momentos em que sente dificuldade para aproveitar coisas que normalmente gosta?",
  "Consegue conversar com alguém quando está passando por uma situação difícil?",
  "Você sente que tem pessoas em quem pode confiar?",
  "Tem dificuldade para encontrar momentos de tranquilidade durante sua rotina?",
  "Consegue reconhecer quando uma situação está ultrapassando seus limites?",
  "Costuma reservar algum tempo para cuidar de si?",
  "Sente que sua rotina atual está afetando seu equilíbrio emocional?",
  "Consegue se recuperar emocionalmente depois de um dia difícil?",
  "Você sente dificuldade para manter uma rotina saudável quando está sob pressão?",
  "Consegue identificar coisas que ajudam você a se sentir melhor?",
  "Tem dificuldade para pedir apoio quando realmente precisa?",
  "Você sente que suas responsabilidades deixam pouco espaço para você?",
  "Consegue estabelecer limites entre suas necessidades e as expectativas dos outros?",
  "Tem momentos em que se sente emocionalmente desconectado(a)?",
  "Você consegue reconhecer pequenas conquistas do seu dia a dia?",
  "Sente que precisa melhorar a maneira como cuida do seu bem-estar?",
  "Consegue falar sobre seus sentimentos sem sentir que está sendo julgado(a)?",
  "Você sente que gostaria de compreender melhor suas emoções?",
  "Gostaria de desenvolver hábitos que contribuam para seu bem-estar?"
];
  } else {
    testeAtual.length

  esconderTelas();
  document.getElementById("pergunta").classList.add("ativa");

  mostrarPergunta();
}

  esconderTelas();
  document.getElementById("pergunta").classList.add("ativa");

  mostrarPergunta();
}

function mostrarPergunta() {
  document.getElementById("numeroPergunta").textContent =
    perguntaAtual + 1;

  document.getElementById("textoPergunta").textContent =
    testeAtual[perguntaAtual]
const perguntasImpacto = [
  "Você percebe mudanças fortes no seu humor sem saber exatamente o motivo?",
  "Pequenas situações às vezes provocam uma reação emocional maior do que você esperava?",
  "Você costuma guardar sentimentos para não demonstrá-los aos outros?",
  "Tem dificuldade para falar sobre aquilo que está sentindo?",
  "Você sente que algumas emoções permanecem por muito tempo?",
  "Quando algo dá errado, você costuma pensar repetidamente sobre o acontecimento?",
  "Você se sente emocionalmente esgotado(a) com facilidade?",
  "Situações de rejeição afetam bastante seu estado emocional?",
  "Você sente dificuldade para lidar com mudanças inesperadas?",
  "Costuma imaginar que algo ruim pode acontecer mesmo quando não existe uma ameaça clara?",
  "Você sente necessidade de controlar determinadas situações para conseguir ficar tranquilo(a)?",
  "Depois de uma situação estressante, demora para voltar ao seu estado normal?",
  "Você costuma esconder o que sente para evitar conflitos?",
  "Tem dificuldade para identificar exatamente o que está sentindo?",
  "Você percebe que determinadas situações despertam emoções muito intensas?",
  "Quando está emocionalmente abalado(a), tem dificuldade para se concentrar?",
  "Você costuma se cobrar para superar rapidamente situações que lhe fizeram mal?",
  "É difícil pedir ajuda quando você está passando por um momento emocional complicado?",
  "Você sente que experiências passadas influenciam suas emoções no presente?",
  "Você gostaria de compreender melhor suas próprias reações emocionais?"
];
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
