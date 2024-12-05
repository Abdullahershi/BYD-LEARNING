if (
    window.location.pathname === './ai.html')
    {
const quizData = [
    // q1
    {
        question: "What is the primary goal of Artificial Intelligence (AI)?",
        choices: ["A. Imitating human intelligence", "B. Replacing human intelligence", "C. Enhancing human intelligence", "D. Ignoring human intelligence"],
        correct: 0,
    },
    // q2
    {
        question: "Which programming language is commonly used in AI development?",
        choices: ["A. Python", "B. Java", "C. C++", "D. Ruby"],
        correct: 0,
    },
    // q3
    {
        question: "What is a neural network in AI?",
        choices: ["A. A network of interconnected human brains", "B. A computer-based system inspired by the human brain", "C. A network of electrical circuits", "D. A type of computer virus"],
        correct: 1,
    },
    // q4
    {
        question: "Which AI technique allows a computer system to learn from data and improve over time?",
        choices: ["A. Natural Language Processing (NLP)", "B. Machine Learning", "C. Expert Systems", "D. Robotics"],
        correct: 1,
    },
    // q5
    {
        question: "What does the acronym 'NLP' stand for in the context of AI?",
        choices: ["A. Natural Language Protocol", "B. Network Language Processing", "C. Neural Language Programming", "D. Natural Language Processing"],
        correct: 3,
    },
    // q6
    {
        question: "Which AI application is designed to simulate human conversation?",
        choices: ["A. Machine Learning", "B. Chatbot", "C.  Expert System", "D. Data Mining"],
        correct: 1,
    },
    // q7
    {
        question: "What is the Turing Test in AI?",
        choices: ["A. A test to measure the processing speed of AI algorithms", "B. A test to determine if a computer can exhibit human-like intelligence", "C. A test to evaluate the accuracy of AI predictions", "D. A test to assess the ethical implications of AI"],
        correct: 1,
    },
    // q8
    {
        question: "What is the main purpose of reinforcement learning in AI?",
        choices: ["A. To generate random data", "B. To optimize search algorithms", "C. To teach AI systems through rewards and punishments", "D. To identify patterns in data"],
        correct: 2,
    },
    // q9
    {
        question: "What is the concept of 'Machine Vision' in AI?",
        choices: ["A. A. The ability of machines to see and interpret visual information", "B. The power of machines to create visual art", "C. A programming language for AI development", "D. A type of virtual reality technology"],
        correct: 0,
    },
    // q10
    {
        question: "What is the primary goal of Artificial Intelligence (AI)?",
        choices: ["A. Natural Language Processing (NLP)", "B. Deep Learning", "C. Data Mining", "D. Genetic Algorithms"],
        correct: 2,
    },
];

let currentQuestion = 0;
let score = 0;
let selectedAnswer = null;

const questionText = document.getElementById("question-text");
const choicesContainer = document.getElementById("choices-container");
const resultContainer = document.getElementById("result-container");
const nextButton = document.getElementById("next-btn");
const finishButton = document.getElementById("finish-btn");
const quizContainer = document.getElementById("quiz-container");
const questionNumber = document.getElementById("question-number"); 
const introContainer = document.getElementById("intro-container");
const startQuizBtn = document.getElementById("start-quiz-btn");

function startQuiz() {
    introContainer.classList.remove("hidden");
    quizContainer.classList.add("hidden");
    resultContainer.classList.add("hidden");

    startQuizBtn.addEventListener("click", () => {
        introContainer.classList.add("hidden");
        quizContainer.classList.remove("hidden");
        loadQuestion();
    });
}

function loadQuestion() {
    const currentQuizData = quizData[currentQuestion];
    questionText.innerText = currentQuizData.question;
    const questionNumber = document.getElementById("question-number");
    questionNumber.innerText = ` ${currentQuestion + 1} of 10 Questions`;

    for (let i = 0; i < 4; i++) {
        const choiceBtn = choicesContainer.children[i];
        choiceBtn.innerText = currentQuizData.choices[i];
        choiceBtn.classList.remove("selected");
    }

    choicesContainer.classList.remove("hidden");
    resultContainer.classList.add("hidden");
    nextButton.disabled = true;
}

function selectAnswer(choice) {
    selectedAnswer = choice;
    for (let i = 0; i < 4; i++) {
        const choiceBtn = choicesContainer.children[i];
        if (i === selectedAnswer) {
            choiceBtn.classList.add("selected");
        } else {
            choiceBtn.classList.remove("selected");
        }
    }
    nextButton.disabled = false;
}

function highlightOption(isCorrect) {
    const choices = document.querySelectorAll(".choice-btn");

    choices.forEach((choice, index) => {
        if (index === selectedAnswer) {
            if (isCorrect) {
                choice.style.backgroundColor = "green"; // Correct answer turns green
            } else {
                choice.style.backgroundColor = "red"; // Wrong answer turns red
            }
        } else if (index === quizData[currentQuestion].correct) {
            choice.style.backgroundColor = "green"; // Correct answer turns green
        } else {
            choice.style.backgroundColor = ""; // Reset other options
        }
    });

    setTimeout(() => {
        choices.forEach((choice) => {
            choice.style.backgroundColor = ""; // Reset all options after 3 seconds
        });

        currentQuestion++;

        if (currentQuestion < quizData.length) {
            loadQuestion();
        } else {
            finishButton.style.display = "block"; // Show the "Finish" button
            nextButton.style.display = "none"; // Hide the "Next" button
        }
    }, 1000); // 3 seconds timeout
}

function nextQuestion() {
    if (selectedAnswer !== null) {
        const currentQuizData = quizData[currentQuestion];
        if (selectedAnswer === currentQuizData.correct) {
            score++;
        }
        selectedAnswer = null;

        highlightOption(selectedAnswer === currentQuizData.correct);
    }
}

function finishQuiz() {
    if (selectedAnswer !== null) {
        const currentQuizData = quizData[currentQuestion];
        if (selectedAnswer === currentQuizData.correct) {
            score++;
        }
        selectedAnswer = null;
    }

    currentQuestion++;

    if (currentQuestion < quizData.length) {
        loadQuestion();
        nextButton.disabled = true;
    } else {
        document.getElementById("quiz-container").classList.add("hidden");
        document.getElementById("results-container").classList.remove("hidden");

        const scoreResults = document.getElementById("score-results");
        scoreResults.innerHTML = `<h1 style="color: white;">Your final score is: ${score}/${quizData.length}<h1>`;

        // Calculate and display the percentage
        const percentage = (score / quizData.length) * 100;
        document.getElementById("percentage").textContent = `${percentage.toFixed(0)}%`;
        document.getElementById("battery-level").style.width = percentage + "%";
    }
}

function goToPage1() {
    // Replace 'your-page-url.html' with the actual URL you want to navigate to
    window.location.href = './quizmp.html';
  }

  function goToPage2() {
    // Replace 'your-page-url.html' with the actual URL you want to navigate to
    window.location.href = './ai.html';
  }

startQuiz();
}


