const data = [
    {
        id: 1,
        question: "Which of these fish is actually a fish?",
        options: [
            { option: "swordfish", isCorrect: true, },
            { option: "jellyfish", isCorrect: false, },
            { option: "starfish", isCorrect: false, },
            { option: "crayfish", isCorrect: false, },
        ]
    },
    {
        id: 2,
        question: "Which of these fish is actually a cricketer?",
        options: [
            { option: "sachin", isCorrect: true, },
            { option: "ramesh", isCorrect: false, },
            { option: "messi", isCorrect: false, },
            { option: "akshay", isCorrect: false, },
        ]
    },
    {
        id: 3,
        question: "Which of these fish is actually a actor?",
        options: [
            { option: "rakesh", isCorrect: false, },
            { option: "karan", isCorrect: false, },
            { option: "hritik", isCorrect: true, },
            { option: "rajamouli", isCorrect: false, },
        ]
    },
]

const gameScreen = document.querySelector(".game")
const resultScreen = document.querySelector(".result")
const question = document.querySelector(".question")
const optionsContainer = document.querySelector(".options")
const submit = document.querySelector(".submit")
const play = document.querySelector(".play")

let qInd = 0;
let correctCount = 0;
let wrongCount = 0;
let total = 0;
let selectedOption;

const showResult = ()=>{
    resultScreen.style.display = "block"
    gameScreen.style.display = "none"

    resultScreen.querySelector(".correct").textContent = 
    `Correct Answer: ${correctCount}`;

    resultScreen.querySelector(".wrong").textContent = 
    `Wrong Answer: ${wrongCount}`;

    resultScreen.querySelector(".score").textContent = 
    `Score : ${(correctCount - wrongCount) * 10}`;
};

const showQuestion = (qNumber) =>{
    if(qInd === data.length) return showResult();
    selectedOption = null;
    question.textContent = data[qNumber].question;
    optionsContainer.innerHTML = data[qNumber].options.map((item, index) => 
        `
            <div class="option">
                <input name="option" type="radio" id=${index} value=${item.isCorrect}>
                <label for="1"> ${item.option}</label>
            </div>
        `
    ).join("");
    selectOption();
};

const selectOption = () =>{
   optionsContainer.querySelectorAll("input").forEach(el =>{
    el.addEventListener("click", (e)=>{
        //  console.log(e.target.value);
         selectedOption = (e.target.value);
    });
   });
};

const submitOption = ()=>{
        submit.addEventListener("click", ()=>{
            if(selectedOption !== null){
                selectedOption === "true" ? correctCount++ : wrongCount++;
                qInd++; 
                showQuestion(qInd);
            }else{
                alert("select an option");
            }
        });
};

const playAgain = () => {
    qInd = 0;
    correctCount = 0;
    wrongCount = 0;
     total = 0;
    showQuestion(qInd);
}

play.addEventListener("click",()=>{
    resultScreen.style.display = "none"
    gameScreen.style.display = "block"
    playAgain();
});

showQuestion(qInd);
submitOption();
