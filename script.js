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
const connectionFermer = document.querySelector(".connection-fermer");

boutonLogin.addEventListener("click", () => {
  connectionPopup.classList.toggle("visible");
});

connectionFermer.addEventListener("click", () => {
  connectionPopup.classList.toggle("visible");
});

const intro =
  "Salut c'est Flo je vais t'accompagner dans les méandres de la tête d'Abdou, pour continuer répond à l'énigme et tape ta réponse en cliquant sur se connecter ";
const textDevUn =
  "Qu'est-ce qui t'appartient mais que les autres utilisent plus que toi ?";
const textDevDeux =
  "Un fermier a 17 poulets, ils meurent tous sauf 9. Combien as-tu d’abonnés ?";

console.log(intro);
console.log(textDevUn);
console.log(textDevDeux);
