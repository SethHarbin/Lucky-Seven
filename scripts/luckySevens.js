function validateBet() {
	clearErrors();
	var initialBet = document.forms["game"]["bet"].value;
	var numBet = parseFloat(document.forms["game"]["bet"].value.substr(1));
	var highBet = numBet;
	var count = 0;
	var highCount = 0;
	if(numBet == 0){
		alert("Bet should not be $0.00.");
		documents.forms["game"]["bet"].parentElement.className = "form-group has-error";
		documents.forms["game"]["bet"].focus();
		return false;
	}
	do{
		count++;
		if((rollDice()+rollDice())==7){
			numBet = numBet+4.00;
			if(numBet > highBet){
				highCount = count;
				highBet = numBet;
			}
		}else{
			numBet--;
		}
	}while(numBet>0)
	
	document.getElementById("results").style.display = "block";
	document.getElementById("initial").innerText = initialBet;
	document.getElementById("rollCount").innerText = count;
	document.getElementById("maxBet").innerText = "$"+ parseFloat(highBet).toFixed(2);
	document.getElementById("maxBetRolls").innerText = highCount;
	
	return false;
	
}

function resetGame() {
	clearErrors();
	document.forms["game"]["bet"].value = "$0.00";
	document.getElementById("results").style.display = "none";
	document.getElementById("submitButton").innerText = "Play";
	document.forms["game"]["bet"].focus();
}

function clearErrors() {
    if (document.forms["game"]["bet"].parentElement.className.indexOf("has-") != -1) {
        document.forms["game"].elements[i].parentElement.className = "form-group";
    }
} 

function rollDice(){
	return (Math.floor(Math.random() * 6) + 1);
}
