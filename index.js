"use strict";

const articles = document.querySelectorAll("article");
const btnRating = document.querySelectorAll(".number");
const btnSubmit = document.querySelector(".btn-submit");
let ratingText = document.querySelector(".card-submit-rating span");

btnRating.forEach((num) => {
  num.addEventListener("click", () => {
    ratingText.textContent = num.textContent;
  });
});

btnSubmit.addEventListener("click", () => {
  articles.forEach((article) => {
    if (article.classList.contains("hide")) {
      article.classList.remove("hide");
    } else {
      article.classList.add("hide");
    }
  });
});
