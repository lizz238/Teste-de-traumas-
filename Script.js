function mostrarTestes() {
  document.getElementById("inicio").classList.remove("ativa");
  document.getElementById("testes").classList.add("ativa");
}

function voltarInicio() {
  document.querySelectorAll(".tela").forEach(tela => {
    tela.classList.remove("ativa");
  });

  document.getElementById("inicio").classList.add("ativa");
}

function iniciarTeste() {
  document.querySelectorAll(".tela").forEach(tela => {
    tela.classList.remove("ativa");
  });

  document.getElementById("pergunta").classList.add("ativa");
}

function responder(pontos) {
  console.log("Resposta escolhida:", pontos);

  document.querySelectorAll(".tela").forEach(tela => {
    tela.classList.remove("ativa");
  });

  document.getElementById("resultado").classList.add("ativa");
}
