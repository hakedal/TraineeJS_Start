import "./styles.css";

const result = document.getElementById("resultat");
const numBlipp = document.getElementById("blipp");
const numBlopp = document.getElementById("blopp");

window.cleanup = function () {
  result.innerText = "";
  numBlipp.value = 3;
  numBlopp.value = 5;
};

window.allAtOnce = function () {
  result.innerText = "50 på en gang";
};

window.oneByOne = function () {
  result.innerText = "En av gangen";
};