// programming
if (
    window.location.pathname === './programming.html')
    {
const quizData = [
    // q1
    {
        question: "What does HTML stand for in web development?",
        choices: ["A. Hyper Text Markup Language", "B. High-Level Text Manipulation Language", "C. Hyperlink and Text Markup Language", "D. Hyper Transferable Text Mode Language"],
        correct: 0,
    },
    // q2
    {
        question: "Which programming language is often used for building mobile applications on both Android and iOS platforms?",
        choices: ["A. Python", "B. JavaScript", "C. Swift", "D. Ruby"],
        correct: 2,
    },
    // q3
    {
        question: "What does the acronym 'CSS' stand for in web design?",
        choices: ["A. Cascading Style Sheet", "B. Computer Style Sheet", "C. Creative Style Selector", "D. Content Style System"],
        correct: 0,
    },
    // q4
    {
        question: "In object-oriented programming, what is an 'instance' of a class?",
        choices: ["A. A class definition", "B. A subclass", "C. A concrete object created from the class", "D.  A method within a class"],
        correct: 2,
    },
    // q5
    {
        question: "Which data structure follows the Last In, First Out (LIFO) principle?",
        choices: ["A. Queue", "B. Stack", "C. Linked List", "D. Hash Table"],
        correct: 1,
    },
    // q6
    {
        question: "What is the term for a function that calls itself within its own code?",
        choices: ["A.  Loop", "B. Recursion", "C. Iteration", "D. Function chaining"],
        correct: 1,
    },
    // q7
    {
        question: "Which programming paradigm emphasizes writing code as a series of mathematical functions without mutable state?",
        choices: ["A. Object-Oriented Programming (OOP)", "B. Procedural Programming", "C. Functional Programming (FP)", "D. Event-Driven Programming"],
        correct: 2,
    },
    // q8
    {
        question: "In Python, what is the purpose of the 'if-else' statement?",
        choices: ["A. To declare a variable", "B. To define a class", "C. To implement conditional logic", "D. To create a loop"],
        correct: 2,
    },
    // q9
    {
        question: "Which sorting algorithm has the worst-case time complexity of O(n^2)?",
        choices: ["A. Quick Sort", "B. Merge Sort", "C. Bubble Sort", "D. Insertion Sort"],
        correct: 2,
    },
    // q10
    {
        question: "What is the main purpose of version control systems like Git?",
        choices: ["A. To write code documentation", "B. To track changes in code and collaborate with others", "C. To compile code into machine-readable format", "D. To optimize code for execution"],
        correct: 1,
    },
];

let currentQuestion = 0;
let score = 0;
let selectedAnswer = null;

const questionText = document.getElementById("question-text");
const choicesContainer = document.getElementById("choices-container");
const resultContainer = document.getElementById("result-container");
const nextButton = document.getElementById("next-btn");
const finishButton = document.getElementById("finish-btn");
const quizContainer = document.getElementById("quiz-container");
const questionNumber = document.getElementById("question-number"); 
const introContainer = document.getElementById("intro-container");
const startQuizBtn = document.getElementById("start-quiz-btn");

function startQuiz() {
    introContainer.classList.remove("hidden");
    quizContainer.classList.add("hidden");
    resultContainer.classList.add("hidden");

    startQuizBtn.addEventListener("click", () => {
        introContainer.classList.add("hidden");
        quizContainer.classList.remove("hidden");
        loadQuestion();
    });
}

function loadQuestion() {
    const currentQuizData = quizData[currentQuestion];
    questionText.innerText = currentQuizData.question;
    const questionNumber = document.getElementById("question-number");
    questionNumber.innerText = ` ${currentQuestion + 1} of 10 Questions`;

    for (let i = 0; i < 4; i++) {
        const choiceBtn = choicesContainer.children[i];
        choiceBtn.innerText = currentQuizData.choices[i];
        choiceBtn.classList.remove("selected");
    }

    choicesContainer.classList.remove("hidden");
    resultContainer.classList.add("hidden");
    nextButton.disabled = true;
}

function selectAnswer(choice) {
    selectedAnswer = choice;
    for (let i = 0; i < 4; i++) {
        const choiceBtn = choicesContainer.children[i];
        if (i === selectedAnswer) {
            choiceBtn.classList.add("selected");
        } else {
            choiceBtn.classList.remove("selected");
        }
    }
    nextButton.disabled = false;
}

function highlightOption(isCorrect) {
    const choices = document.querySelectorAll(".choice-btn");

    choices.forEach((choice, index) => {
        if (index === selectedAnswer) {
            if (isCorrect) {
                choice.style.backgroundColor = "green"; // Correct answer turns green
            } else {
                choice.style.backgroundColor = "red"; // Wrong answer turns red
            }
        } else if (index === quizData[currentQuestion].correct) {
            choice.style.backgroundColor = "green"; // Correct answer turns green
        } else {
            choice.style.backgroundColor = ""; // Reset other options
        }
    });

    setTimeout(() => {
        choices.forEach((choice) => {
            choice.style.backgroundColor = ""; // Reset all options after 3 seconds
        });

        currentQuestion++;

        if (currentQuestion < quizData.length) {
            loadQuestion();
        } else {
            finishButton.style.display = "block"; // Show the "Finish" button
            nextButton.style.display = "none"; // Hide the "Next" button
        }
    }, 1000); // 3 seconds timeout
}

function nextQuestion() {
    if (selectedAnswer !== null) {
        const currentQuizData = quizData[currentQuestion];
        if (selectedAnswer === currentQuizData.correct) {
            score++;
        }
        selectedAnswer = null;

        highlightOption(selectedAnswer === currentQuizData.correct);
    }
}

function finishQuiz() {
    if (selectedAnswer !== null) {
        const currentQuizData = quizData[currentQuestion];
        if (selectedAnswer === currentQuizData.correct) {
            score++;
        }
        selectedAnswer = null;
    }

    currentQuestion++;

    if (currentQuestion < quizData.length) {
        loadQuestion();
        nextButton.disabled = true;
    } else {
        document.getElementById("quiz-container").classList.add("hidden");
        document.getElementById("results-container").classList.remove("hidden");

        const scoreResults = document.getElementById("score-results");
        scoreResults.innerHTML = `<h1 style="color: white;">Your final score is: ${score}/${quizData.length}<h1>`;

        // Calculate and display the percentage
        const percentage = (score / quizData.length) * 100;
        document.getElementById("percentage").textContent = `${percentage.toFixed(0)}%`;
        document.getElementById("battery-level").style.width = percentage + "%";
    }
}

function goToPage1() {
    // Replace 'your-page-url.html' with the actual URL you want to navigate to
    window.location.href = './index.html';
  }

  function goToPage2() {
    // Replace 'your-page-url.html' with the actual URL you want to navigate to
    window.location.href = 'google.com';
  }

startQuiz();
}


