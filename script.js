const questions = [
  {
    question: "1.Which is the largest animal in world",
    answers: [
      { text: "Shark", correct: false },
      { text: "Blue Whale", correct: true },
      { text: "Elephant", correct: false },
      { text: "Giraffe", correct: false },
    ],
  },
  {
    question: "2.Rainbow consist of how many colours?",
    answers: [
      { text: "Two", correct: false },
      { text: "Five", correct: false },
      { text: "Seveen", correct: true },
      { text: "Nine", correct: false },
    ],
  },
  {
    question: "3.Baby frog is known as",
    answers: [
      { text: "Tadpole", correct: true },
      { text: "frog", correct: false },
      { text: "fish", correct: false },
      { text: "snile", correct: false },
    ],
  },
  {
    question: "4.Which animal is known as king of jungle",
    answers: [
      { text: "Tiger", correct: false },
      { text: "Cheetha", correct: false },
      { text: "Fox", correct: false },
      { text: "Lion", correct: true },
    ],
  },
  {
    question: "5.Which is the national Flower",
    answers: [
      { text: "Rose", correct: false },
      { text: "Lotus", correct: true },
      { text: "Jasmine", correct: false },
      { text: "Tulip", correct: false },
    ],
  },
];

let ques = document.querySelector(".ques");
let choicelist = document.querySelectorAll(".choicelist li");
let btnnxt = document.querySelector(".btn");
let modellayer = document.querySelector(".containermodel");
let model = document.querySelector(".correctmodel");
let modelbtn = document.querySelector(".correctmodel button");
let point = document.querySelector(".point");
let score = 0;
let p = 0;

let choice = Math.floor(Math.random() * 5 + 1);

for (let i = 0; i < choicelist.length; i++) {
  choicelist[i].addEventListener("click", () => {
    checkanswer(choicelist[i], i);
  });
}

let makequiz = function () {
  choice = Math.floor(Math.random() * 5 + 1);
  p = 1;
  ques.textContent = questions[choice - 1]["question"];
  for (let i = 0; i < 4; i++) {
    choicelist[i].textContent = questions[choice - 1]["answers"][i]["text"];
  }
  for (let i = 0; i < choicelist.length; i++) {
    if (choicelist[i].classList.contains("correct"))
      choicelist[i].classList.remove("correct");
    if (choicelist[i].classList.contains("wrong"))
      choicelist[i].classList.remove("wrong");
  }
};

let checkanswer = function (li, pos) {
  if (questions[choice - 1]["answers"][pos]["correct"]) {
    li.classList.add("correct");
    point.textContent = p;
    score += p;
    displaycrtmodel();
  } else {
    p = p == 1 ? 0.5 : p == 0.5 ? 0.25 : 0;
    li.classList.add("wrong");
  }
  console.log(score);
};

makequiz();
btnnxt.addEventListener("doubleclick", makequiz);
// document.querySelector("body").addEventListener("keypress", makequiz);

let displaycrtmodel = function () {
  modellayer.style.display = "flex";
  model.style.display = "block";
};

let closemodel = function () {
  modellayer.style.display = "none";
  model.style.display = "none";
};
modelbtn.addEventListener("click", closemodel);
modellayer.addEventListener("click", closemodel);
