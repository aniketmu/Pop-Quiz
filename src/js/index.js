// The following code starts Mock Service Worker tool which allows you to simulate a backend (an API) for building your apps that talk to a remote service. You can visit https://mswjs.io for details on this utility and check src/api/routes.js for a sample API route that you can edit/create as needed to simulate a real world API. This simulated backend will not be part of the completed application (built edition) and you must use a real world backend built using Node.js + Express or Java + Spring Boot to provide such a service.

// If you do not require a simulated backend, you can remove the code shown below.

var currtopic;
var currquestionIndex = 0;
var currscore = 0;
var selectedAnswers = {}; 

var subject1 = document.getElementById("music");
var subject2 = document.getElementById("modern-Art");
var subject3 = document.getElementById("coding")

subject1.addEventListener("click", ()=>{
  startQuiz('music')
})

subject2.addEventListener("click", ()=>{
  startQuiz('modern-Art')
})

subject3.addEventListener("click", ()=>{
  startQuiz('coding')
})

window.addEventListener("load", function () {
  checkTopic("music");
  checkTopic("modern-Art");
  checkTopic("coding");
});

function checkTopic(topic) {
  let data = localStorage.getItem(topic);
  if (data) {
    document.getElementById(topic).style.pointerEvents = "none";
    document.getElementById(topic).style.opacity = "0.5";
  }
}

