let musique = document.getElementById("myAudio");
// console.log(musique);

let bouton = document.getElementById("bouton");
bouton.addEventListener("click", () => {
  // console.log(bouton);
  musique.play();
});

let boutonPause = document.getElementById("bouton-pause");
boutonPause.addEventListener("click", () => {
  musique.pause();
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

const reponse = document.querySelector(".reponse");
const monfils = document.querySelector(".monfils");
const reponseFermer = document.querySelector(".reponse-fermer");

monfils.addEventListener("click", () => {
  reponse.classList.toggle("visible");
});

reponseFermer.addEventListener("click", () => {
  reponse.classList.toggle("visible");
});

// fonction login à répéter

document.addEventListener("DOMContentLoaded", () => {
  const form = document.querySelector("#login-index");
  const inputField = document.querySelector(".password-field");
  const answer = "Sapé comme jamais";

  form.addEventListener("submit", (event) => {
    event.preventDefault();

    if (inputField.value === answer) {
      window.location.href = "graphiste.html";
    } else {
      alert("le mot de passe est erroné");
    }
  });
});

console.log(
  "clique sur le bouton voir le profil de l'enfant de l'homme qui est le père de ton fils, du coup sachant que ton fils est le tien, que l'homme est le grand père de ton fils, et que tu es un homme. J'en déduis que tu devrais etre le fils du grand père de ton fils, je dirais donc que l'homme est ton père et que tu es son fils"
);
