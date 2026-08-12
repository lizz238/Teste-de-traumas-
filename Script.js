function mostrarTestes() {
  document.getElementById("inicio").classList.remove("ativa");
  document.getElementById("testes").classList.add("ativa");
}

function voltarInicio() {
  document.getElementById("testes").classList.remove("ativa");
  document.getElementById("inicio").classList.add("ativa");
}