let problems = {
  music: [
    {
      id: 1,
      question: "Which of the following is not a type of music notation?",
      options: [
        "Standard notation",
        "Tab notation",
        "Morse code notation",
        "Graphics notation",
      ],
      answer: "Morse code notation",
      category: "music",
    },
    {
      id: 2,
      question: "What is the most common time signature in classical music?",
      options: ["3/4", "4/4", "5/4", "6/8"],
      answer: "4/4",
      category: "music",
    },
    {
      id: 3,
      question:
        "Which of the following is not a type of instrument in a symphony orchestra?",
      options: ["Violin", "Piano", "Harp", "Theremin"],
      answer: "Theremin",
      category: "music",
    },
    {
      id: 4,
      question: "What is the most common key in pop music?",
      options: ["C Major", "G Major", "D Major", "A Major"],
      answer: "C Major",
      category: "music",
    },
    {
      id: 5,
      question: "Which of the following is not a type of chord?",
      options: ["Major", "Minor", "Diminished", "Flat"],
      answer: "Flat",
      category: "music",
    },
    {
      id: 6,
      question: "Which of the following is not a type of music genre?",
      options: ["Jazz", "Blues", "Rock", "Applesauce"],
      answer: "Applesauce",
      category: "music",
    },
    {
      id: 7,
      question: "Which of the following is not a type of music theory?",
      options: ["Harmony", "Counterpoint", "Form", "Cooking"],
      answer: "Cooking",
      category: "music",
    },
    {
      id: 8,
      question: "What is the most common tempo marking in classical music?",
      options: ["Allegro", "Andante", "Adagio", "Moderato"],
      answer: "Allegro",
      category: "music",
    },
    {
      id: 9,
      question: "Which of the following is not a type of musical form?",
      options: ["Sonata", "Symphony", "Concerto", "Spaghetti"],
      answer: "Spaghetti",
      category: "music",
    },
    {
      id: 10,
      question:
        "Which of the following is not a type of music notation software?",
      options: ["Sibelius", "Finale", "MuseScore", "Microsoft Word"],
      answer: "Microsoft Word",
      category: "music",
    },
  ],
  "modern-Art": [
    {
      id: 11,
      question: "Which artist is known for coining the term 'Surrealism'?",
      options: [
        "Pablo Picasso",
        "Salvador Dali",
        "Vincent van Gogh",
        "Henri Matisse",
      ],
      answer: "Salvador Dali",
      category: "modern-art",
    },
    {
      id: 12,
      question:
        "Which movement is associated with the use of abstract forms and shapes in art?",
      options: ["Impressionism", "Expressionism", "Futurism", "Cubism"],
      answer: "Cubism",
      category: "modern-art",
    },
    {
      id: 13,
      question:
        "Which artist is known for painting the work 'The Persistence of Memory'?",
      options: [
        "Pablo Picasso",
        "Salvador Dali",
        "Vincent van Gogh",
        "Henri Matisse",
      ],
      answer: "Salvador Dali",
      category: "modern-art",
    },
    {
      id: 14,
      question: "Which artist is known for creating the painting 'The Scream'?",
      options: [
        "Vincent van Gogh",
        "Salvador Dali",
        "Edvard Munch",
        "Claude Monet",
      ],
      answer: "Edvard Munch",
      category: "modern-art",
    },
    {
      id: 15,
      question:
        "What movement was associated with the use of bold, bright colors and thick brushstrokes?",
      options: ["Impressionism", "Expressionism", "Fauvism", "Cubism"],
      answer: "Fauvism",
      category: "modern-art",
    },
    {
      id: 16,
      question:
        "What movement was associated with the use of bright colors, simplified forms, and a focus on movement and speed",
      options: [
        "Impressionism",
        "Futurism",
        "Surrealism",
        "Abstract Expressionism",
      ],
      answer: "Futurism",
      category: "modern-art",
    },
    {
      id: 17,
      question:
        "Which artist is known for creating the painting 'Water Lilies'?",
      options: ["Claude Monet", "Paul Cezanne", "Paul Gauguin", "Paul Klee"],
      answer: "Claude Monet",
      category: "modern-art",
    },
    {
      id: 18,
      question:
        "Which artist is known for creating the painting 'Les Demoiselles d'Avignon'?",
      options: [
        "Henri Matisse",
        "Vincent van Gogh",
        "Salvador Dali",
        "Pablo Picasso",
      ],
      answer: "Pablo Picasso",
      category: "modern-art",
    },
    {
      id: 19,
      question: "Which artist is known for creating the painting 'Guernica'?",
      options: [
        "Claude Mone",
        "Paul Cezanne",
        "Pablo Picasso",
        "Vincent van Gogh",
      ],
      answer: "Pablo Picasso",
      category: "modern-art",
    },
    {
      id: 20,
      question:
        "Which artist is known for creating the sculpture 'The Thinker'?",
      options: ["Auguste Rodin", "Alexander Calder", "Jean Arp", "Henry Moore"],
      answer: "Auguste Rodin",
      category: "modern-art",
    },
  ],

  coding: [
    {
      id: 21,
      question: "What is the correct syntax for an if statement in Python?",
      options: [
        "if (condition):",
        "if condition",
        "if: condition",
        "if condition:",
      ],
      answer: "if condition:",
      category: "coding",
    },
    {
      id: 22,
      question: "Which of the following is not a data type in JavaScript?",
      options: ["String", "Number", "Boolean", "ArrayList"],
      answer: "ArrayList",
      category: "coding",
    },
    {
      id: 23,
      question: "Which of the following is used to declare a variable in Java?",
      options: ["var", "let", "const", "int"],
      answer: "int",
      category: "coding",
    },
    {
      id: 24,
      question: "What is the correct syntax for a for loop in C#?",
      options: [
        "for i = 0 to 10",
        "for (i = 0; i <= 10; i++)",
        "for (int i = 0; i <= 10)",
        "for i in range(0, 10)",
      ],
      answer: "for (i = 0; i <= 10; i++)",
      category: "coding",
    },
    {
      id: 25,
      question: "Which of the following is not a looping structure in PHP?",
      options: ["while", "for", "do-while", "foreach"],
      answer: "foreach",
      category: "coding",
    },
    {
      id: 26,
      question: "Which of the following is not a valid operator in C++?",
      options: ["+", "-", "*", "$"],
      answer: "$",
      category: "coding",
    },
    {
      id: 27,
      question:
        "In which programming language is 'print' used for displaying output?",
      options: ["Python", "JavaScript", "Java", "C++"],
      answer: "Python",
      category: "coding",
    },
    {
      id: 28,
      question: "What is the correct syntax for a function in Ruby?",
      options: ["function name()", "def name", "function name", "def name()"],
      answer: "def name()",
      category: "coding",
    },
    {
      id: 29,
      question: "Which of the following is not a type of variable in Swift?",
      options: ["Int", "String", "Double", "Object"],
      answer: "Object",
      category: "coding",
    },
    {
      id: 30,
      question: "In which programming language is '#' used for commenting?",
      options: ["Python", "JavaScript", "Java", "C++"],
      answer: "C++",
      category: "coding",
    },
  ],
};

