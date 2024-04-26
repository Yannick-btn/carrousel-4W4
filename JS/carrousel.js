(function () {
  //console.log('debut du carrousel');
  let carrousel = document.querySelector(".carrousel");
  //console.log("carrousel =" + carrousel.tagName);
  let bouton = document.querySelector(".bouton__ouvrir");
  let carrousel__x = document.querySelector(".carrousel__x");

  let galerie = document.querySelector(".galerie");
  //let galerie_img = document.querySelector('img'); // premiere image seulement

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
    console.log(elm.src);
    carrousel__img.src = elm.src;
    console.log(carrousel__img.src);
    carrousel__figure.appendChild(carrousel__img);
  }


  /**
   * Creer les radio button dans le carrousel
   * @param {*} index numero du radio boutton
   */
  function creer_radio_carrousel(index) {
    // Créer un input radio
    let carrousel__radio = document.createElement("input");
    carrousel__radio.type = "radio";
    carrousel__radio.name = "carrousel__radio";
    carrousel__radio.dataset.index = index;

      // Ajouter une classe à l'input radio
      carrousel__radio.classList.add("carrousel__radio");
    
    // Ajouter un écouteur d'événements sur le changement
    carrousel__radio.addEventListener("change", function (e) {
      // Récupérer l'index de l'image sélectionnée
      let selectedIndex = parseInt(e.target.dataset.index);
      
      // Parcourir toutes les images du carrousel
      let images = document.querySelectorAll(".carrousel__img");
      images.forEach((img, idx) => {
        // Si l'index de l'image correspond à l'index sélectionné,
        // la rendre visible en mettant son opacité à 1, sinon la cacher.
        if (idx === selectedIndex) {
          img.style.opacity = 1;
        } else {
          img.style.opacity = 0;
        }
      });
    });
  
    // Ajouter le bouton radio au formulaire dans le carrousel
    let carrousel__form = document.querySelector(".carrousel__form");
    carrousel__form.appendChild(carrousel__radio);
  }
  

  bouton.addEventListener("mousedown", function () {
    carrousel.classList.add("carrousel--ouvrir");
    console.log("ouvrir");
  });
  carrousel__x.addEventListener("mousedown", function () {
    carrousel.classList.remove("carrousel--ouvrir");
    console.log("fermer");
  });
})();