//BIO TECH
if (
    window.location.pathname === '/biotech.html')
    {
const quizData = [
    // q1
    {
        question: "What is biotechnology primarily focused on?",
        choices: ["A. Electronics and Robotics", "B. Genetic Modification and Molecular Biology", "C. Space Exploration", "D. Environmental Conservation"],
        correct: 1,
    },
    // q2
    {
        question: "Which of the following is a widely used biotechnological technique for amplifying DNA sequences?",
        choices: ["A. Polymerase Chain Reaction (PCR)", "B. Nuclear Fusion", "C. Genetic Cloning", "D. RNA Interference"],
        correct: 0,
    },
    // q3
    {
        question: "What does GMO stand for in the context of biotechnology?",
        choices: ["A. Greenhouse Management Organization", "B. Genetically Modified Organism", "C. Global Medical Organization", "D. Genomic Molecular Order"],
        correct: 1,
    },
    // q4
    {
        question: "Which biotechnological process involves the transfer of genes from one organism into another to impart specific traits?",
        choices: ["A. Mutation", "B. Hybridization", "C. Gene Therapy", "D. Genetic Engineering"],
        correct: 3,
    },
    // q5
    {
        question: "What is the primary goal of bioprocessing in biotechnology?",
        choices: ["A. To extract minerals from soil", "B. To produce biofuels", "C. To manipulate genetic material", "D. To optimize biological product manufacturing"],
        correct: 3,
    },
    // q6
    {
        question: "Which biotechnological application involves the study of an individual's unique DNA sequence?",
        choices: ["A. Cloning", "B. Gene Therapy", "C. Genomics", "D. Genetic Screening"],
        correct: 2,
    },
    // q7
    {
        question: "What is the role of CRISPR-Cas9 in biotechnology?",
        choices: ["A. To repair broken DNA strands", "B. To edit specific genes in an organism's DNA", "C. To create artificial chromosomes", "D. To analyze protein structures"],
        correct: 1,
    },
    // q8
    {
        question: "Which biotechnological technique is used to separate molecules based on their size and charge?",
        choices: ["A. Electrophoresis", "B. Polymerase Chain Reaction (PCR)", "C. Chromatography", "D. Sequencing"],
        correct: 0,
    },
    // q9
    {
        question: "What is a bioreactor in biotechnology?",
        choices: ["A. A device for studying plant growth", "B. A container for storing genetically modified organisms", "C. A vessel for conducting biological reactions under controlled conditions", "D. A tool for analyzing protein structures"],
        correct: 2,
    },
    // q10
    {
        question: "What is the primary goal of Artificial Intelligence (AI)?",
        choices: ["A. Bioprocessing", "B. Biophysics", "C. Biomedicine", "D. Bioinformatics"],
        correct: 2,
    },
];

let currentQuestion = 0;
let score = 0;
let selectedAnswer = null;

const questionText = document.getElementById("question-text");
const choicesContainer = document.getElementById("choices-container");
const resultContainer = document.getElementById("result-container");
const nextButton = document.getElementById("next-btn");
const finishButton = document.getElementById("finish-btn");
const quizContainer = document.getElementById("quiz-container");
const questionNumber = document.getElementById("question-number"); 
const introContainer = document.getElementById("intro-container");
const startQuizBtn = document.getElementById("start-quiz-btn");

function startQuiz() {
    introContainer.classList.remove("hidden");
    quizContainer.classList.add("hidden");
    resultContainer.classList.add("hidden");

    startQuizBtn.addEventListener("click", () => {
        introContainer.classList.add("hidden");
        quizContainer.classList.remove("hidden");
        loadQuestion();
    });
}

function loadQuestion() {
    const currentQuizData = quizData[currentQuestion];
    questionText.innerText = currentQuizData.question;
    const questionNumber = document.getElementById("question-number");
    questionNumber.innerText = ` ${currentQuestion + 1} of 10 Questions`;

    for (let i = 0; i < 4; i++) {
        const choiceBtn = choicesContainer.children[i];
        choiceBtn.innerText = currentQuizData.choices[i];
        choiceBtn.classList.remove("selected");
    }

    choicesContainer.classList.remove("hidden");
    resultContainer.classList.add("hidden");
    nextButton.disabled = true;
}

function selectAnswer(choice) {
    selectedAnswer = choice;
    for (let i = 0; i < 4; i++) {
        const choiceBtn = choicesContainer.children[i];
        if (i === selectedAnswer) {
            choiceBtn.classList.add("selected");
        } else {
            choiceBtn.classList.remove("selected");
        }
    }
    nextButton.disabled = false;
}

function highlightOption(isCorrect) {
    const choices = document.querySelectorAll(".choice-btn");

    choices.forEach((choice, index) => {
        if (index === selectedAnswer) {
            if (isCorrect) {
                choice.style.backgroundColor = "green"; // Correct answer turns green
            } else {
                choice.style.backgroundColor = "red"; // Wrong answer turns red
            }
        } else if (index === quizData[currentQuestion].correct) {
            choice.style.backgroundColor = "green"; // Correct answer turns green
        } else {
            choice.style.backgroundColor = ""; // Reset other options
        }
    });

    setTimeout(() => {
        choices.forEach((choice) => {
            choice.style.backgroundColor = ""; // Reset all options after 3 seconds
        });

        currentQuestion++;

        if (currentQuestion < quizData.length) {
            loadQuestion();
        } else {
            finishButton.style.display = "block"; // Show the "Finish" button
            nextButton.style.display = "none"; // Hide the "Next" button
        }
    }, 1000); // 3 seconds timeout
}

function nextQuestion() {
    if (selectedAnswer !== null) {
        const currentQuizData = quizData[currentQuestion];
        if (selectedAnswer === currentQuizData.correct) {
            score++;
        }
        selectedAnswer = null;

        highlightOption(selectedAnswer === currentQuizData.correct);
    }
}

function finishQuiz() {
    if (selectedAnswer !== null) {
        const currentQuizData = quizData[currentQuestion];
        if (selectedAnswer === currentQuizData.correct) {
            score++;
        }
        selectedAnswer = null;
    }

    currentQuestion++;

    if (currentQuestion < quizData.length) {
        loadQuestion();
        nextButton.disabled = true;
    } else {
        document.getElementById("quiz-container").classList.add("hidden");
        document.getElementById("results-container").classList.remove("hidden");

        const scoreResults = document.getElementById("score-results");
        scoreResults.innerHTML = `<h1 style="color: white;">Your final score is: ${score}/${quizData.length}<h1>`;

        // Calculate and display the percentage
        const percentage = (score / quizData.length) * 100;
        document.getElementById("percentage").textContent = `${percentage.toFixed(0)}%`;
        document.getElementById("battery-level").style.width = percentage + "%";
    }
}

function goToPage1() {
    // Replace 'your-page-url.html' with the actual URL you want to navigate to
    window.location.href = './index.html';
  }

  function goToPage2() {
    // Replace 'your-page-url.html' with the actual URL you want to navigate to
    window.location.href = 'google.com';
  }

startQuiz();
}


