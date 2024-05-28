// Seleciona todos os elementos <li> dentro de um contêiner com a classe "navigation"
let list = document.querySelectorAll(".navigation li");

// Função para adicionar a classe "hovered" ao item atualmente selecionado
function activeLink() {
  // Remove a classe "hovered" de todos os itens da lista
  list.forEach((item) => {
    item.classList.remove("hovered");
  });
  // Adiciona a classe "hovered" ao item que disparou o evento
  this.classList.add("hovered");
}

// Adiciona um ouvinte de evento "mouseover" a cada item da lista
list.forEach((item) => item.addEventListener("mouseover", activeLink));

// Seleciona o elemento com a classe "toggle"
let toggle = document.querySelector(".toggle");
// Seleciona o contêiner com a classe "navigation"
let navigation = document.querySelector(".navigation");
// Seleciona o contêiner principal com a classe "main"
let main = document.querySelector(".main");

// Define uma função para alternar a classe "active" nos elementos selecionados
toggle.onclick = function () {
  // Alterna a classe "active" no contêiner de navegação
  navigation.classList.toggle("active");
  // Alterna a classe "active" no contêiner principal
  main.classList.toggle("active");
};


document.addEventListener("DOMContentLoaded", function() {
  const btnVerTodos = document.querySelector('.btn');
  const orderTable = document.getElementById('orderTable');

  btnVerTodos.addEventListener('click', function() {
      orderTable.classList.toggle('hidden');
  });
});