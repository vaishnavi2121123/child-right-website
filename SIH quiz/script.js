const questions = [
    {
        question: "What does the right to education mean?",
        answers: [
            { text: "The right to play with friends", correct: false },
            { text: "The right to learn and go to school", correct: true },
            { text: "The right to watch TV all day", correct: false },
            { text: "The right to eat candy all the time", correct: false },
        ]
    },
    {
        question: "Why is it important to protect children from harm?",
        answers: [
            { text: "Because they are superheroe", correct: false },
            { text: "Because they deserve to be safe and happy", correct: true },
            { text: "Because they should be punished for being naughty", correct: false },
            { text: "Because it's fun to scare them", correct: false },
        ]
    },
    {
        question: "What is the right to be heard",
        answers: [
            { text: "The right to sing loudly in public", correct: false },
            { text: "The right to have a say in things that affect you", correct: true },
            { text: "The right to listen to music all day", correct: false },
            { text: "The right to shout at adults", correct: false },
        ]
    },
    {
        question: "What should you do if someone tries to hurt you?",
        answers: [
            { text: "Run away and hide", correct: false },
            { text: "Tell a trusted adult", correct: true },
            { text: "Fight back with all your might", correct: false },
            { text: "Keep it a secret", correct: false },
        ]
    },
    {
        question: "What does the right to play mean?",
        answers: [
            { text: "The right to play video games all day", correct: false },
            { text: " The right to have fun and be active", correct: true },
            { text: "The right to eat ice cream all the time", correct: false },
            { text: "The right to stay in bed all day", correct: false },
        ]
    },
    {
        question: "What is the right to health?",
        answers: [
            { text: "The right to eat junk food all the time", correct: false },
            { text: " The right to see a doctor when you're sick", correct: true },
            { text: "The right to never exercise", correct: false },
            { text: "The right to stay up late", correct: false },
        ]
    },
    {
        question: "Why should children be protected from discrimination?",
        answers: [
            { text: "Because everyone should be treated equally", correct: true },
            { text: " Because some children are just troublemakers", correct: false },
            { text: "Because it's fun to make fun of others", correct: false },
            { text: "Because they are better than adults", correct: false },
        ]
    },
    {
        question: "What is the right to a name and nationality?",
        answers: [
            { text: "The right to be called whatever others want", correct: false },
            { text: " The right to have a cool nickname", correct: false },
            { text: "The right to change your name whenever you want", correct: false },
            { text: "The right to have a passport", correct: true },
        ]
    },
    {
        question: "What does the right to be safe mean?",
        answers: [
            { text: "The right to be protected from harm and violence", correct: true },
            { text: " The right to take dangerous risks", correct: false },
            { text: "The right to play with fire", correct: false },
            { text: "The right to explore scary places", correct: false },
        ]
    },
    {
        question: "What is the right to family and a home?",
        answers: [
            { text: "The right to have lots of toys", correct: false },
            { text: " The right to live anywhere you want", correct: false },
            { text: "The right to have a place to live and people who love you", correct: true },
            { text: "The right to be alone all the time", correct: false },
        ]
    }
    
];

const questionElement = document.getElementById("question");
const answerButtons = document.getElementById("answer-buttons");
const nextButton = document.getElementById("next-btn");

let currentQuestionIndex = 0;
let score = 0;

function startQuiz() {
    currentQuestionIndex = 0;
    score = 0;
    nextButton.style.display = "none";
    showQuestion();
}

function showQuestion() {
    resetState();
    const currentQuestion = questions[currentQuestionIndex];
    questionElement.innerText = currentQuestion.question;

    currentQuestion.answers.forEach(answer => {
        const button = document.createElement("button");
        button.innerText = answer.text;
        button.classList.add("btn");
        button.addEventListener("click", () => selectAnswer(answer));
        answerButtons.appendChild(button);
    });
}

function selectAnswer(answer) {
    const correct = answer.correct;
    Array.from(answerButtons.children).forEach(button => {
        button.disabled = true;
        if (button.innerText === answer.text) {
            setStatusClass(button, correct);
        }
    });

    if (correct) {
        score++;
    }

    nextButton.style.display = "block";
    nextButton.innerText = "Next";

    // Remove previous event listeners
    nextButton.removeEventListener("click", handleNextButtonClick);

    // Add new event listener
    nextButton.addEventListener("click", handleNextButtonClick);
}

function handleNextButtonClick() {
    currentQuestionIndex++;
    if (currentQuestionIndex < questions.length) {
        showQuestion();
    } else {
        showScore();
    }
}

function resetState() {
    clearStatusClass(answerButtons);
    while (answerButtons.firstChild) {
        answerButtons.removeChild(answerButtons.firstChild);
    }
}

function setStatusClass(element, correct) {
    clearStatusClass(element);
    if (correct) {
        element.classList.add('correct');
    } else {
        element.classList.add('incorrect');
    }
}

function clearStatusClass(element) {
    element.classList.remove('correct');
    element.classList.remove('incorrect');
}

function showScore() {
    questionElement.innerText = `You scored ${score} out of ${questions.length}!`;
    answerButtons.innerHTML = "";
    nextButton.innerText = "Play Again";
    nextButton.addEventListener("click", startQuiz);
    nextButton.style.display = "block";
}

startQuiz();
