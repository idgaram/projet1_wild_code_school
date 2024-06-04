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

// function playAudio() {
//   musique.play();
//   //   alert("click");
// }

// function pauseAudio() {
//   x.pause();
// }
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
