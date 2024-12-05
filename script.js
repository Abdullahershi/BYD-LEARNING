if (
  window.location.pathname === '/index.html' ||
  window.location.pathname === '/about.html' ||
    window.location.pathname === '/games.html' ||
    window.location.pathname === 'Login.html' ||
  window.location.pathname === '/aimal.html' ||
  window.location.pathname === '/tilan.html' ||
  window.location.pathname === '/alhutheily.html'||
  window.location.pathname === '/anthony.html' ||
  window.location.pathname === '/darwin.html' ||
  window.location.pathname === '/mia.html' ||
  window.location.pathname === '/ahamd.html' ||
  window.location.pathname === '/nihad.html'  ||
  window.location.pathname === '/courses.html'  ||
  window.location.pathname === '/tictac.html'  ||
  window.location.pathname === '/ghost.html'
) 
{
 

'use strict';

///////////////////////////////////////
//*---------------------- Elements

// MODAL
const modal = document.querySelector('.modal');
const overlay = document.querySelector('.overlay');
const btnCloseModal = document.querySelector('.btn--close-modal');
const btnsOpenModal = document.querySelectorAll('.btn--show-modal');
// BUTTON SCROLL
const btnScrollTo = document.querySelector('.btn--scroll-to');
const section1 = document.querySelector('#section--1');
// TABS COMPONENT
const tabs = document.querySelectorAll('.operations__tab');
const tabsContainer = document.querySelector('.operations__tab-container');
const tabsContent = document.querySelectorAll('.operations__content');
// FADE OUT ANIMATION
const nav = document.querySelector('.nav');
// STICKY NAVIGATION
const header = document.querySelector('.header');

///////////////////////////////////////
//*--------------------- Modal window

const openModal = function (e) {
  e.preventDefault();
  modal.classList.remove('hidden');
  overlay.classList.remove('hidden');
};

const closeModal = function () {
  modal.classList.add('hidden');
  overlay.classList.add('hidden');
};
// add event listener to each btn
btnsOpenModal.forEach(btn => btn.addEventListener('click', openModal));

btnCloseModal.addEventListener('click', closeModal);
overlay.addEventListener('click', closeModal);
// close the modal with escape
document.addEventListener('keydown', function (e) {
  if (e.key === 'Escape' && !modal.classList.contains('hidden')) {
    closeModal();
  }
});

//*-------------------------- button scrolling
btnScrollTo.addEventListener('click', function (e) {
  // work only in new browser
  // we select the element we want to go to
  section1.scrollIntoView({ behavior: 'smooth' });
});

//*--------------------- link navigation

// we use the delegation strategy
document.querySelector('.nav__links').addEventListener('click', function (e) {
    ;

  // Matching strategy
  if (e.target.classList.contains('nav__link')) {
    const id = e.target.getAttribute('href');
    document.querySelector(id).scrollIntoView({ behavior: 'smooth' });
  }
});

//*----------------- tab component

tabsContainer.addEventListener('click', function (e) {
  // Matching condition
  const clicked = e.target.closest('.operations__tab');

  // GARD clause
  // avoid click out of the buttons so it will go out of the function
  if (!clicked) return;

  // remove the active class from all the tabs
  tabs.forEach(t => t.classList.remove('operations__tab--active'));
  // add the active class for the clicked tab
  clicked.classList.add('operations__tab--active');

  // hide the content from the all [remove the content]
  tabsContent.forEach(c => c.classList.remove('operations__content--active'));

  // Show activate content
  document
    .querySelector(`.operations__content--${clicked.dataset.tab}`)
    .classList.add('operations__content--active');
});

//*----------------------- Menu fade animation

const handelHover = function (e) {
  if (e.target.classList.contains('nav__link')) {
    const link = e.target;

    const siblings = link.closest('nav').querySelectorAll('.nav__link');

    const logo = link.closest('.nav').querySelector('img');

    siblings.forEach(el => {
      // so we don't choose the hovered element
      if (el !== link) el.style.opacity = this; // opacity
    });
    logo.style.opacity = this; //opacity
  }
};

// nav.addEventListener('mouseover', function (e) {
//   handelHover(e, 0.5);
// });

// nav.addEventListener('mouseout', function (e) {
//   handelHover(e, 1);
// });

nav.addEventListener('mouseover', handelHover.bind(0.5));
nav.addEventListener('mouseout', handelHover.bind(1));

//*------------------- sticky navigation

const navHeight = nav.getBoundingClientRect().height;
const stickyNav = function (entires, observer) {
  const [entry] = entires;
  // the entry is a special kind of object that has the observer
  // the number of entires depend on the number of thresholds

  // logic
  if (!entry.isIntersecting) nav.classList.add('sticky');
  else nav.classList.remove('sticky');
};

const headerObserver = new IntersectionObserver(stickyNav, {
  root: null,
  // null mean relate to the whole viewport
  threshold: 0,
  rootMargin: `-${navHeight}px`,
});
headerObserver.observe(header);


const allSections = document.querySelectorAll('.section');
const revealSection = function (entires, observer) {
  const [entry] = entires;
  // the entry.target is the element that has been observed

  if (!entry.isIntersecting) return;
  entry.target.classList.remove('section--hidden');
  // stop observing
  observer.unobserve(entry.target);
};

const sectionObserver = new IntersectionObserver(revealSection, {
  root: null,
  threshold: 0.15,
});
allSections.forEach(function (section) {
  sectionObserver.observe(section);
});

//*-------------------------- lazy load images
const imgTargets = document.querySelectorAll('img[data-src]');

const loadImage = function (entires, observer) {
  const [entry] = entires;

  if (!entry.isIntersecting) return;

  // replace src with data-src
  entry.target.src = entry.target.dataset.src;

  entry.target.addEventListener('load', function (e) {
    entry.target.classList.remove('lazy-img');
  });

  // stop observer
  observer.unobserve(entry.target);
};

const imageObserver = new IntersectionObserver(loadImage, {
  root: null,
  threshold: 0,
  rootMargin: '200px',
});

imgTargets.forEach(img => imageObserver.observe(img));

//*------------------ slider component

const sliders = function () {
  const slides = document.querySelectorAll('.slide');
  let currentSlide = 0;
  const maxSlide = slides.length;
  const btnLeft = document.querySelector('.slider__btn--left');
  const btnRight = document.querySelector('.slider__btn--right');
  const dotContainer = document.querySelector('.dots');

  const createDots = function () {
    slides.forEach((_, i) => {
      dotContainer.insertAdjacentHTML(
        'beforeend',
        `<button class="dots__dot" data-slide="${i}"></button>`
      );
    });
  };

  const activateDot = function (slide) {
    // remove the class from all the dots
    document
      .querySelectorAll('.dots__dot')
      .forEach(dot => dot.classList.remove('dots__dot--active'));

    // add the active class
    document
      .querySelector(`.dots__dot[data-slide="${slide}"]`)
      .classList.add('dots__dot--active');
  };

  const goToSlide = function (slide) {
    slides.forEach(
      (s, i) => (s.style.transform = `translateX(${(i - slide) * 100}%)`)
    );
  };

  const nextSlide = function () {
    if (currentSlide === maxSlide - 1) {
      currentSlide = 0;
    } else {
      currentSlide++;
    }
    goToSlide(currentSlide);
    activateDot(currentSlide);
  };

  const previousSlide = function () {
    if (currentSlide === 0) {
      currentSlide = maxSlide - 1;
    } else {
      currentSlide--;
    }
    goToSlide(currentSlide);
    activateDot(currentSlide);
  };

  const init = function () {
    goToSlide(0);
    createDots();
    activateDot(0);
  };
  init();
  // next slide
  btnRight.addEventListener('click', nextSlide);

  // previous slide
  btnLeft.addEventListener('click', previousSlide);

  //----- keyboard navigation
  document.addEventListener('keydown', function (e) {
    if (e.key === 'ArrowLeft') previousSlide();
    e.key === 'ArrowRight' && nextSlide();
  });

  //-------- dots navigation
  dotContainer.addEventListener('click', function (e) {
    if (e.target.classList.contains('dots__dot')) {
      const slide = e.target.dataset.slide;
      goToSlide(slide);
      activateDot(slide);
    }
  });
};
sliders();

//------------ mobile nav
const navBtn = document.querySelector('.btn-mobile-nav');

// navBtn.addEventListener('click', function () {
//   nav.classList.toggle('nav--open');
// });

nav.addEventListener('click', function (e) {
  // if (e.target === navBtn) return;
  nav.classList.toggle('nav--open');
});


// CHATBOT
const chatbotButton = document.getElementById("chatbotButton");
const chatContainer = document.getElementById("chatContainer");
const chatLog = document.getElementById("chatLog");
const userInput = document.getElementById("userInput");
const sendButton = document.getElementById("sendButton");

let isChatOpen = false;

chatbotButton.addEventListener("click", () => {
  if (isChatOpen) {
    chatContainer.style.width = "400px";
    chatContainer.style.height = "400px";
  } else {
    chatContainer.style.width = "400px";
    chatContainer.style.height = "400px";
  }
  chatContainer.style.display = isChatOpen ? "none" : "block";
  isChatOpen = !isChatOpen;
});

// Add an event listener to detect when the chatbot container is active.
chatContainer.addEventListener("click", () => {
  chatContainer.classList.add("active");
  document.body.style.overflow = "hidden"; // Disable scrolling on the body
  chatLog.style.overflowY = "scroll"; // Enable scrolling for chat log
});

// Add an event listener to detect when the chatbot container is closed.
document.addEventListener("click", (event) => {
  if (!chatContainer.contains(event.target)) {
    chatContainer.classList.remove("active");
    document.body.style.overflow = "auto"; // Re-enable scrolling on the body
    chatLog.style.overflowY = "hidden"; // Disable scrolling for chat log
  }
});

document.addEventListener("click", (event) => {
  if (isChatOpen && !chatContainer.contains(event.target) && !chatbotButton.contains(event.target)) {
    chatContainer.style.display = "none";
    isChatOpen = false;
  }
});

sendButton.addEventListener("click", () => {
  sendMessage();
});

userInput.addEventListener("keydown", (event) => {
  if (event.key === "Enter") {
    sendMessage();
  }
});

function sendMessage() {
  const userMessage = userInput.value;
  if (userMessage.trim() === "") return;

  appendMessage(userMessage, "user");
  respondToUser(userMessage);
  userInput.value = "";
}

function appendMessageWithDelay(message, sender, delay) {
  setTimeout(() => {
    appendMessage(message, sender);
  }, delay);
}

function appendMessage(message, sender) {
  const messageElement = document.createElement("div");
  messageElement.className = `chat-message ${sender}`;
  messageElement.textContent = message;
  chatLog.appendChild(messageElement);
  chatLog.scrollTop = chatLog.scrollHeight;
}

function appendMessage(message, sender) {
  const messageElement = document.createElement("div");
  messageElement.className = `chat-message ${sender}`;
  messageElement.textContent = message.replace(/\n/g, "<br>");
  messageElement.innerHTML = message;
  chatLog.appendChild(messageElement);
  chatLog.scrollTop = chatLog.scrollHeight;
}

function respondToUser(userMessage) {
  const lowercaseMessage = userMessage.toLowerCase();

  if (lowercaseMessage === "hi" || lowercaseMessage === "hello" || lowercaseMessage === "howdy" || lowercaseMessage === "sup"
  || lowercaseMessage === "yo" || lowercaseMessage === "how far" || lowercaseMessage === "hey" || lowercaseMessage === "good morning"
  || lowercaseMessage === "good afternoon" || lowercaseMessage === "good afternoon") {
    const responses = [
      ["Hi there!", "I am Robby!", "I will guide you through our website","You can ask me a bunch of things!",
      "• Perhaps you want to know what our website has to <span style='color: blue;'>offer</span>.",
      "• Or you'd like to quickly <span style='color: blue;'>navigate</span> somewhere.",
      "• Maybe you are daring enough to take a part in our <span style='color: blue;'>quizzes</span>."
      ,"• Albeit you want to test your skills in one of our fine <span style='color: blue;'>games</span>.",
      "• Type commands for a list of every <span style='color: blue;'>commands</span>."],
      
      ["Hello!", "My name is Robby.", "I will guide you through our website","You can ask me a bunch of things!",
      "• Perhaps you want to know what our website has to <span style='color: blue;'>offer</span>.",
      "• Or you'd like to quickly <span style='color: blue;'>navigate</span> somewhere.",
      "• Maybe you are daring enough to take a part in our <span style='color: blue;'>quizzes</span>."
      ,"• Albeit you want to test your skills in one of our fine <span style='color: blue;'>games</span>.",
      "• Type commands for a list of every <span style='color: blue;'>commands</span>."]
      // You can add more arrays with different response combinations
    ];

    const randomIndex = Math.floor(Math.random() * responses.length);
    const randomResponse = responses[randomIndex];

    appendMessage(randomResponse[0], "bot");
    setTimeout(() => {
      appendMessage(randomResponse[1], "bot");
    }, 500);
    setTimeout(() => {
      appendMessage(randomResponse[2], "bot");
    }, 800);
    setTimeout(() => {
      appendMessage(randomResponse[3], "bot");
    }, 1200);
    setTimeout(() => {
      appendMessage(randomResponse[4], "bot");
    }, 1600);
    setTimeout(() => {
      appendMessage(randomResponse[5], "bot");
    }, 2200);
    setTimeout(() => {
      appendMessage(randomResponse[6], "bot");
    }, 2800);
    setTimeout(() => {
      appendMessage(randomResponse[7], "bot");
    }, 3400);
    setTimeout(() => {
      appendMessage(randomResponse[8], "bot");
    }, 4000);
  
    
    
  } else if (lowercaseMessage === "navigate") {
    appendMessageWithDelay("Navigate where ?","bot");
    appendMessageWithDelay("You can go to the following pages we have !","bot", 500);
    appendMessageWithDelay("Either click or say the keywords to Go!","bot", 1000);
    appendMessageWithDelay("<a href='./index.html'>Home</a> page","bot", 1500);
    appendMessageWithDelay("<a href='./about.html'>About</a> page","bot",1500);
    appendMessageWithDelay("Resource section","bot",1500);
    appendMessageWithDelay("<a href='./game.html'>Games</a> arena","bot",1500);
    appendMessageWithDelay("Quiz area","bot",1500);

 
  } else if (lowercaseMessage.includes("home")) {
    // Redirect to the website URL when the keyword is detected
    window.location.href = "./index.html";

  } else if (lowercaseMessage.includes("about")) {
    window.location.href = "./about.html";

  } else if (lowercaseMessage.includes("games")) {
    window.location.href = "./game.html";

  } else if (lowercaseMessage.includes("quiz")) {
    window.location.href = "./quiz.html";

// names
  } else if (lowercaseMessage.includes("aimal")) {
    window.location.href = "./aimal.html";  
  
  } else if (lowercaseMessage.includes("tilan")) {
    window.location.href = "./tilan.html";  
    
  } else if (lowercaseMessage.includes("ahmad")) {
    window.location.href = "./ahmad.html";

  } else if (lowercaseMessage.includes("darwin")) {
    window.location.href = "./darwin.html";

  } else if (lowercaseMessage.includes("mia")) {
    window.location.href = "./mia.html";

  } else if (lowercaseMessage.includes("nihad")) {
    window.location.href = "./nihad.html";

  } else if (lowercaseMessage.includes("mohammed")) {
    window.location.href = "./mohammed.html";

  } else if (lowercaseMessage.includes("anthony")) {
    window.location.href = "./anthony.html";

// names end

 } else if (lowercaseMessage === "commands") {
    appendMessageWithDelay("You can type the Names of our members to go to their about page !","bot");
    appendMessageWithDelay("• Aimal<br>• Tilan<br>• Ahmad<br>• Darwin<br>• Mia<br>• Nihad<br>• Mohammed<br>• Anthony","bot", 500);
    
  } else if (lowercaseMessage === "question2") {
    appendMessage("Response 1 for question 2", "bot");
    appendMessage("Let me provide you with some information.", "bot");
  } else {
    const defaultResponses = [
      "I'm here to help!",
      "That's an interesting question.",
      "Tell me more.",
      "Is there anything else you'd like to know?"
    ];

    const randomResponse = defaultResponses[Math.floor(Math.random() * defaultResponses.length)];

    appendMessage(randomResponse, "bot");
  }


  setTimeout(() => {
    appendMessage(response, "bot");
  }, 500);
}


}



