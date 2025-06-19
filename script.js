const flashcards = [
    { 
        question: " 01) O que é o Sistema Financeiro Nacional (SFN)",
        answer: " É o conjunto de instruções financeiras e órgãos normativos que regulam, fiscalizam e executam operações financeiras no Brasil."
    },
    {
        question: " 02) Quais são os três principais componentes do SFN ? ",
        answer: "Órgãos Normativos, Entidades Supervisoras e Operadores do Mercado. "
    },
    {
        question: " 03) Quais são os principais órgãos normativos do SFN? ",
        answer: "Conselho Monetário Nacional (CMN), Conselho Nacional de Seguros Privados (CNSP) e Conselho Nacional de Previdência Complementar (CNPC) "
    },
    {
        question: " 04) Qual a principal função do Conselho Monetário Nacional ?  ",
        answer: " Formular a política da moeda e do crédito, com o objetivo de garantir a estabilidade econômica. "
    },
    {
        question: " 05) Quem são as entidades supervisoras do SFN?  ",
        answer: " Banco Central do Brasil (BCB), Comissão de Valores Mobiliários (CVM), Superintendência de Seguros Privados (SUSEP) e Superintendência Nacional de Previdência Complementar (PREVIC). "
    },
    {
        question: " 06) Qual a principal função do Banco Central (BCB)?  ",
        answer: " Executar as políticas monetária e cambial, regular o sistema financeiro e controlar a inflação. "
    },
    {
        question: " 07) O que faz a Comissão de Valores Mobiliários (CVM)?  ",
        answer: " Supervisionar e fiscalizar o mercado de seguros, previdência complementar aberta e capitalização. "
    },
    {
        question: " 08) Qual é o papel da SUSEP ",
        answer: " Supervisionar e fiscalizar o mercado de seguros, previdência complementar aberta e capitalização."
    },
    {
        question: " 09) O que a PREVIC supervisiona  ",
        answer: " A previdência complementar fechada, ou seja, os fundos de pensão. "
    },
    {
        question: " 10) Quem são os operadores do mercado financeiro?  ",
        answer: " Conjunto de regras, instituições e sistemas utilizados para a transferência de fundos entre os agentes econômicos. "
    },
    {
        question: " 11) O que é o Sistema de Pagamentos Brasileiro (SPB)?  ",
        answer: " Conjunto de regras, instituições e sistemas utilizados para a transferência de fundos entre os agentes econômicos. "
    },
    {
        question: "12) Quais são os tipos de instituições financeiras no SFN?   ",
        answer: " Bancárias (que captam depósitos à vista) e não bancárias (que não captam depósitos à vista)."
    },
    {
        question: " 13) O que é uma instituição bancária?  ",
        answer: " Instituição financeira autorizada a captar depósitos à vista, como bancos comerciais e bancos múltiplos com carteira comercial. "
    },
    {
        question: " 14)  Exemplos de instituições não bancárias?  ",
        answer: " Instituições que possuem pelo menos duas carteiras, sendo obrigatória a carteira comercial ou de investimento. "
    },
    {
        question: " 15) Qual o objetivo da política monetária?  ",
        answer: " Controlar a oferta de moeda e o nível de juros da economia para assegurar a estabilidade de preços."
    },
    {
        question: " 16)  O que são os Bancos Múltiplos?  ",
        answer: " Instituições que possuem pelo menos duas carteiras, sendo obrigatória a carteira comercial ou de investimento."
    },
    {
        question: " 17)  O que é o COPOM?  ",
        answer: " Comitê de Política Monetária do Banco Central, responsável por definir a meta da taxa Selic."
    },
    {
        question: "18)  O que é a Taxa Selic?  ",
        answer: " É a taxa básica de juros da economia brasileira, usada como referência para os demais juros. "
    },
    {
        question: " 19) Quem regulamenta o mercado de câmbio no Brasil?  ",
        answer: " O Banco Central do Brasil. "
    },
    {
        question: " 20)  Qual o objetivo central do Sistema Financeiro Nacional?  ",
        answer: " Promover o desenvolvimento equilibrado da economia, garantindo a estabilidade e eficiência do sistema financeiro."
    },
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