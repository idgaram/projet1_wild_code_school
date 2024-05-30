let musique = document.getElementById("myAudio");
console.log(musique);

let bouton = document.getElementById("bouton");
bouton.addEventListener("click", () => {
  console.log(bouton);
  musique.play();
});

// function playAudio() {
//   musique.play();
//   //   alert("click");
// }

// function pauseAudio() {
//   x.pause();
// }
