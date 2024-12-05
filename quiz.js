
//peanuts
const quizData = {
    HTML: [
        { question: "1. Which tag is used to create a hyperlink?", options: ["<a>", "<link>", "<href>", "<hyperlink>"], correct: 0 },
        { question: "2. What does the <title> tag define?", options: ["Main heading", "Tooltip", "Page title", "Subtitle"], correct: 2 },
        { question: "3. What is the purpose of <meta> tags?", options: ["Provide metadata", "Create links", "Define styles", "Define scripts"], correct: 0 },
        { question: "4. Which HTML attribute is used to define inline styles?", options: ["style", "class", "id", "inline"], correct: 0 },
        { question: "5. What is the correct HTML element for inserting a line break?", options: ["<br>", "<lb>", "<break>", "<ln>"], correct: 0 },
        { question: "6. How can you open a link in a new tab?", options: ["target='_blank'", "target='_new'", "open='_tab'", "open='_new'"], correct: 0 },
        { question: "7. Which HTML element is used to define a header for a document?", options: ["<header>", "<head>", "<h1>", "<section>"], correct: 0 },
        { question: "8. Which tag is used to create a numbered list?", options: ["<ol>", "<ul>", "<list>", "<nl>"], correct: 0 },
        { question: "9. What does the <hr> tag represent?", options: ["A horizontal rule", "A heading", "A hyperlink", "A header row"], correct: 0 },
        { question: "10. How do you specify an image's alternate text?", options: ["alt", "text", "description", "caption"], correct: 0 },
    ],
    Python: [
        { question: "1. What is the output of 2**3?", options: ["6", "8", "12", "9"], correct: 1 },
        { question: "2. How do you define a function?", options: ["func()", "def myFunction():", "function myFunction()", "function: myFunction()"], correct: 1 },
        { question: "3. Which of the following is immutable in Python?", options: ["List", "Tuple", "Dictionary", "Set"], correct: 1 },
        { question: "4. What is used to define a block of code in Python?", options: ["Indentation", "Curly Braces", "Parentheses", "Semicolon"], correct: 0 },
        { question: "5. How do you write a comment in Python?", options: ["# Comment", "// Comment", "/* Comment */", "<!-- Comment -->"], correct: 0 },
        { question: "6. Which of the following is a valid variable name?", options: ["1var", "_var", "var!", "var name"], correct: 1 },
        { question: "7. What is the output of len('Python')?", options: ["6", "7", "5", "Error"], correct: 0 },
        { question: "8. How do you import a module in Python?", options: ["import module_name", "include module_name", "require module_name", "using module_name"], correct: 0 },
        { question: "9. What is the result of '2' + '3' in Python?", options: ["23", "5", "Error", "None"], correct: 0 },
        { question: "10. How do you write a loop in Python?", options: ["for i in range(5):", "for i=0; i<5; i++", "foreach(i=0; i<5; i++)", "loop i from 0 to 5"], correct: 0 },
    ],
    CSS: [
        { question: "1. What property changes text color?", options: ["text-color", "font-color", "color", "style"], correct: 2 },
        { question: "2. What does the z-index property do?", options: ["Controls depth", "Changes text color", "Aligns text", "Sets padding"], correct: 0 },
        { question: "3. How do you include an external stylesheet?", options: ["<link rel='stylesheet' href='style.css'>", "<style src='style.css'>", "<stylesheet='style.css'>", "<css file='style.css'>"], correct: 0 },
        { question: "4. Which property is used to change the font of text?", options: ["font-family", "font-style", "font-weight", "font-text"], correct: 0 },
        { question: "5. How do you make text bold in CSS?", options: ["font-weight: bold;", "font: bold;", "text-weight: bold;", "style: bold;"], correct: 0 },
        { question: "6. What does the 'position' property control?", options: ["Element positioning", "Text color", "Font size", "Padding"], correct: 0 },
        { question: "7. How do you apply a class in CSS?", options: [".classname", "#classname", "classname", "*classname"], correct: 0 },
        { question: "8. How do you set padding in CSS?", options: ["padding: 10px;", "padding-size: 10px;", "margin: 10px;", "set-padding: 10px;"], correct: 0 },
        { question: "9. What is the default value of 'position' in CSS?", options: ["static", "absolute", "relative", "fixed"], correct: 0 },
        { question: "10. Which unit is relative to the parent element?", options: ["em", "rem", "px", "%"], correct: 0 },
    ],
    symbolicAIQuestions : 
[      
        { question: "1. What is symbolic AI also known as?", options: ["Machine Learning", "Rule-based AI", "Deep Learning", "Genetic Algorithms"], correct: 1 },
        { question: "2. Which programming language is commonly used for symbolic AI?", options: ["Python", "Prolog", "Java", "Swift"], correct: 1 },
        { question: "3. Which of these is NOT an application of symbolic AI?", options: ["Expert Systems", "Image Recognition", "Logical Reasoning", "Rule-based Decision Making"], correct: 1 },
        { question: "4. What distinguishes symbolic AI from other forms of AI?", options: ["Use of neural networks", "Use of explicit rules and knowledge representation", "Focus on data-driven predictions", "Emphasis on unsupervised learning"], correct: 1 },
        { question: "5. What is the purpose of an expert system in symbolic AI?", options: ["To learn from large datasets", "To simulate human expertise and decision-making", "To recognize images and sounds", "To perform unsupervised clustering"], correct: 1 },
        { question: "6. In symbolic AI, knowledge is represented in the form of:", options: ["Neural networks", "Logical rules and symbols", "Decision trees only", "Genetic codes"], correct: 1 },
        { question: "7. Which of these tasks is symbolic AI best suited for?", options: ["Image classification", "Predictive modeling", "Logical reasoning", "Pattern recognition"], correct: 2 },
        { question: "8. Which of the following is a drawback of symbolic AI?", options: ["Lack of transparency", "Requires extensive manual knowledge input", "Inability to handle logical tasks", "Inefficiency in rule-based reasoning"], correct: 1 },
        { question: "9. Which logic type is commonly used in symbolic AI systems?", options: ["Fuzzy Logic", "Propositional Logic", "Modal Logic", "Quantum Logic"], correct: 1 },
        { question: "10. Which programming language was specifically developed to handle symbolic AI logic problems?", options: ["Prolog", "Ruby", "Python", "C++"], correct: 0 },
        { question: "11. Which of the following is a typical characteristic of symbolic AI?", options: ["Black-box decision-making", "Transparent decision-making", "Data-driven approach", "Automatic feature learning"], correct: 1 },
        { question: "12. Which software engineering practice is critical for maintaining symbolic AI systems?", options: ["Automated feature extraction", "Manual rule updating", "Image pre-processing", "Natural language processing"], correct: 1 },
        { question: "13. An expert system in symbolic AI is designed to:", options: ["Automate learning from data", "Simulate human knowledge and expertise", "Generate images based on rules", "Recognize patterns without rules"], correct: 1 },
        { question: "14. Which AI approach uses a knowledge base and inference rules?", options: ["Symbolic AI", "Neural Networks", "Genetic Algorithms", "Reinforcement Learning"], correct: 0 },
        { question: "15. Symbolic AI is often used in:", options: ["Self-learning models", "High-speed trading systems", "Knowledge-based decision systems", "Real-time image processing"], correct: 2 },
        { question: "16. Which of these is a fundamental part of a symbolic AI system?", options: ["Training data", "Inference engine", "Hidden layers", "Feature maps"], correct: 1 },
        { question: "17. A well-known symbolic AI language that uses 'facts' and 'rules' is:", options: ["Java", "Python", "Lisp", "C++"], correct: 2 },
        { question: "18. Symbolic AI differs from machine learning because:", options: ["It uses data-driven models", "It relies on explicit rules", "It requires deep networks", "It focuses on unsupervised learning"], correct: 1 },
        { question: "19. Which approach is used in symbolic AI to make deductions based on rules?", options: ["Deep Learning", "Decision Trees", "Logical Inference", "Clustering"], correct: 2 },
        { question: "20. Which of these is a primary benefit of symbolic AI?", options: ["Speed in processing large amounts of unstructured data", "Easy to interpret and explain", "Automatically learns from raw data", "Works well with high-dimensional data"], correct: 1 },
        { question: "21. Which component is NOT typically part of a symbolic AI system?", options: ["Knowledge base", "Neural network", "Inference engine", "Rules"], correct: 1 },
        { question: "22. What kind of problems is symbolic AI particularly good at solving?", options: ["Pattern recognition", "Complex logical tasks", "Image processing", "Audio recognition"], correct: 1 },
        { question: "23. Symbolic AI systems are typically designed to operate using:", options: ["Probabilistic reasoning", "Logical inference", "Unsupervised clustering", "Genetic algorithms"], correct: 1 },
        { question: "24. Which programming paradigm is most closely associated with symbolic AI?", options: ["Functional programming", "Procedural programming", "Logic programming", "Object-oriented programming"], correct: 2 },
    { question: "25. What is one of the main limitations of symbolic AI?", options: ["High data requirements", "Difficulties in complex reasoning", "Limited ability to handle uncertainty", "Poor performance in deterministic environments"], correct: 2 },
    { question: "26. The 'frame problem' in symbolic AI refers to:", options: ["Difficulty in representing neural structures", "Inability to solve complex computations", "Challenge in updating beliefs in changing environments", "Issues with storing data"], correct: 2 },
    { question: "27. Which of these AI applications is a classic example of symbolic AI?", options: ["Convolutional neural networks", "Natural language processing", "Chess-playing algorithms", "Image classification"], correct: 2 },
    { question: "28. Which of these is a symbolic AI language designed for complex logical reasoning?", options: ["SQL", "Lisp", "PHP", "Ruby"], correct: 1 },
    { question: "29. A drawback of symbolic AI systems is that they:", options: ["Are difficult to interpret", "Require continuous data input", "Often cannot generalize well to new situations", "Lack structured rules"], correct: 2 },
    { question: "30. In symbolic AI, a knowledge base typically consists of:", options: ["Neural connections", "Mathematical models", "Facts and rules", "Raw images"], correct: 2 },
    { question: "31. Which of these tasks would symbolic AI struggle with?", options: ["Diagnosing a known medical condition", "Translating languages with nuanced meanings", "Solving algebraic equations", "Playing chess with predefined rules"], correct: 1 },
    { question: "32. A symbolic AI model is likely to require:", options: ["A large, labeled dataset", "Manually defined rules and facts", "An unsupervised learning model", "A convolutional neural network"], correct: 1 },
    { question: "33. Which of the following is commonly a part of the symbolic AI workflow?", options: ["Training large datasets", "Adjusting neural network weights", "Defining if-then rules", "Reducing dimensionality"], correct: 2 },
    { question: "34. What type of reasoning does symbolic AI most often utilize?", options: ["Inductive reasoning", "Deductive reasoning", "Probabilistic reasoning", "Empirical reasoning"], correct: 1 },
    { question: "35. Which of the following concepts is unique to symbolic AI?", options: ["Neural architectures", "Training epochs", "Knowledge bases", "Hyperparameters"], correct: 2 },
    { question: "36. Symbolic AI systems are particularly suited for:", options: ["Real-time image processing", "Long-term prediction tasks", "Structured problem-solving", "Sensory data analysis"], correct: 2 },
    { question: "37. Symbolic AI differs from sub-symbolic AI in that it:", options: ["Processes sensory data directly", "Relies on symbolic representations", "Uses unsupervised learning", "Requires a neural network structure"], correct: 1 },
    { question: "38. An inference engine in symbolic AI is best described as a:", options: ["Set of stored neural weights", "Mathematical optimizer", "Rule-based processor", "Data storage component"], correct: 2 },
    { question: "39. The role of a knowledge base in symbolic AI is to:", options: ["Store machine learning models", "Represent the system's knowledge", "Optimize neural connections", "Cluster unstructured data"], correct: 1 },
    { question: "40. Symbolic AI's approach to decision-making is best described as:", options: ["Data-driven", "Heuristic-based", "Logic-based", "Stochastic"], correct: 2 },
    { question: "41. Which of the following is an example of a machine learning algorithm?", options: ["Linear regression", "HTML", "SQL", "CSS"], correct: 0 },
    { question: "42. Which of the following AI applications uses natural language processing (NLP)?", options: ["Speech recognition", "Image recognition", "Game playing", "Weather forecasting"], correct: 0 },
    { question: "43. What is the primary challenge in symbolic AI for real-world applications?", options: ["Lack of scalability", "Over-reliance on neural networks", "High computational costs", "Inability to perform logical tasks"], correct: 0 },
    { question: "44. Which of these methods is NOT typically associated with symbolic AI?", options: ["Knowledge engineering", "Logical reasoning", "Gradient descent", "Rule-based inference"], correct: 2 },
    { question: "45. What is a distinguishing feature of expert systems in symbolic AI?", options: ["Self-learning capabilities", "Manually crafted rule sets", "Use of hidden layers", "Reliance on unstructured data"], correct: 1 },
    { question: "46. How does symbolic AI handle uncertainty in decision-making?", options: ["Through fuzzy logic", "By training on large datasets", "Using probabilistic neural networks", "Through direct sensory input"], correct: 0 },
    { question: "47. Which of these is considered a pioneering system in symbolic AI?", options: ["AlphaGo", "MYCIN", "GPT-3", "YOLO"], correct: 1 },
    { question: "48. Which feature makes symbolic AI transparent in decision-making?", options: ["Black-box models", "Explicit rules and logic", "Hidden layers", "Complex data embeddings"], correct: 1 },
    { question: "49. Which symbolic AI component performs logical deductions?", options: ["Knowledge base", "Inference engine", "Neural network", "Decision tree"], correct: 1 },
    { question: "50. In symbolic AI, what is typically required to solve a problem?", options: ["Massive datasets", "Knowledge base and inference rules", "Deep neural architectures", "Data-driven optimization"], correct: 1 }
],

  

};


