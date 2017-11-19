// listing the alphabet array

var alphabet = ['a','b','c','d','e','f',
				'g','h','i','j','k','l',
				'm','n','o','p','q','r',
				's','t','u','v','w','x','y','z',' ']

//Shows the computer randomly generates

var showTypes = ['rugrats','hey arnold','angry beavers', 'johnny bravo','catdog','doug','rocket power','scooby doo','powerpuff girls','sonic','street sharks','beavis and butthead','jackie chan adventures','pokemon','digimon','cow and chicken','courage the cowardly dog'];

var computerChoice = "";

var charactersInWord = [];

var letterBlanks = 0;

var guessedCorrect = [];

var wrongLetters = [];

//Counters
var winCount = 0;
var loseCount = 0; 
var guessesLeft = 10;
var rightGuess = 0;


// Funtion

function reset () {
	computerChoice = showTypes[Math.floor(Math.random() * showTypes.length)];
	charactersInWord = computerChoice.split('');
	letterBlanks = charactersInWord.length;


	usedLetters = 0;
	rightGuess = 0;
	guessesLeft = 10;
	wrongLetters =[];
	guessedCorrect =[];
	doubleWord = 	 ['a','b','c',
					  'd','e','f',
					  'g','h','i',
					  'j','k','l',
					  'm','n','o',
					  'p','q','r',
					  's','t','u',
					  'v','w','x',
					  'y','z',' '];
	test=false;
	startGame();
}


function startGame() {
	computerChoice = showTypes[Math.floor(Math.random() * showTypes.length)];
	charactersInWord = computerChoice.split('');
	letterBlanks = charactersInWord.length;

	rightGuess = 0;
	guessesLeft = 10;
	wrongLetters =[];
	guessedCorrect =[];
	doubleWord = 	 ['a','b','c',
					  'd','e','f',
					  'g','h','i',
					  'j','k','l',
					  'm','n','o',
					  'p','q','r',
					  's','t','u',
					  'v','w','x',
					  'y','z',' '];

	for(var i = 0; i< letterBlanks; i++)
	{
		guessedCorrect.push('_');
		document.getElementById('wordToGuess').innerHTML = guessedCorrect;
	}


	document.getElementById('wordToGuess').innerHTML = guessedCorrect.join(' ');
	document.getElementById('guessesLeft').innerHTML = guessesLeft;
	document.getElementById('winCounter').innerHTML = winCount;
	document.getElementById('lossCounter').innerHTML = loseCount;
	document.getElementById('usedLetters').innerHTML = wrongLetters;

}

function duplicateLetters(userKey) {


	if (computerChoice.indexOf(userKey) > -1) {
		for (var i = 0; i < letterBlanks; i++) {
			if (charactersInWord[i] === userKey) {
				rightGuess++; 
				guessedCorrect[i] = userKey; 
				document.getElementById('wordToGuess').innerHTML = guessedCorrect.join(' ');
			}
		}
	}
	else {
		wrongLetters.push(userKey);
		guessesLeft--;
		
		document.getElementById('guessesLeft').innerHTML = guessesLeft;
		document.getElementById('usedLetters').innerHTML = wrongLetters;
	}
}

function winLose()
{
	// When the blanks are filled with right letters, you win
	if(rightGuess === letterBlanks)
	{
		//Counts Wins 
		winCount++;
		document.getElementById('winCounter').innerHTML = winCount;
		reset();
	}
	// When the number of guesses reaches 0 then You lose
	else if(guessesLeft === 0)
	{

		document.getElementById('lossCounter').innerHTML = loseCount;
		reset();
	}
}


// Start hangman game

startGame();

document.onkeyup = function(event)
{
	test = true;
	var usedLetters = event.key;
	for(var i = 0; i < doubleWord.length; i++)
	{	
		if(usedLetters === doubleWord[i] && test === true)
		{
			var spliceDword = doubleWord.splice(i,1);
		

			duplicateLetters(usedLetters);
			winLose();
		}
	}		
		
}