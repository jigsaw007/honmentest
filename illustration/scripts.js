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
    loadQuestions().then(() => {
        shuffleQuestions();
        questionsData = questionsData.slice(0, 5); // Select only 5 random questions
        displayAllQuestions();
        document.getElementById('start-quiz-btn').style.display = 'none'; // Hide start button
        document.getElementById('quiz-container').style.display = 'block'; // Show quiz
    });
}

// Function to display all questions on the same page
function displayAllQuestions() {
    const container = document.getElementById("quiz-container");
    container.innerHTML = ""; // Clear container before appending questions

    questionsData.forEach((question, qIndex) => {
        const questionDiv = document.createElement('div');
        questionDiv.className = 'question-block';
        questionDiv.innerHTML = `
            <img src="${question.image}" alt="Question image" style="width: 100%; max-width: 500px; height: auto;">
            <div class="question">${question.question}</div>
        `;
        
        // Loop through options and create TRUE/FALSE radio buttons for each option
        question.options.forEach((option, optIndex) => {
            const optionDiv = document.createElement('div');
            optionDiv.className = 'options';
            optionDiv.innerHTML = `
                <p>${option.statement}</p>
                <label><input type="radio" name="question${qIndex}_option${optIndex}" value="true" onclick="checkIfAllAnswered()"> TRUE</label>
                <label><input type="radio" name="question${qIndex}_option${optIndex}" value="false" onclick="checkIfAllAnswered()"> FALSE</label>
            `;
            questionDiv.appendChild(optionDiv);
        });

        container.appendChild(questionDiv);
    });

    // Initially hide the submit and retake buttons
    document.getElementById("submit-btn").style.display = "none";
    document.getElementById("retake-btn").style.display = "none";
}

// Function to check if all questions are answered
function checkIfAllAnswered() {
    let allQuestionsAnswered = true;

    // Loop through each question and each option to check if an option is selected
    questionsData.forEach((question, qIndex) => {
        question.options.forEach((option, optIndex) => {
            const selectedOption = document.querySelector(`input[name="question${qIndex}_option${optIndex}"]:checked`);
            if (!selectedOption) {
                allQuestionsAnswered = false; // If any option is not answered, keep submit button hidden
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

    // Loop through each question and each option to check answers
    questionsData.forEach((question, qIndex) => {
        question.options.forEach((option, optIndex) => {
            const selectedOption = document.querySelector(`input[name="question${qIndex}_option${optIndex}"]:checked`);
            const optionContainer = document.querySelector(`input[name="question${qIndex}_option${optIndex}"]`).parentNode.parentNode;

            // Clear previous highlighting
            optionContainer.style.backgroundColor = ''; 

            // Check if the selected answer matches the correct answer
            if (!selectedOption || selectedOption.value !== option.correctAnswer) {
                allCorrect = false;
                // Highlight incorrect answer in light red
                optionContainer.style.backgroundColor = 'lightcoral';
            }
        });
    });

    // Display result
    document.getElementById("result").innerText = allCorrect ? "Correct! You earned a point!" : "Incorrect. Try again!";

    // Show retake button if all answers are correct
    if (allCorrect) {
        document.getElementById("retake-btn").style.display = "inline-block";
    } else {
        document.getElementById("retake-btn").style.display = "none";
    }
}

// Function to retake the quiz by reshuffling questions
function retakeQuiz() {
    shuffleQuestions(); // Reshuffle the questions
    questionsData = questionsData.slice(0, 5); // Select only 5 random questions again
    displayAllQuestions(); // Display the reshuffled questions
    document.getElementById("result").innerText = ""; // Clear previous result
}
