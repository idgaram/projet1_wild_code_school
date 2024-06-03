let musique = document.getElementById("myAudioPoussin");
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