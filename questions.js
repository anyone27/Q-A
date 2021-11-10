const plus1 = document.getElementById("plus1");
const plus2 = document.getElementById("plus2");
const plus3 = document.getElementById("plus3");

const answer1 = document.getElementById("a1");
const answer2 = document.getElementById("a2");
const answer3 = document.getElementById("a3");

const allAnswers = document.querySelectorAll(".answers");

plus1.addEventListener("click", function() {
    answer1.classList.toggle("show-answer");
    answer2.classList.remove("show-answer");
    answer3.classList.remove("show-answer");
})

plus2.addEventListener("click", function() {
    answer1.classList.remove("show-answer");
    answer2.classList.toggle("show-answer");
    answer3.classList.remove("show-answer");
})

plus3.addEventListener("click", function() {
    answer1.classList.remove("show-answer");
    answer2.classList.remove("show-answer");
    answer3.classList.toggle("show-answer");
})