console.log(
  "Whoa !La beauté de cette page réside dans l'harmonie impeccable entre le design visuel et l'ergonomie utilisateur. Dès l'instant où vous atterrissez sur cette page, vos yeux sont accueillis par une palette de couleurs apaisantes et modernes, où chaque teinte a été choisie pour créer une ambiance sereine et professionnelle. La typographie, avec ses polices raffinées et ses tailles variées, guide subtilement le regard à travers les sections, rendant la lecture agréable et fluide. Les images haute résolution sont soigneusement sélectionnées pour renforcer le message sans surcharger la vue, chaque photo et graphique étant parfaitement intégrés dans la structure de la page. Les espaces blancs sont utilisés avec une maîtrise exemplaire, permettant aux différents éléments de respirer et de se distinguer. Les menus de navigation sont simples mais sophistiqués, avec des animations discrètes qui ajoutent une touche de dynamisme sans distraire de l'essentiel. Les boutons d'appel à l'action sont clairement définis et placés stratégiquement pour encourager l'interaction sans forcer la main de l'utilisateur. En arrière-plan, des transitions fluides et des temps de chargement rapides assurent une expérience sans friction, rendant chaque visite mémorable. Cette page web n'est pas seulement un régal pour les yeux, mais aussi un modèle d'efficacité et de convivialité, démontrant comment une conception bien pensée peut transformer la navigation en ligne en un véritable plaisir.As- tu remarqué qu’une image peut en cacher une autre ? Tu devrais essayer sur toutes les merveilleuses personnalités d’Abdou."
);

const connectionPopup = document.querySelector(".connection");
const boutonLogin = document.querySelector("#identify");
const connectionFermer = document.querySelector(".connection-fermer");

boutonLogin.addEventListener("click", () => {
  connectionPopup.classList.toggle("visible");
});

connectionFermer.addEventListener("click", () => {
  connectionPopup.classList.toggle("visible");
});

const videoCache = document.querySelector(".video-cache");
const abdou = document.querySelector("#abdou");

// fonction login à répéter
document.addEventListener("DOMContentLoaded", () => {
  const form = document.querySelector("#login-index");
  const inputField = document.querySelector(".password-field");
  const answer = "azerty";

  form.addEventListener("submit", (event) => {
    event.preventDefault();
    videoCache.classList.toggle("visible");
    if (inputField.value === answer) {
      abdou.play();
    } else {
      alert("le mot de passe est erroné");
    }
  });
});
