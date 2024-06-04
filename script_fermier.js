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

const textFermierUn = "Il y a un poissonnier nommé Blanc, un charcutier nommé Noir et un boucher nommé Roux. Alors qu’ils étaient en train de ranger leurs marchandises, l’un d’eux dit"
const textFermierDeux = "Mes cheveux sont noirs, les vôtres sont respectivement roux et blancs, mais aucun de nous trois n’a une couleur de cheveux correspondant à son nom. C’est vrai, répond Blanc."
const textFermierTrois = "Quelle est la couleur des cheveux du boucher ?"
const textFermierQuatre = "Tu as vu les expériences d’Abdou ? il a du avoir beaucoup de responsibilité "

console.log (textFermierUn)
console.log (textFermierDeux)
console.log (textFermierTrois)
console.log (textFermierQuatre)