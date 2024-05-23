(function () {
  let carrousel = document.querySelector(".carrousel");
  let bouton = document.querySelector(".bouton__ouvrir");
  let carrousel__x = document.querySelector(".carrousel__x");

  let galerie = document.querySelector(".galerie");
  let carrousel__figure = document.querySelector(".carrousel__figure");

  let galerie_img = galerie.querySelectorAll("img");
  let index = 0;

  for (const elm of galerie_img) {
    creer_image_carrousel(index, elm);
    creer_radio_carrousel(index);
    index = index + 1;
  }

  /**
   * Creer une image dans le carrousel à partir d'une image de la galerie
   * @param {*} index numero de l'image
   * @param {*} elm image de la galerie
   */
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

  /**
   * Creer les radio button dans le carrousel
   * @param {*} index numero du radio boutton
   */
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

  bouton.addEventListener("mousedown", function () {
    carrousel.classList.add("carrousel--ouvrir");
  });
  
  carrousel__x.addEventListener("mousedown", function () {
    carrousel.classList.remove("carrousel--ouvrir");
  });

  document.querySelector(".carrousel__prev").addEventListener("click", prev_image);
  document.querySelector(".carrousel__next").addEventListener("click", next_image);
})();