// quiz js

const quizData = [
  {
      question: "What is the capital of France?",
      choices: ["A. London", "B. Berlin", "C. Paris", "D. Madrid"],
      correct: 2,
  },
  {
      question: "Which planet is known as the Red Planet?",
      choices: ["Mars", "Venus", "Earth", "Jupiter"],
      correct: 0,
  },
  {
      question: "What is 7 x 3?",
      choices: ["21", "24", "18", "27"],
      correct: 0,
  },
];

let currentQuestion = 0;
let score = 0;
let selectedAnswer = null;

const questionText = document.getElementById("question-text");
const choicesContainer = document.getElementById("choices-container");
const resultContainer = document.getElementById("result-container");
const nextButton = document.getElementById("next-btn");

function startQuiz() {
    loadQuestion();
}

function loadQuestion() {
    const currentQuizData = quizData[currentQuestion];
    questionText.innerText = currentQuizData.question;

    for (let i = 0; i < 4; i++) {
        const choiceBtn = choicesContainer.children[i];
        choiceBtn.innerText = currentQuizData.choices[i];
        choiceBtn.classList.remove("selected");
    }

    choicesContainer.classList.remove("hidden");
    resultContainer.classList.add("hidden");
    nextButton.disabled = true;
    nextButton.style.display = "block"; // Always display the "Next" button
}

function selectAnswer(choice) {
    selected
}

// Smooth scrolling for navigation
document.querySelectorAll('.nav-link11').forEach(anchor => {
  anchor.addEventListener('click', function (e) {
    e.preventDefault();
    document.querySelector(this.getAttribute('href')).scrollIntoView({
      behavior: 'smooth'
    });
  });
});

// Add animation to table cells on hover
document.querySelectorAll('.table11 td').forEach(cell => {
  cell.addEventListener('mouseover', () => {
    cell.style.transition = 'background-color 0.3s ease-in-out';
    cell.style.backgroundColor = '#dcedc8';
  });
  cell.addEventListener('mouseout', () => {
    cell.style.backgroundColor = '';
  });
});
