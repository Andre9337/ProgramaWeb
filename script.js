// Seleciona os botões
const gatoBtn = document.getElementById("gato-btn");
const cachorroBtn = document.getElementById("cachorro-btn");

// Adiciona um listener de clique aos botões
gatoBtn.addEventListener("click", mostrarGato);
cachorroBtn.addEventListener("click", mostrarCachorro);

function mostrarGato() {
  // Navega para a página de gato
  window.location.href = "gato.html";
}

function mostrarCachorro() {
  // Navega para a página de cachorro
  window.location.href = "cachorro.html";
}
