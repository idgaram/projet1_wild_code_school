let musique = document.getElementById("myAudioPoussin");
// console.log(musique);

let bouton = document.getElementById("bouton");
bouton.addEventListener("click", () => {
  console.log(bouton);
  musique.play();
});

let boutonPause = document.getElementById("bouton-pause");
boutonPause.addEventListener("click", () => {
  musique.pause();
});

const textFermierUn =
  "Il y a un poissonnier nommé Blanc, un charcutier nommé Noir et un boucher nommé Roux. Alors qu’ils étaient en train de ranger leurs marchandises, l’un d’eux dit";
const textFermierDeux =
  "Mes cheveux sont noirs, les vôtres sont respectivement roux et blancs, mais aucun de nous trois n’a une couleur de cheveux correspondant à son nom. C’est vrai, répond Blanc.";
const textFermierTrois = "Quelle est la couleur des cheveux du boucher ?";
const textFermierQuatre =
  "Tu as vu les expériences d’Abdou ? il a du avoir beaucoup de responsibilité";

// console.log(textFermierUn);
// console.log(textFermierDeux);
// console.log(textFermierTrois);
console.log(
  "Sur les autres page consultées, il y a un poissonnier nommé Blanc, un charcutier nommé Noir et un boucher nommé Roux. Alors qu’ils étaient en train de ranger leurs marchandises, l’un d’eux dit :« Mes cheveux sont noirs, les vôtres sont respectivement roux et blancs, mais aucun de nous trois n’a une couleur de cheveux correspondant à son nom. C’est vrai, répond Blanc.Quelle est la couleur des cheveux du boucher ?"
);
console.log(textFermierQuatre);

const connectionPopup = document.querySelector(".connection");
const boutonLogin = document.querySelector("#identify");
const connectionFermer = document.querySelector(".connection-fermer");

boutonLogin.addEventListener("click", () => {
  connectionPopup.classList.toggle("visible");
});

connectionFermer.addEventListener("click", () => {
  connectionPopup.classList.toggle("visible");
});

// console.log(
//   "Sur les autres page consultées, il y a un poissonnier nommé Blanc, un charcutier nommé Noir et un boucher nommé Roux. Alors qu’ils étaient en train de ranger leurs marchandises, l’un d’eux dit :« Mes cheveux sont noirs, les vôtres sont respectivement roux et blancs, mais aucun de nous trois n’a une couleur de cheveux correspondant à son nom. C’est vrai, répond Blanc.Quelle est la couleur des cheveux du boucher ?"
// );

// fonction login à répéter
document.addEventListener("DOMContentLoaded", () => {
  const form = document.querySelector("#login-index");
  const inputField = document.querySelector(".password-field");
  const answer = "blanc1958";

  form.addEventListener("submit", (event) => {
    event.preventDefault();

    if (inputField.value === answer) {
      window.location.href = "sapeur.html";
    } else {
      alert("le mot de passe est erroné");
    }
  });
});
