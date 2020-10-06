// jQuery wrapper
$(document).ready(function() {
  
	var magic8Ball = {}; // magic8Ball object created
	magic8Ball.listOfAnswers = ["No", "Yes", "I don't think so...", "Of course!", "Indubitably", "In your dreams."];
	$("#answer").hide();
	 
	/* askQuestion method */
    magic8Ball.askQuestion = function(question) {
		
		$("#8ball").attr("src", "https://s3.amazonaws.com/media.skillcrush.com/skillcrush/wp-content/uploads/2016/09/answerside.png");
		$("#8ball").effect("shake");
		$("#answer").fadeIn(4000); // gets answer to fade in over 4sec
		
		/* random answer created */
		var randomNumber = Math.random(); 
        var randomNumberForListOfAnswers = randomNumber * this.listOfAnswers.length; 
	    var randomIndex = Math.floor(randomNumberForListOfAnswers);
        var answer = this.listOfAnswers[randomIndex]; 
                
        $("#answer").text(answer); // answer shows
		
		console.log(question);
		console.log(answer);
		
    }; // askQuestion method ends
	
	/* prompt to ask a question */
	var onClick = function() { 
		
		$("#answer").hide(); // hide answer
		$("#8ball").attr("src", "https://s3.amazonaws.com/media.skillcrush.com/skillcrush/wp-content/uploads/2016/09/8side.png");  // 8 ball side of image shows
		
		/* setTimeout to delay question prompt */
		setTimeout(function() { 
			var question = prompt("ASK A YES/NO QUESTION!");
			magic8Ball.askQuestion(question);
		}, 500);  // setTimeout function ends

	}; // onClick ends

	$("#questionButton").click( onClick ); 
  
 }); // jQuery wrapper ends
  