// SQL
if (
    window.location.pathname === '/sql.html')
    {
const quizData = [
    // q1
    {
        question: "What does SQL stand for?",
        choices: ["A. Structured Query Language", "B. Simple Query Language", "C. Scripted Query Language", "D. Systematic Query Logic"],
        correct: 0,
    },
    // q2
    {
        question: "Which SQL statement is used to retrieve data from a database?",
        choices: ["A. GET", "B. SELECT", "C. FETCH", "D. SEARCH"],
        correct: 1,
    },
    // q3
    {
        question: "Which SQL clause is used to filter records based on a specified condition?",
        choices: ["A. GROUP BY", "B. HAVING", "C. ORDER BY", "D. WHERE"],
        correct: 3,
    },
    // q4
    {
        question: "What does the SQL command 'UPDATE' do?",
        choices: ["A. Deletes records from a table", "B. Inserts new records into a table", "C. Modifies existing records in a table", "D. Creates a new table"],
        correct: 2,
    },
    // q5
    {
        question: "What SQL command is used to remove a table from a database?",
        choices: ["A. REMOVE TABLE", "B. DROP TABLE", "C. DELETE TABLE", "D. ERASE TABLE"],
        correct: 1,
    },
    // q6
    {
        question: "What does the SQL acronym 'DDL' stand for?",
        choices: ["A. Data Definition Language", "B. Data Display Language", "C. Database Design Language", "D. Data Deletion Language"],
        correct: 0,
    },
    // q7
    {
        question: "Which SQL function is used to find the maximum value in a column?",
        choices: ["A. MAX()", "B. MIN()", "C. AVG()", "D. SUM()"],
        correct: 0,
    },
    // q8
    {
        question: "In SQL, which JOIN type returns only the rows that have matching values in both tables?",
        choices: ["INNER JOIN", "B. LEFT JOIN", "C. RIGHT JOIN", "D. FULL JOIN"],
        correct: 0,
    },
    // q9
    {
        question: "What SQL command is used to add a new row to an existing table?",
        choices: ["A. APPEND", "B. INSERT", "C. ADD", "D. MODIFY"],
        correct: 1,
    },
    // q10
    {
        question: "What is the purpose of the SQL 'GROUP BY' clause?",
        choices: ["A. To filter records based on a condition", "B. To sort records in ascending order", "C. To group rows with the same values into summary rows", "D. To delete duplicate records from a table"],
        correct: 2,
    },
];

let currentQuestion = 0;
let score = 0;
let selectedAnswer = null;

const questionText = document.getElementById("question-text");
const choicesContainer = document.getElementById("choices-container");
const resultContainer = document.getElementById("result-container");
const nextButton = document.getElementById("next-btn");
const finishButton = document.getElementById("finish-btn");
const quizContainer = document.getElementById("quiz-container");
const questionNumber = document.getElementById("question-number"); 
const introContainer = document.getElementById("intro-container");
const startQuizBtn = document.getElementById("start-quiz-btn");

function startQuiz() {
    introContainer.classList.remove("hidden");
    quizContainer.classList.add("hidden");
    resultContainer.classList.add("hidden");

    startQuizBtn.addEventListener("click", () => {
        introContainer.classList.add("hidden");
        quizContainer.classList.remove("hidden");
        loadQuestion();
    });
}

function loadQuestion() {
    const currentQuizData = quizData[currentQuestion];
    questionText.innerText = currentQuizData.question;
    const questionNumber = document.getElementById("question-number");
    questionNumber.innerText = ` ${currentQuestion + 1} of 10 Questions`;

    for (let i = 0; i < 4; i++) {
        const choiceBtn = choicesContainer.children[i];
        choiceBtn.innerText = currentQuizData.choices[i];
        choiceBtn.classList.remove("selected");
    }

    choicesContainer.classList.remove("hidden");
    resultContainer.classList.add("hidden");
    nextButton.disabled = true;
}

function selectAnswer(choice) {
    selectedAnswer = choice;
    for (let i = 0; i < 4; i++) {
        const choiceBtn = choicesContainer.children[i];
        if (i === selectedAnswer) {
            choiceBtn.classList.add("selected");
        } else {
            choiceBtn.classList.remove("selected");
        }
    }
    nextButton.disabled = false;
}

function highlightOption(isCorrect) {
    const choices = document.querySelectorAll(".choice-btn");

    choices.forEach((choice, index) => {
        if (index === selectedAnswer) {
            if (isCorrect) {
                choice.style.backgroundColor = "green"; // Correct answer turns green
            } else {
                choice.style.backgroundColor = "red"; // Wrong answer turns red
            }
        } else if (index === quizData[currentQuestion].correct) {
            choice.style.backgroundColor = "green"; // Correct answer turns green
        } else {
            choice.style.backgroundColor = ""; // Reset other options
        }
    });

    setTimeout(() => {
        choices.forEach((choice) => {
            choice.style.backgroundColor = ""; // Reset all options after 3 seconds
        });

        currentQuestion++;

        if (currentQuestion < quizData.length) {
            loadQuestion();
        } else {
            finishButton.style.display = "block"; // Show the "Finish" button
            nextButton.style.display = "none"; // Hide the "Next" button
        }
    }, 1000); // 3 seconds timeout
}

function nextQuestion() {
    if (selectedAnswer !== null) {
        const currentQuizData = quizData[currentQuestion];
        if (selectedAnswer === currentQuizData.correct) {
            score++;
        }
        selectedAnswer = null;

        highlightOption(selectedAnswer === currentQuizData.correct);
    }
}

function finishQuiz() {
    if (selectedAnswer !== null) {
        const currentQuizData = quizData[currentQuestion];
        if (selectedAnswer === currentQuizData.correct) {
            score++;
        }
        selectedAnswer = null;
    }

    currentQuestion++;

    if (currentQuestion < quizData.length) {
        loadQuestion();
        nextButton.disabled = true;
    } else {
        document.getElementById("quiz-container").classList.add("hidden");
        document.getElementById("results-container").classList.remove("hidden");

        const scoreResults = document.getElementById("score-results");
        scoreResults.innerHTML = `<h1 style="color: white;">Your final score is: ${score}/${quizData.length}<h1>`;

        // Calculate and display the percentage
        const percentage = (score / quizData.length) * 100;
        document.getElementById("percentage").textContent = `${percentage.toFixed(0)}%`;
        document.getElementById("battery-level").style.width = percentage + "%";
    }
}

function goToPage1() {
    // Replace 'your-page-url.html' with the actual URL you want to navigate to
    window.location.href = './index.html';
  }

  function goToPage2() {
    // Replace 'your-page-url.html' with the actual URL you want to navigate to
    window.location.href = 'google.com';
  }

startQuiz();
}


