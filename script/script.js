
//variables
var quiz = [];
quiz[0] = new Question("What is the IPv6 address used by OSPFv3 non-DR/BDR routers to send, link-state updates and link-state acknowledgments?",
"FF02::6",
"FF02::5",
"FF02::2",
"FF02::9");
quiz[1] = new Question("What color is blood?",
"Red",
"White",
"Green",
"Yellow");
quiz[2] = new Question("On an OSPF multiaccess network, which multicast address must a non-DR router use to send an LSU packet that contains new link-state information?",
"224.0.0.6",
"224.0.0.1",
"224.0.0.5",
"224.0.0.9");
quiz[3] = new Question("How many legs does a spider have?",
"8",
"6",
"4",
"10");
quiz[4] = new Question("Who is the king of the Netherlands?",
"Willem-Alexander",
"Willem-Alexzelf",
"Willem-Alexniemand",
"Frederik");
quiz[5] = new Question("What is 2-2?",
"0",
"2",
"4",
"6");
quiz[6] = new Question("What was Vincent van Gogh?",
"Artist",
"Baker",
"Jobless",
"Musician");
var randomQuestion;
var answers = [];
var currentScore = 0;

document.addEventListener("DOMContentLoaded", function(event) {
    btnProvideQuestion();
    });

    function Question(question,rightAnswer,wrongAnswer1,wrongAnswer2, wrongAnswer3) {
        this.question = question;
        this.rightAnswer = rightAnswer;
        this.wrongAnswer1 = wrongAnswer1;
        this.wrongAnswer2 = wrongAnswer2;
        this.wrongAnswer3 = wrongAnswer3;
        };

        function shuffle(o) {
            for(var j, x, i = o.length; i; j = parseInt(Math.random() * i), x = o[--i], o[i] = o[j], o[j] = x);
            return o;
            };

            function btnProvideQuestion() {

                var randomNumber = Math.floor(Math.random()*quiz.length);
                randomQuestion = quiz[randomNumber]; //getQuestion
                answers = [randomQuestion.rightAnswer, randomQuestion.wrongAnswer1, randomQuestion.wrongAnswer2, randomQuestion.wrongAnswer3];
                shuffle(answers);

  document.getElementById("question").innerHTML= randomQuestion.question;
  document.getElementById("answerA").value= answers[0];
  document.getElementById("answerA").innerHTML= answers[0];
  document.getElementById("answerB").value= answers[1];
  document.getElementById("answerB").innerHTML= answers[1];
  document.getElementById("answerC").value= answers[2];
  document.getElementById("answerC").innerHTML= answers[2];
  document.getElementById("answerD").value= answers[3];
  document.getElementById("answerD").innerHTML= answers[3];

}

function answerA_clicked() {
  var answerA = document.getElementById("answerA").value;
  	checkAnswer(answerA);
}

function answerB_clicked() {
		var answerB = document.getElementById("answerB").value;
  checkAnswer(answerB);
}
function answerC_clicked() {
  var answerC = document.getElementById("answerC").value;

		checkAnswer(answerC);
}
function answerD_clicked() {
  var answerD = document.getElementById("answerD").value;
		checkAnswer(answerD);
}

function adjustScore(isCorrect) {
  debugger;
  if (isCorrect) {
    currentScore++;
  } else {
    if (currentScore > 0) {
      currentScore--;
  	}
  }
  document.getElementById("score").innerHTML = currentScore;
}

function checkAnswer(answer) {
    if (answer == randomQuestion.rightAnswer) {
      adjustScore(true);
      btnProvideQuestion();
    } else {
      alert("Incorrect, try again!");
      adjustScore(false);
      btnProvideQuestion();
    }
  }