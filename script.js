const flashcards = [
    {
        question: "No atual sistema financeiro nacional, o mercado bancário está dividido em segmentos; nesse sentido, o segmento private bank trabalha com o grande público, muitos clientes, independentemente de seu nível de renda e patrimônio. ",
        answer: "Resposta: Errado. Comentário: O conceito de private banking, que nada mais é que serviços bancários e financeiros destinados a clientes privados com grande volume de aplicações financeiras, detentores de grande patrimônio.."
    },
    {
        question: "A negociação de um ativo no mercado secundário, seja de renda fixa, seja de renda variável, permite que o seu emissor capte recursos por meio de mercado de capitais.",
        answer: "Resposta: Errado. Comentário: O emissor capta recursos por meio de mercado de capitais somente no mercado primário. No mercado secundário os ativos são negociados entre investidores.."
    },
    {
        question: "Um título de renda fixa indexado à inflação oferece riscos de crédito e de liquidez, mas é isento de risco de mercado por sofrer atualização monetária. ",
        answer: "Resposta: Errado. Comentário: A afirmação de que títulos indexados à inflação são isentos de risco de mercado é incorreta. Embora a atualização monetária proteja o investidor da perda do poder de compra devido à inflação, esses títulos ainda estão sujeitos a outros riscos de mercado, como: risco de taxas de juros, instabilidade política, crises econômicas etc."
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