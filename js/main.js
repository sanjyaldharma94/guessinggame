function startCount(){
	var userInput = document.getElementById('userNumber').value;
	var numbers = [12, 16, 5, 7, 3, 20, 8]
	var random = Math.floor(Math.random(numbers)*numbers.length);

	var result = document.getElementById('result');
	console.log(userInput);
	console.log(numbers[random]);
	
	if(userInput == numbers[random]){
		result.innerHTML = "You Got it Right";
	} else if(userInput <= numbers[random]){
		result.innerHTML = "It's too low";
	} else if(userInput >= numbers[random]){
		result.innerHTML = "It's too High";
	 }else{
		result.innerHTML ="Try again";
	}
  }
document.getElementById('btn').addEventListener('click',startCount);