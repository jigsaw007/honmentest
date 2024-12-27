let quizData = [];
const quizContainer = document.getElementById("quiz");
const resultContainer = document.getElementById("result");
const submitButton = document.getElementById("submit");
const startButton = document.getElementById("start");

async function loadQuizData() {
    try {
        const response = await fetch('quizDataC.json');
        if (!response.ok) {
            throw new Error('Network response was not ok ' + response.statusText);
        }
        quizData = await response.json();
        console.log(quizData);
    } catch (error) {
        console.error('There has been a problem with your fetch operation:', error);
    }
}

function shuffle(array) {
    for (let i = array.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [array[i], array[j]] = [array[j], array[i]];
    }
}

function displayQuiz(data) {
    quizContainer.innerHTML = ""; // Clear previous quiz
    data.forEach((item) => {
        const questionElement = document.createElement("div");
        questionElement.className = "question";
        let questionHtml = `<p>${item.question}</p>`;
        
        if (item.image) {
            questionHtml += `<img src="${item.image}" alt="Question Image" style="max-width: 100%; height: auto;">`;
        }

        questionElement.innerHTML = questionHtml + `
            <div class="options">
                <label><input type="radio" name="question${data.indexOf(item)}" value="true" onchange="checkAllAnswered()"> True</label>
                <label><input type="radio" name="question${data.indexOf(item)}" value="false" onchange="checkAllAnswered()"> False</label>
            </div>
        `;
        quizContainer.appendChild(questionElement);
    });
    
    submitButton.style.display = 'none'; // Ensure Submit button is hidden when displaying quiz
}

function startQuiz() {
    shuffle(quizData); // Shuffle the quiz data
    displayQuiz(quizData); // Display the shuffled quiz
    startButton.style.display = 'none'; // Hide the Start button
}

function checkAllAnswered() {
    const totalQuestions = quizData.length;
    const answeredQuestions = [...quizContainer.querySelectorAll('input[type="radio"]:checked')].length;

    // Show the Submit button only if all questions are answered
    submitButton.style.display = answeredQuestions === totalQuestions ? 'block' : 'none';
}

function calculateScore() {
    let score = 0;
    const feedbackElements = [];

    quizData.forEach((item, index) => {
        const answer = document.querySelector(`input[name="question${index}"]:checked`);
        const questionDiv = quizContainer.children[index];

        if (answer) {
            const userAnswer = answer.value === "true";
            if (userAnswer === item.answer) {
                score++;
                questionDiv.style.backgroundColor = "#d4edda";
            } else {
                questionDiv.style.backgroundColor = "#f8d7da";
                feedbackElements.push(`Question ${index + 1}: Your answer was <strong>${answer.value}</strong>, but the correct answer is <strong>${item.answer}</strong>.`);
            }
        } else {
            feedbackElements.push(`Question ${index + 1}: No answer provided.`);
            questionDiv.style.backgroundColor = "#f8d7da";
        }
    });

    return { score, feedback: feedbackElements };
}

startButton.addEventListener("click", startQuiz); // Start quiz on button click

submitButton.addEventListener("click", () => {
    const { score, feedback } = calculateScore();
    resultContainer.innerHTML = `You scored ${score} out of ${quizData.length}.<br>${feedback.join("<br>")}`;
});

// Load quiz data when the script runs
loadQuizData();
