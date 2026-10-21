// 1. The data: a list of cards
const cards = [
    {
        question: "What is the difference between var, let, and const?",
        answer: "var is function-scoped. let and const are block-scoped. const cannot be reassigned."
    },
    {
        question: "What is the DOM?",
        answer: "The Document Object Model. It is the page's HTML turned into objects that JavaScript can read and change."
    },
    {
        question: "What is the difference between == and ===?",
        answer: "== compares values after converting types. === compares values and types, with no conversion."
    },
    {
        question: "What is an array?",
        answer: "An ordered list of values, written with square brackets, like [1, 2, 3]."
    },
    {
        question: "What does addEventListener do?",
        answer: "It tells the browser to run a function when an event happens, like a click or a submit."
    },
    {
        question: "What is a function?",
        answer: "A reusable block of code that you can call by name, with or without inputs."
    },
    {
        question: "What is the difference between null and undefined?",
        answer: "undefined means a value was never set. null means you set it to 'no value' on purpose."
    },
    {
        question: "What does JSON stand for?",
        answer: "JavaScript Object Notation. It is a text format for storing and sending data."
    }
];

// 2. The state: things that change while the app runs
let currentIndex = 0;
let showingAnswer = false;

// 3. Grab the HTML elements we need
const cardText = document.getElementById("card-text");
const progressFill = document.getElementById("progress-fill");
const progressText = document.getElementById("progress-text");
const flipBtn = document.getElementById("flip-btn");

// 4. The render function: draws the screen from the state
function render() {
    const card = cards[currentIndex];

    cardText.textContent = showingAnswer ? card.answer : card.question;
    flipBtn.textContent = showingAnswer ? "Hide Answer" : "Show Answer";

    progressText.textContent = `${currentIndex + 1} of ${cards.length}`;
    progressFill.style.width = `${((currentIndex + 1) / cards.length) * 100}%`;
}

// 5. Draw the first card when the page loads
render();

// 6. Grab the two buttons we have not used yet
const prevBtn = document.getElementById("prev-btn");
const nextBtn = document.getElementById("next-btn");

// 7. Show Answer / Hide Answer
flipBtn.addEventListener("click", function () {
    showingAnswer = !showingAnswer;
    render();
});

// 8. Next card
nextBtn.addEventListener("click", function () {
    currentIndex = (currentIndex + 1) % cards.length;
    showingAnswer = false;
    render();
});

// 9. Previous card
prevBtn.addEventListener("click", function () {
    currentIndex = (currentIndex - 1 + cards.length) % cards.length;
    showingAnswer = false;
    render();
});