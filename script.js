const messageFlorian = document.querySelector(".florian-12");
const bouton = document.querySelector("#bouton");
const fermerFlorian = document.querySelector("#fermer-florian");

bouton.addEventListener("click", () => {
  messageFlorian.classList.toggle("visible");
});

fermerFlorian.addEventListener("click", () => {
  messageFlorian.classList.toggle("visible");
});

const connectionPopup = document.querySelector(".connection");
const boutonLogin = document.querySelector("#identify");
const connectionFermer = document.querySelector("#connection-fermer");
