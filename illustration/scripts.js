let questionsData = [];

// Fetch questions from JSON file
async function loadQuestions() {
    const response = await fetch('questions.json');
    questionsData = await response.json();
}

// Function to shuffle the questions array
function shuffleQuestions() {
    for (let i = questionsData.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [questionsData[i], questionsData[j]] = [questionsData[j], questionsData[i]];
    }
}

// Function to start the quiz
function startQuiz() {
    // Load questions and shuffle them
    loadQuestions().then(() => {
        shuffleQuestions();
        displayAllQuestions(); // Display shuffled questions
        document.getElementById('start-quiz-btn').style.display = 'none'; // Hide start button
        document.getElementById('quiz-container').style.display = 'block'; // Show quiz
    });
}

// Function to display all questions on the same page
function displayAllQuestions() {
    const container = document.getElementById("quiz-container");
    container.innerHTML = ""; // Clear container before appending questions

    // Loop through all questions and display them
    questionsData.forEach((question, qIndex) => {
        const questionDiv = document.createElement('div');
        questionDiv.className = 'question-block';
        questionDiv.innerHTML = `
            <img src="${question.image}" alt="Question image" style="width: 100%; max-width: 500px; height: auto;">
            <div class="question">${question.question}</div>
        `;
        
        // Loop through options and create radio buttons for each question
        question.options.forEach((option, index) => {
            const optionDiv = document.createElement('div');
            optionDiv.className = 'options';
            optionDiv.innerHTML = `
                <p>${option.statement}</p>
                <label><input type="radio" name="question${qIndex}_option${index}" value="true" onclick="checkIfAllAnswered()"> TRUE</label>
                <label><input type="radio" name="question${qIndex}_option${index}" value="false" onclick="checkIfAllAnswered()"> FALSE</label>
            `;
            questionDiv.appendChild(optionDiv);
        });

        container.appendChild(questionDiv);
    });

    // Initially hide the submit button
    document.getElementById("submit-btn").style.display = "none";
}

// Function to check if all questions are answered
function checkIfAllAnswered() {
    let allQuestionsAnswered = true;

    // Loop through each question to check if all options are selected
    questionsData.forEach((question, qIndex) => {
        question.options.forEach((option, index) => {
            const selectedOption = document.querySelector(`input[name="question${qIndex}_option${index}"]:checked`);
            if (!selectedOption) {
                allQuestionsAnswered = false; // If any option is not selected, keep submit button hidden
            }
        });
    });

    // Show the submit button if all questions are answered
    if (allQuestionsAnswered) {
        document.getElementById("submit-btn").style.display = "inline-block";
    }
}

// Function to check if all answers are correct
function checkAnswers() {
    let allCorrect = true;

    // Loop through each question and compare the selected value with the correct answer
    questionsData.forEach((question, qIndex) => {
        window.correctAnswers = question.options.map(option => option.correctAnswer);
        window.correctAnswers.forEach((answer, index) => {
            const selectedOption = document.querySelector(`input[name="question${qIndex}_option${index}"]:checked`);
            const optionContainer = document.querySelector(`input[name="question${qIndex}_option${index}"]`).parentNode.parentNode;

            // Clear previous highlighting
            optionContainer.style.backgroundColor = ''; 

            // Check if the answer is correct
            if (!selectedOption || selectedOption.value !== answer) {
                allCorrect = false;

                // Highlight incorrect answer in light red
                optionContainer.style.backgroundColor = 'lightcoral';
            }
        });
    });

    // Display result
    document.getElementById("result").innerText = allCorrect ? "Correct! You earned a point!" : "Incorrect. Try again!";
}
