(function () {
  //console.log('debut du carrousel');
  let carrousel = document.querySelector(".carrousel");
  //console.log("carrousel =" + carrousel.tagName);
  let bouton = document.querySelector(".bouton__ouvrir");
  let carrousel__x = document.querySelector(".carrousel__x");

  let galerie = document.querySelector(".galerie");
  //let galerie_img = document.querySelector('img'); // premiere image seulement


  let carrousel__figure = document.querySelector(".carrousel__figure");

  let galerie_img = document.querySelectorAll("img");

  for (const elm of galerie_img) {
    let carrousel__img = document.createElement("img");
    carrousel__img.classList.add("carrousel__img");
    console.log(elm.src);
    carrousel__img.src = elm.src;
    console.log(carrousel__img.src);
    carrousel__figure.appendChild(carrousel__img);
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