// CSCI
if (
    window.location.pathname === '/csci.html')
    {
const quizData = [
    // q1
    {
        question: "What does CPU stand for in computer science?",
        choices: ["A. Central Processing Unit", "B. Computer Power Unit", "C. Central Program Unit", "D. Computer Peripheral Unit"],
        correct: 0,
    },
    // q2
    {
        question: "Which data structure is used to store data in a Last In, First Out (LIFO) manner?",
        choices: ["A. Queue", "B. Stack", "C. Linked List", "D. Tree"],
        correct: 1,
    },
    // q3
    {
        question: "What is the primary purpose of an operating system?",
        choices: ["A. To store and manage data files", "B. To perform complex mathematical calculations", "C. To provide an interface for user interaction with hardware", "D. To design computer graphics"],
        correct: 2,
    },
    // q4
    {
        question: "Which programming language is often used for developing mobile applications?",
        choices: ["A. C++", "B. Java", "C. Python", "D. Ruby"],
        correct: 1,
    },
    // q5
    {
        question: "In computer science, what is the term for a programming construct that repeats a set of instructions until a specific condition is met?",
        choices: ["A. Conditionals", "B. Loops", "C. Functions", "D. Variables"],
        correct: 1,
    },
    // q6
    {
        question: "Which of the following is not a type of network topology in computer networks?",
        choices: ["A. Star", "B. Bus", "C. Mesh", "D. Cascade"],
        correct: 3,
    },
    // q7
    {
        question: "What is the term for a malicious software program that self-replicates and spreads to other computers?",
        choices: ["A. Firewall", "B. Virus", "C. Algorithm", "D. Router"],
        correct: 1,
    },
    // q8
    {
        question: "Which sorting algorithm has an average time complexity of O(n log n)?",
        choices: ["A. Bubble Sort", "B. Merge Sort", "C. Insertion Sort", "D. Quick Sort"],
        correct: 1,
    },
    // q9
    {
        question: "In computer science, what does RAM stand for?",
        choices: ["A. Read-Only Memory", "B. Random Access Memory", "C. Real-Time Application Module", "D. Remote Access Method"],
        correct: 1,
    },
    // q10
    {
        question: "What is the purpose of a compiler in programming languages?",
        choices: ["A. To execute code line by line", "B. To translate high-level code into machine code", "C. To debug programs", "D. To create graphics and animations"],
        correct: 1,
    },
];

let currentQuestion = 0;
let score = 0;
let selectedAnswer = null;

const questionText = document.getElementById("question-text");
const choicesContainer = document.getElementById("choices-container");
const resultContainer = document.getElementById("result-container");
const nextButton = document.getElementById("next-btn");
const finishButton = document.getElementById("finish-btn");
const quizContainer = document.getElementById("quiz-container");
const questionNumber = document.getElementById("question-number"); 
const introContainer = document.getElementById("intro-container");
const startQuizBtn = document.getElementById("start-quiz-btn");

function startQuiz() {
    introContainer.classList.remove("hidden");
    quizContainer.classList.add("hidden");
    resultContainer.classList.add("hidden");

    startQuizBtn.addEventListener("click", () => {
        introContainer.classList.add("hidden");
        quizContainer.classList.remove("hidden");
        loadQuestion();
    });
}

function loadQuestion() {
    const currentQuizData = quizData[currentQuestion];
    questionText.innerText = currentQuizData.question;
    const questionNumber = document.getElementById("question-number");
    questionNumber.innerText = ` ${currentQuestion + 1} of 10 Questions`;

    for (let i = 0; i < 4; i++) {
        const choiceBtn = choicesContainer.children[i];
        choiceBtn.innerText = currentQuizData.choices[i];
        choiceBtn.classList.remove("selected");
    }

    choicesContainer.classList.remove("hidden");
    resultContainer.classList.add("hidden");
    nextButton.disabled = true;
}

function selectAnswer(choice) {
    selectedAnswer = choice;
    for (let i = 0; i < 4; i++) {
        const choiceBtn = choicesContainer.children[i];
        if (i === selectedAnswer) {
            choiceBtn.classList.add("selected");
        } else {
            choiceBtn.classList.remove("selected");
        }
    }
    nextButton.disabled = false;
}

function highlightOption(isCorrect) {
    const choices = document.querySelectorAll(".choice-btn");

    choices.forEach((choice, index) => {
        if (index === selectedAnswer) {
            if (isCorrect) {
                choice.style.backgroundColor = "green"; // Correct answer turns green
            } else {
                choice.style.backgroundColor = "red"; // Wrong answer turns red
            }
        } else if (index === quizData[currentQuestion].correct) {
            choice.style.backgroundColor = "green"; // Correct answer turns green
        } else {
            choice.style.backgroundColor = ""; // Reset other options
        }
    });

    setTimeout(() => {
        choices.forEach((choice) => {
            choice.style.backgroundColor = ""; // Reset all options after 3 seconds
        });

        currentQuestion++;

        if (currentQuestion < quizData.length) {
            loadQuestion();
        } else {
            finishButton.style.display = "block"; // Show the "Finish" button
            nextButton.style.display = "none"; // Hide the "Next" button
        }
    }, 1000); // 3 seconds timeout
}

function nextQuestion() {
    if (selectedAnswer !== null) {
        const currentQuizData = quizData[currentQuestion];
        if (selectedAnswer === currentQuizData.correct) {
            score++;
        }
        selectedAnswer = null;

        highlightOption(selectedAnswer === currentQuizData.correct);
    }
}

function finishQuiz() {
    if (selectedAnswer !== null) {
        const currentQuizData = quizData[currentQuestion];
        if (selectedAnswer === currentQuizData.correct) {
            score++;
        }
        selectedAnswer = null;
    }

    currentQuestion++;

    if (currentQuestion < quizData.length) {
        loadQuestion();
        nextButton.disabled = true;
    } else {
        document.getElementById("quiz-container").classList.add("hidden");
        document.getElementById("results-container").classList.remove("hidden");

        const scoreResults = document.getElementById("score-results");
        scoreResults.innerHTML = `<h1 style="color: white;">Your final score is: ${score}/${quizData.length}<h1>`;

        // Calculate and display the percentage
        const percentage = (score / quizData.length) * 100;
        document.getElementById("percentage").textContent = `${percentage.toFixed(0)}%`;
        document.getElementById("battery-level").style.width = percentage + "%";
    }
}

function goToPage1() {
    // Replace 'your-page-url.html' with the actual URL you want to navigate to
    window.location.href = './index.html';
  }

  function goToPage2() {
    // Replace 'your-page-url.html' with the actual URL you want to navigate to
    window.location.href = 'google.com';
  }

startQuiz();
}


