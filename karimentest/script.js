document.addEventListener('DOMContentLoaded', () => {
    const form = document.getElementById('quiz-form');
    const submitButton = document.getElementById('submit-button');
    const resultDiv = document.getElementById('result');
    const reviewDiv = document.createElement('div');
    const shuffleButton = document.getElementById('shuffle-button');
    const goToTopButton = document.getElementById('go-to-top');
    const quizTab = document.getElementById('quiz-tab');
    const bookmarkTab = document.getElementById('bookmark-tab');
    const logTab = document.getElementById('log-tab');
    const quizSection = document.getElementById('quiz-section');
    const bookmarkSection = document.getElementById('bookmark-section');
    const logSection = document.getElementById('log-section');
    const clearBookmarksButton = document.createElement('button');
    const clearLogButton = document.getElementById('clear-log-button');
    reviewDiv.id = 'review';

    let shuffledQuizData = [];
    let bookmarks = JSON.parse(localStorage.getItem('bookmarks')) || [];

    // Function to store the score with the current date and time
    const storeScore = (score) => {
        const scores = JSON.parse(localStorage.getItem('scores')) || [];
        const currentDate = new Date();
        const scoreEntry = {
            score: score,
            date: currentDate.toLocaleDateString(),
            time: currentDate.toLocaleTimeString()
        };

        scores.push(scoreEntry);
        if (scores.length > 10) {
            scores.shift(); // Keep only the latest 10 scores
        }

        localStorage.setItem('scores', JSON.stringify(scores));
    };

    // Function to display previous scores
    const displayScores = () => {
        const scores = JSON.parse(localStorage.getItem('scores')) || [];
        const scoresDiv = document.getElementById('previous-scores');
        scoresDiv.innerHTML = '<h2>Log</h2>';
        if (scores.length === 0) {
            clearLogButton.style.display = 'none';
            const emptyMessage = document.createElement('p');
            emptyMessage.innerText = 'No logs available.';
            scoresDiv.appendChild(emptyMessage);
        } else {
            clearLogButton.style.display = 'block';
            scores.forEach(scoreEntry => {
                const scoreElement = document.createElement('p');
                scoreElement.innerText = `Score: ${scoreEntry.score} - Date: ${scoreEntry.date} - Time: ${scoreEntry.time}`;
                scoresDiv.appendChild(scoreElement);
            });
        }
    };

    // Function to clear scores log
    const clearScores = () => {
        localStorage.removeItem('scores');
        displayScores();
    };

    const shuffleQuestions = () => {
        shuffledQuizData = quizData.sort(() => 0.5 - Math.random()).slice(0, 50);
    };

    const displayQuestions = () => {
        form.innerHTML = '';
        shuffledQuizData.forEach((item, index) => {
            const questionContainer = document.createElement('div');
            questionContainer.classList.add('question-container');
            questionContainer.setAttribute('data-index', index);

            const questionParagraph = document.createElement('p');
            questionParagraph.classList.add('question');
            questionParagraph.innerText = item.question;

            questionContainer.appendChild(questionParagraph);

            if (item.image) {
                const image = document.createElement('img');
                image.src = item.image;
                image.alt = 'Question Image';
                image.classList.add('question-image');
                image.onerror = function () {
                    image.style.display = 'none';
                    const placeholder = document.createElement('div');
                    placeholder.classList.add('image-placeholder');
                    placeholder.innerText = 'No image available';
                    questionContainer.appendChild(placeholder);
                };
                questionContainer.appendChild(image);
            } else {
                const placeholder = document.createElement('div');
                placeholder.classList.add('image-placeholder');
                placeholder.innerText = 'No image available';
                questionContainer.appendChild(placeholder);
            }

            const trueLabel = document.createElement('label');
            trueLabel.innerHTML = `<input type="radio" name="answer-${index}" value="T"> TRUE`;
            questionContainer.appendChild(trueLabel);

            const falseLabel = document.createElement('label');
            falseLabel.innerHTML = `<input type="radio" name="answer-${index}" value="F"> FALSE`;
            questionContainer.appendChild(falseLabel);

            const bookmarkLabel = document.createElement('label');
            bookmarkLabel.innerHTML = `<input type="checkbox" name="bookmark-${index}" value="bookmark"> Bookmark`;
            questionContainer.appendChild(bookmarkLabel);

            form.appendChild(questionContainer);
        });
    };

    // Function to store bookmarks
    const storeBookmark = (question) => {
        bookmarks.push(question);
        localStorage.setItem('bookmarks', JSON.stringify(bookmarks));
    };

    // Function to display bookmarked questions
    const displayBookmarkedQuestions = () => {
        const bookmarksDiv = document.getElementById('bookmarked-questions');
        bookmarksDiv.innerHTML = '<h2>Bookmarked Questions</h2>';
        if (bookmarks.length === 0) {
            clearBookmarksButton.style.display = 'none';
            const emptyMessage = document.createElement('p');
            emptyMessage.innerText = 'No bookmarked questions.';
            bookmarksDiv.appendChild(emptyMessage);
        } else {
            clearBookmarksButton.style.display = 'block';
            bookmarks.forEach((item) => {
                const questionContainer = document.createElement('div');
                questionContainer.classList.add('question-container');

                const questionParagraph = document.createElement('p');
                questionParagraph.classList.add('question');
                questionParagraph.innerHTML = `<strong>Question:</strong> ${item.question}<br><strong>Correct answer:</strong> ${item.answer}<br><strong>Explanation:</strong> ${item.explanation}`;

                questionContainer.appendChild(questionParagraph);

                if (item.image) {
                    const image = document.createElement('img');
                    image.src = item.image;
                    image.alt = 'Question Image';
                    image.classList.add('question-image');
                    image.onerror = function () {
                        image.style.display = 'none';
                        const placeholder = document.createElement('div');
                        placeholder.classList.add('image-placeholder');
                        placeholder.innerText = 'No image available';
                        questionContainer.appendChild(placeholder);
                    };
                    questionContainer.appendChild(image);
                } else {
                    const placeholder = document.createElement('div');
                    placeholder.classList.add('image-placeholder');
                    placeholder.innerText = 'No image available';
                    questionContainer.appendChild(placeholder);
                }

                bookmarksDiv.appendChild(questionContainer);
            });
        }
        bookmarksDiv.appendChild(clearBookmarksButton);
    };

    // Function to clear bookmarks
    const clearBookmarks = () => {
        bookmarks = [];
        localStorage.setItem('bookmarks', JSON.stringify(bookmarks));
        displayBookmarkedQuestions();
    };

    // Initialize the clear bookmarks button
    clearBookmarksButton.innerText = 'Clear Bookmarks';
    clearBookmarksButton.onclick = clearBookmarks;

    // Initialize the clear log button
    clearLogButton.addEventListener('click', clearScores);

    // Function to clear results and review sections
    const clearResults = () => {
        resultDiv.innerHTML = '';
        reviewDiv.innerHTML = '';
    };

    shuffleButton.addEventListener('click', () => {
        shuffleQuestions();
        displayQuestions();
        clearResults(); // Clear previous results and reviews
        submitButton.style.display = 'block'; // Show the submit button
        resultDiv.innerHTML = ''; // Clear the result message
        displayBookmarkedQuestions(); // Ensure bookmark section is shown correctly when starting a new quiz
    });

    submitButton.addEventListener('click', (event) => {
        event.preventDefault();
        submitButton.disabled = true; // Disable the submit button
        submitButton.style.display = 'none'; // Hide the submit button

        let allAnswered = true;

        // Clear previous highlights
        document.querySelectorAll('.question-container').forEach(container => {
            container.style.backgroundColor = 'white';
        });

        shuffledQuizData.forEach((item, index) => {
            const selectedAnswer = document.querySelector(`input[name="answer-${index}"]:checked`);
            const bookmarkChecked = document.querySelector(`input[name="bookmark-${index}"]`).checked;
            if (!selectedAnswer) {
                allAnswered = false;
                const questionContainer = document.querySelector(`.question-container[data-index="${index}"]`);
                questionContainer.style.backgroundColor = 'lightcoral';
            } else if (bookmarkChecked) {
                storeBookmark(item);
            }
        });

        if (!allAnswered) {
            alert('Please answer all the questions before submitting.');
            submitButton.disabled = false; // Re-enable the submit button if not all questions are answered
            submitButton.style.display = 'block'; // Show the submit button again
            return;
        }

        let score = 0;
        let incorrectAnswers = [];

        shuffledQuizData.forEach((item, index) => {
            const selectedAnswer = document.querySelector(`input[name="answer-${index}"]:checked`);
            if (selectedAnswer && selectedAnswer.value === item.answer) {
                score++;
            } else {
                incorrectAnswers.push({
                    question: item.question,
                    correctAnswer: item.answer,
                    selectedAnswer: selectedAnswer ? selectedAnswer.value : 'No answer',
                    explanation: item.explanation,
                    image: item.image
                });
            }
        });

        // Display result with PASS/FAIL
        resultDiv.innerHTML = '';
        const resultMessage = document.createElement('p');
        if (score >= 45) {
            resultMessage.innerText = `PASS! You scored ${score} out of ${shuffledQuizData.length}.`;
            resultMessage.style.color = 'green';

            // Trigger confetti animation if score is 45 or more
            confetti({
                particleCount: 200,
                spread: 70,
                origin: { y: 0.6 }
            });
        } else {
            resultMessage.innerText = `FAIL, Better LUCK NEXT TIME. You scored ${score} out of ${shuffledQuizData.length}.`;
            resultMessage.style.color = 'red';
        }
        resultDiv.appendChild(resultMessage);

        storeScore(score); // Store the score
        displayScores(); // Display the scores
        displayBookmarkedQuestions(); // Display bookmarked questions

        if (incorrectAnswers.length > 0) {
            reviewDiv.innerHTML = '<h2>Review Incorrect Answers</h2>';
            incorrectAnswers.forEach(item => {
                const questionContainer = document.createElement('div');
                questionContainer.classList.add('question-container');

                const questionParagraph = document.createElement('p');
                questionParagraph.classList.add('question');
                questionParagraph.innerHTML = `<strong>Question:</strong> ${item.question}<br><strong>Your answer:</strong> ${item.selectedAnswer}<br><strong>Correct answer:</strong> ${item.correctAnswer}<br><strong>Explanation:</strong> ${item.explanation}`;

                questionContainer.appendChild(questionParagraph);

                if (item.image) {
                    const image = document.createElement('img');
                    image.src = item.image;
                    image.alt = 'Question Image';
                    image.classList.add('question-image');
                    image.onerror = function () {
                        image.style.display = 'none';
                        const placeholder = document.createElement('div');
                        placeholder.classList.add('image-placeholder');
                        placeholder.innerText = 'No image available';
                        questionContainer.appendChild(placeholder);
                    };
                    questionContainer.appendChild(image);
                } else {
                    const placeholder = document.createElement('div');
                    placeholder.classList.add('image-placeholder');
                    placeholder.innerText = 'No image available';
                    questionContainer.appendChild(placeholder);
                }

                reviewDiv.appendChild(questionContainer);
            });
            resultDiv.appendChild(reviewDiv);
        }
    });

    // Display previous scores on page load
    displayScores();
    displayBookmarkedQuestions();

    // Show the button when the user scrolls down 20px from the top of the document
    window.onscroll = function() {
        if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
            goToTopButton.style.display = "block";
        } else {
            goToTopButton.style.display = "none";
        }
    };

    // When the user clicks on the button, scroll to the top of the document
    goToTopButton.addEventListener('click', () => {
        document.body.scrollTop = 0; // For Safari
        document.documentElement.scrollTop = 0; // For Chrome, Firefox, IE, and Opera
    });

    // Tab switching functionality
    quizTab.addEventListener('click', () => {
        quizSection.style.display = 'block';
        bookmarkSection.style.display = 'none';
        logSection.style.display = 'none';
        quizTab.classList.add('active-tab');
        bookmarkTab.classList.remove('active-tab');
        logTab.classList.remove('active-tab');
    });

    bookmarkTab.addEventListener('click', () => {
        quizSection.style.display = 'none';
        bookmarkSection.style.display = 'block';
        logSection.style.display = 'none';
        quizTab.classList.remove('active-tab');
        bookmarkTab.classList.add('active-tab');
        logTab.classList.remove('active-tab');
    });

    logTab.addEventListener('click', () => {
        quizSection.style.display = 'none';
        bookmarkSection.style.display = 'none';
        logSection.style.display = 'block';
        quizTab.classList.remove('active-tab');
        bookmarkTab.classList.remove('active-tab');
        logTab.classList.add('active-tab');
    });

    // Initially display the quiz section
    quizSection.style.display = 'block';
    bookmarkSection.style.display = 'none';
    logSection.style.display = 'none';
    quizTab.classList.add('active-tab');
});
