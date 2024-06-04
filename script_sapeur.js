let musique = document.getElementById("myAudio");
console.log(musique);

let bouton = document.getElementById("bouton");
bouton.addEventListener("click", () => {
  console.log(bouton);
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

// fonction login à répéter

document.addEventListener("DOMContentLoaded", () => {
  const form = document.querySelector("#login-index");
  const inputField = document.querySelector(".password-field");
  const answer = "abdou123456789";

  form.addEventListener("submit", (event) => {
    event.preventDefault();

    if (inputField.value === answer) {
      window.location.href = "sapeur.html";
    } else {
      alert("le mot de passe est erroné");
    }
  });
});

console.log(
  "clique sur le bouton follow de l'enfant de l'homme qui est le père de ton fils, du coup sachant que ton fils est le tien, que l'homme est le grand père de ton fils, et que tu es un homme. J'en déduis que tu devrait etre le fils du grand père de ton fils, je dirait donc que l'homme est ton père et que tu es son fils"
);