//ROBOTICS
if (
    window.location.pathname === '/robotics.html')
    {
const quizData = [
    // q1
    {
        question: "What does ROS stand for in the field of robotics?",
        choices: ["A. Robotic Operating System", "B. Robot Operating Software", "C. Robotics Operating System", "D. Robotic System Operation"],
        correct: 0,
    },
    // q2
    {
        question: "Which type of robot is designed to operate in environments too dangerous for humans, such as nuclear power plants?",
        choices: ["A. Industrial Robot", "B. Humanoid Robot", "C. Autonomous Robot", "D. Remote-Controlled Robot"],
        correct: 2,
    },
    // q3
    {
        question: "What is the term for a robot's ability to perceive and interpret its environment through sensors and cameras?",
        choices: ["A. Artificial Intelligence", "B. Machine Learning", "C. Computer Vision", "D. Neural Network"],
        correct: 2,
    },
    // q4
    {
        question: "Which programming language is commonly used for programming robots and robotic systems?",
        choices: ["A. Python", "B. JavaScript", "C. Ruby", "D. MATLAB"],
        correct: 3,
    },
    // q5
    {
        question: "What does 'AI' stand for in the context of robotics?",
        choices: ["A. Automated Instruction", "B. Autonomous Intelligence", "C. Artificial Intelligence", "D. Algorithmic Insight"],
        correct: 2,
    },
    // q6
    {
        question: "Which component of a robot allows it to move or manipulate objects in its environment?",
        choices: ["A. Sensor Array", "B. Control Unit", "C. Actuator", "D. Processor"],
        correct: 2,
    },
    // q7
    {
        question: "What type of robot is designed to mimic the physical appearance and capabilities of a human?",
        choices: ["A. Industrial Robot", "B. Humanoid Robot", "C. Drone Robot", "D. Service Robot"],
        correct: 1,
    },
    // q8
    {
        question: "Which field of robotics focuses on the development of robots for medical applications, such as surgery and rehabilitation?",
        choices: ["A. Industrial Robotics", "B. Space Robotics", "C. Medical Robotics", "D. Educational Robotics"],
        correct: 2,
    },
    // q9
    {
        question: "What is the primary function of a robotic arm in manufacturing and automation?",
        choices: ["A. Visual Inspection", "B. Material Handling", "C. Speech Recognition", "D. Navigation"],
        correct: 1,
    },
    // q10
    {
        question: "Which term describes the ability of robots to communicate and work together in a coordinated manner?",
        choices: ["A. Robotic Synchronization", "B. Robotic Collaboration", "C. Robot Autonomy", "D. Robot Isolation"],
        correct: 1,
    },
];

let currentQuestion = 0;
let score = 0;
let selectedAnswer = null;

const questionText = document.getElementById("question-text");
const choicesContainer = document.getElementById("choices-container");
const resultContainer = document.getElementById("result-container");
const nextButton = document.getElementById("next-btn");
const finishButton = document.getElementById("finish-btn");
const quizContainer = document.getElementById("quiz-container");
const questionNumber = document.getElementById("question-number"); 
const introContainer = document.getElementById("intro-container");
const startQuizBtn = document.getElementById("start-quiz-btn");

function startQuiz() {
    introContainer.classList.remove("hidden");
    quizContainer.classList.add("hidden");
    resultContainer.classList.add("hidden");

    startQuizBtn.addEventListener("click", () => {
        introContainer.classList.add("hidden");
        quizContainer.classList.remove("hidden");
        loadQuestion();
    });
}

function loadQuestion() {
    const currentQuizData = quizData[currentQuestion];
    questionText.innerText = currentQuizData.question;
    const questionNumber = document.getElementById("question-number");
    questionNumber.innerText = ` ${currentQuestion + 1} of 10 Questions`;

    for (let i = 0; i < 4; i++) {
        const choiceBtn = choicesContainer.children[i];
        choiceBtn.innerText = currentQuizData.choices[i];
        choiceBtn.classList.remove("selected");
    }

    choicesContainer.classList.remove("hidden");
    resultContainer.classList.add("hidden");
    nextButton.disabled = true;
}

function selectAnswer(choice) {
    selectedAnswer = choice;
    for (let i = 0; i < 4; i++) {
        const choiceBtn = choicesContainer.children[i];
        if (i === selectedAnswer) {
            choiceBtn.classList.add("selected");
        } else {
            choiceBtn.classList.remove("selected");
        }
    }
    nextButton.disabled = false;
}

function highlightOption(isCorrect) {
    const choices = document.querySelectorAll(".choice-btn");

    choices.forEach((choice, index) => {
        if (index === selectedAnswer) {
            if (isCorrect) {
                choice.style.backgroundColor = "green"; // Correct answer turns green
            } else {
                choice.style.backgroundColor = "red"; // Wrong answer turns red
            }
        } else if (index === quizData[currentQuestion].correct) {
            choice.style.backgroundColor = "green"; // Correct answer turns green
        } else {
            choice.style.backgroundColor = ""; // Reset other options
        }
    });

    setTimeout(() => {
        choices.forEach((choice) => {
            choice.style.backgroundColor = ""; // Reset all options after 3 seconds
        });

        currentQuestion++;

        if (currentQuestion < quizData.length) {
            loadQuestion();
        } else {
            finishButton.style.display = "block"; // Show the "Finish" button
            nextButton.style.display = "none"; // Hide the "Next" button
        }
    }, 1000); // 3 seconds timeout
}

function nextQuestion() {
    if (selectedAnswer !== null) {
        const currentQuizData = quizData[currentQuestion];
        if (selectedAnswer === currentQuizData.correct) {
            score++;
        }
        selectedAnswer = null;

        highlightOption(selectedAnswer === currentQuizData.correct);
    }
}

function finishQuiz() {
    if (selectedAnswer !== null) {
        const currentQuizData = quizData[currentQuestion];
        if (selectedAnswer === currentQuizData.correct) {
            score++;
        }
        selectedAnswer = null;
    }

    currentQuestion++;

    if (currentQuestion < quizData.length) {
        loadQuestion();
        nextButton.disabled = true;
    } else {
        document.getElementById("quiz-container").classList.add("hidden");
        document.getElementById("results-container").classList.remove("hidden");

        const scoreResults = document.getElementById("score-results");
        scoreResults.innerHTML = `<h1 style="color: white;">Your final score is: ${score}/${quizData.length}<h1>`;

        // Calculate and display the percentage
        const percentage = (score / quizData.length) * 100;
        document.getElementById("percentage").textContent = `${percentage.toFixed(0)}%`;
        document.getElementById("battery-level").style.width = percentage + "%";
    }
}

function goToPage1() {
    // Replace 'your-page-url.html' with the actual URL you want to navigate to
    window.location.href = './index.html';
  }

  function goToPage2() {
    // Replace 'your-page-url.html' with the actual URL you want to navigate to
    window.location.href = 'google.com';
  }

startQuiz();
}



