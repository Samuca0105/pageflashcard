const flashcards = [
    {
        question: "O que é a Constituição Federal?",
        answer: "É a lei fundamental e suprema do Brasil, que organiza o Estado e garante direitos."
    },
    {
        question: "O que significa CPU?",
        answer: "Unidade Central de Processamento."
    },
    {
        question: "Qual a capital do Brasil?",
        answer: "Brasília."
    }
    // Adicione mais flashcards aqui
];

let current = 0;

const questionEl = document.getElementById('question');
const answerEl = document.getElementById('answer');
const showAnswerBtn = document.getElementById('showAnswer');
const prevBtn = document.getElementById('prev');
const nextBtn = document.getElementById('next');
const counterEl = document.getElementById('counter');

function renderCard() {
    const card = flashcards[current];
    questionEl.textContent = card.question;
    answerEl.textContent = card.answer;
    answerEl.style.display = 'none';
    showAnswerBtn.style.display = 'inline-block';
    counterEl.textContent = `${current + 1} / ${flashcards.length}`;
    prevBtn.disabled = current === 0;
    nextBtn.disabled = current === flashcards.length - 1;
}

showAnswerBtn.addEventListener('click', () => {
    answerEl.style.display = 'block';
    showAnswerBtn.style.display = 'none';
});

prevBtn.addEventListener('click', () => {
    if (current > 0) {
        current--;
        renderCard();
    }
});

nextBtn.addEventListener('click', () => {
    if (current < flashcards.length - 1) {
        current++;
        renderCard();
    }
});

// Inicializa
renderCard(); 