function startQuiz(topic) {
  currtopic = topic;
  currquestionIndex = 0;
  currscore = 0;
  selectedAnswers = {}; 

  document.getElementById("container").style.display = "none";
  document.getElementById("quizQuestions").style.display = "block";

  showQuestion();
}

function showQuestion() {
  var questions = document.getElementById("questions");
  var options = document.getElementById("options");

  options.innerHTML = "";

  questions.textContent = problems[currtopic][currquestionIndex].question;
  problems[currtopic][currquestionIndex].options.forEach((option, index) => {
    var li = document.createElement("li");
    li.style.listStyle = "none";

    var radio = document.createElement("input");
    radio.type = "radio";
    radio.name = "answer";
    radio.value = option;
    radio.id = index;
    li.appendChild(radio);

    var label = document.createElement("label");
    label.textContent = option;
    label.setAttribute("for", "option" + index);
    li.appendChild(label);

    options.appendChild(li);
  });

  if (selectedAnswers.hasOwnProperty(currquestionIndex)) {
    var selectedOption = selectedAnswers[currquestionIndex];
    var radioButtons = document.querySelectorAll('input[name="answer"]');
    radioButtons[selectedOption].checked = true;
  }

  var nextButton = document.getElementById("nextQtn");
  nextButton.addEventListener("click", function () {
    var selectedOption = document.querySelector('input[name="answer"]:checked');
    if (selectedOption) {
      var userAnswer = selectedOption.value;
      selectedAnswers[currquestionIndex] = selectedOption.id; 
      localStorage.setItem(
        problems[currtopic][currquestionIndex].id,
        userAnswer
      );
      if (userAnswer === problems[currtopic][currquestionIndex].answer) {
        currscore++;
      }
      currquestionIndex++;

      if (currquestionIndex < problems[currtopic].length) {
        showQuestion();
      } else {
        endQuiz();
      }
    }
  });
}

var prevButton = document.getElementById("prevQtn");
prevButton.addEventListener("click", () => {
  if (currquestionIndex > 0) {
    currquestionIndex--;
    showQuestion();
    disableRadioButtons();
  }
});

function disableRadioButtons() {
  var radioButtons = document.querySelectorAll('input[name="answer"]');
  radioButtons.forEach((radio) => {
    radio.disabled = true;
  });
}

function endQuiz() {
  localStorage.setItem(currtopic, "completed");
  var container = document.getElementById("quizCompletion");
  container.innerHTML =
    "<h2>Quiz Completed!</h2><p>Your score is: " + currscore + "</p>";
  container.style.display = "block";
  document.getElementById("container").style.display = "none";
  document.getElementById("quizQuestions").style.display = "none";

  problems[currtopic].forEach((question, index) => {
    let data = localStorage.getItem(question.id);
    var result = document.createElement("p");
    result.textContent = "Question " + (index + 1) + ": ";
    if (question.answer === data) {
      result.textContent += question.answer + " - " + "Correct";
      result.classList.add("correct");
    } else {
      result.textContent +=
        "Incorrect," + " correct answer: " + question.answer;
      result.classList.add("incorrect");
    }
    container.appendChild(result);
  });
}