// course start
// JavaScript to handle scroll animations and page locking
const sections = document.querySelectorAll("section");
const navLinks = document.querySelectorAll("nav ul li a");

function checkScroll() {
    const triggerBottom = window.innerHeight / 2;

    sections.forEach((section, index) => {
        const sectionTop = section.getBoundingClientRect().top;

        if (sectionTop < triggerBottom) {
            section.classList.add("active");
            setActiveNavLink(index);
            // Add the following lines to lock the section into place
            section.style.position = "sticky";
            section.style.top = "0";
        } else {
            section.classList.remove("active");
            // Remove the position: sticky styles to unlock the section
            section.style.position = "";
            section.style.top = "";
        }
    });
}

function setActiveNavLink(index) {
    navLinks.forEach((link, i) => {
        if (i === index) {
            link.classList.add("active");
        } else {
            link.classList.remove("active");
        }
    });
}

// Initially, add a class to hide all sections
sections.forEach((section) => {
    section.classList.add("hide");
});

// Listen for scroll events and trigger animations
window.addEventListener("scroll", checkScroll);
window.addEventListener("resize", checkScroll);

// Check for animations on page load
window.addEventListener("DOMContentLoaded", checkScroll);

// Scroll to the selected section when a navigation link is clicked
navLinks.forEach((link, index) => {
    link.addEventListener("click", (e) => {
        e.preventDefault();
        sections[index].scrollIntoView({ behavior: "smooth" });
    });
});

// course end