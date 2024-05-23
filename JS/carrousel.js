(function () {
  let carrousel = document.querySelector(".carrousel");
  let carrousel__x = document.querySelector(".carrousel__x");
  let galerie = document.querySelector(".galerie");
  let carrousel__figure = document.querySelector(".carrousel__figure");
  let galerie_img = galerie.querySelectorAll("img");
  let index = 0;

  for (const elm of galerie_img) {
    creer_image_carrousel(index, elm);
    creer_radio_carrousel(index);

    elm.addEventListener("click", function () {
      carrousel.classList.add("carrousel--ouvrir");
      document.querySelector(`.carrousel__radio[data-index="${index}"]`).checked = true;
      update_carrousel(index);
    });

    index = index + 1;
  }

  // Fonction pour fermer le carrousel lorsqu'on clique à l'extérieur de celui-ci
  function fermerCarrouselSiExterieur(event) {
    if (!carrousel.contains(event.target) && !event.target.classList.contains('carrousel__x')) {
      carrousel.classList.remove('carrousel--ouvrir');
    }
  }

  // Ajouter un gestionnaire d'événements pour écouter les clics sur l'ensemble du document
  document.addEventListener('mousedown', fermerCarrouselSiExterieur);

  function creer_image_carrousel(index, elm) {
    let carrousel__img = document.createElement("img");
    carrousel__img.classList.add("carrousel__img");
    carrousel__img.dataset.index = index;
    carrousel__img.src = elm.src;
    carrousel__figure.appendChild(carrousel__img);
    if (index !== 0) {
      carrousel__img.style.opacity = 0;
    }
  }

  function creer_radio_carrousel(index) {
    let carrousel__radio = document.createElement("input");
    carrousel__radio.type = "radio";
    carrousel__radio.name = "carrousel__radio";
    carrousel__radio.dataset.index = index;
    carrousel__radio.classList.add("carrousel__radio");

    carrousel__radio.addEventListener("change", function (e) {
      let selectedIndex = parseInt(e.target.dataset.index);
      update_carrousel(selectedIndex);
    });

    let carrousel__form = document.querySelector(".carrousel__form");
    carrousel__form.appendChild(carrousel__radio);
  }

  function update_carrousel(selectedIndex) {
    let images = document.querySelectorAll(".carrousel__img");
    images.forEach((img, idx) => {
      img.style.opacity = idx === selectedIndex ? 1 : 0;
    });
  }

  function next_image() {
    let currentIndex = Array.from(document.querySelectorAll(".carrousel__radio"))
      .findIndex(radio => radio.checked);
    let nextIndex = (currentIndex + 1) % galerie_img.length;
    document.querySelector(`.carrousel__radio[data-index="${nextIndex}"]`).checked = true;
    update_carrousel(nextIndex);
  }

  function prev_image() {
    let currentIndex = Array.from(document.querySelectorAll(".carrousel__radio"))
      .findIndex(radio => radio.checked);
    let prevIndex = (currentIndex - 1 + galerie_img.length) % galerie_img.length;
    document.querySelector(`.carrousel__radio[data-index="${prevIndex}"]`).checked = true;
    update_carrousel(prevIndex);
  }

  carrousel__x.addEventListener("mousedown", function () {
    carrousel.classList.remove("carrousel--ouvrir");
  });

  document.querySelector(".carrousel__prev").addEventListener("click", prev_image);
  document.querySelector(".carrousel__next").addEventListener("click", next_image);
})();
