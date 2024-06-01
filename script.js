const messageFlorian = document.querySelector(".florian-12");
const bouton = document.querySelector("#bouton");
const fermerFlorian = document.querySelector("#fermer-florian");

bouton.addEventListener("click", () => {
  messageFlorian.classList.toggle("visible");
});

fermerFlorian.addEventListener("click", () => {
  messageFlorian.classList.toggle("visible");
});
