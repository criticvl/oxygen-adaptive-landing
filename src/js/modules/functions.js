export function isWebp() {
  function testWebP(callback) {
    var webP = new Image();
    webP.onload = webP.onerror = function () {
      callback(webP.height == 2);
    };
    webP.src =
      "data:image/webp;base64,UklGRjoAAABXRUJQVlA4IC4AAACyAgCdASoCAAIALmk0mk0iIiIiIgBoSygABc6WWgAA/veff/0PP8bA//LwYAAA";
  }

  testWebP(function (support) {
    if (support == true) {
      document.querySelector("html").classList.add("webp");
    } else {
      document.querySelector("html").classList.add("no-webp");
    }
  });
}

export function scrollCard(direction) {
  var card_width = parseFloat(
    getComputedStyle(
      document.getElementsByClassName("cards-item")[0]
    ).getPropertyValue("width")
  );
  document.getElementById("card-container").scrollLeft +=
    direction * card_width;
}

document.getElementById("arrow-left").addEventListener("click", function () {
  scrollCard(-1);
});

document.getElementById("arrow-right").addEventListener("click", function () {
  scrollCard(1);
});