let currentLanguage = "HTML";
let currentQuestionIndex = 0;
let score = 0;

function loadQuestion() {
  const questions = quizData[currentLanguage];
  const questionData = questions[currentQuestionIndex];
  document.getElementById("language-title").innerText = `Language: ${currentLanguage}`;
  document.getElementById("question").innerText = questionData.question;
  const optionButtons = document.querySelectorAll(".option");
  optionButtons.forEach((button, index) => {
    button.innerText = questionData.options[index];
    button.className = "option"; // Reset button styles
    button.disabled = false; // Enable buttons
  });
  document.getElementById("next-btn").style.display = "none";
}

function checkAnswer(button, index) {
  const questions = quizData[currentLanguage];
  const questionData = questions[currentQuestionIndex];
  const optionButtons = document.querySelectorAll(".option");

  if (index === questionData.correct) {
    button.classList.add("correct");
    score++; // Increment score for correct answer
  } else {
    button.classList.add("wrong");
    optionButtons[questionData.correct].classList.add("correct");
  }

  optionButtons.forEach((btn) => (btn.disabled = true)); // Disable all buttons
  document.getElementById("next-btn").style.display = "block";
}

function nextQuestion() {
  const questions = quizData[currentLanguage];
  if (currentQuestionIndex < questions.length - 1) {
    currentQuestionIndex++;
    loadQuestion();
  } else {
    const languages = Object.keys(quizData);
    const currentLanguageIndex = languages.indexOf(currentLanguage);
    if (currentLanguageIndex < languages.length - 1) {
      currentLanguage = languages[currentLanguageIndex + 1];
      currentQuestionIndex = 0;
      loadQuestion();
    } else {
      showFinalScore();
    }
  }
}

function showFinalScore() {
  document.querySelector(".quiz-container").innerHTML = `
    <h1>Quiz Completed!</h1>
    <p>Your final score is: ${score}</p>
    <button onclick="restartQuiz()">Restart Quiz</button>
  `;
}

function restartQuiz() {
  currentLanguage = "HTML";
  currentQuestionIndex = 0;
  score = 0;
  loadQuestion();
}

// Initial load
loadQuestion();