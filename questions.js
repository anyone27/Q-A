// Traversing the DOM

// const btns = document.querySelectorAll(".button");

// btns.forEach(function (btn) {
//     btn.addEventListener("click", function (e) {
//         btn.classList.toggle("fa-plus-square");
//         btn.classList.toggle("fa-minus-square");
//         const question = e.currentTarget.parentElement.parentElement.parentElement;
//         question.classList.toggle("show-answer")
//     })
    
// })

// Using Selectors inside the element

const questions = document.querySelectorAll(".question");

questions.forEach(function(question) {
    const btn = question.querySelector(".button");
    btn.addEventListener("click", function() {
        questions.forEach(function(item) {
            if(item !== question) {
                item.classList.remove("show-answer");
                item.querySelector(".button").classList.remove("fa-minus-square");
                item.querySelector(".button").classList.add("fa-plus-square");
            }
        })
        btn.classList.toggle("fa-plus-square");
        btn.classList.toggle("fa-minus-square");
        question.classList.toggle("show-answer");
    });
})