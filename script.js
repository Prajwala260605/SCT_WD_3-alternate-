
const questions = [
  { question: "What is 2 + 2?", answers: ["3", "4", "5", "6"], correct: 1 },
  { question: "What is the capital of France?", answers: ["Berlin", "Madrid", "Paris", "Lisbon"], correct: 2 },
  { question: "Who wrote 'Macbeth'?", answers: ["Shakespeare", "Milton", "Wordsworth", "Keats"], correct: 0 },
  { question: "What planet is known as the Red Planet?", answers: ["Earth", "Mars", "Jupiter", "Saturn"], correct: 1 },
  { question: "What is the boiling point of water?", answers: ["90°C", "100°C", "110°C", "120°C"], correct: 1 },
  { question: "What is the largest mammal?", answers: ["Elephant", "Whale", "Hippo", "Giraffe"], correct: 1 },
  { question: "What gas do plants absorb?", answers: ["Oxygen", "Carbon Dioxide", "Nitrogen", "Hydrogen"], correct: 1 },
  { question: "Which is the longest river?", answers: ["Nile", "Amazon", "Yangtze", "Ganga"], correct: 0 },
  { question: "Which continent is Egypt in?", answers: ["Asia", "Europe", "Africa", "America"], correct: 2 },
  { question: "Who invented the light bulb?", answers: ["Edison", "Tesla", "Newton", "Einstein"], correct: 0 }
];

let currentQuestion = 0;
let score = 0;

const questionContainer = document.getElementById('question-container');
const answersContainer = document.getElementById('answers-container');
const nextBtn = document.getElementById('next-btn');
const scoreDisplay = document.getElementById('score');

function showQuestion() {
  questionContainer.innerHTML = questions[currentQuestion].question;
  answersContainer.innerHTML = "";
  questions[currentQuestion].answers.forEach((answer, index) => {
    const btn = document.createElement("button");
    btn.innerText = answer;
    btn.addEventListener("click", () => checkAnswer(index));
    answersContainer.appendChild(btn);
  });
}

function checkAnswer(index) {
  if (index === questions[currentQuestion].correct) {
    score++;
  }
  currentQuestion++;
  if (currentQuestion < questions.length) {
    showQuestion();
  } else {
    showScore();
  }
}

function showScore() {
  questionContainer.innerHTML = "Quiz Completed!";
  answersContainer.innerHTML = "";
  nextBtn.style.display = "none";
  scoreDisplay.innerText = `Your Score: ${score} / ${questions.length}`;
}

nextBtn.addEventListener("click", () => {
  showQuestion();
  nextBtn.style.display = "none";
});

showQuestion();
