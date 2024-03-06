//variables
const screen1 = document.querySelector(".screen1")
const screen2 = document.querySelector(".screen2")
const btnTry = document.querySelector("#btnTry")
const btnReset = document.querySelector("#btnReset")
let randomNumber = Math.round(Math.random() * 10);
let xAttempts = 1;
let inputNumber = document.querySelector("#inputNumber");
inputNumber.focus()

//events
btnTry.addEventListener('click', handleTryClick)
btnReset.addEventListener('click', handleResetClick)
document.addEventListener('keydown', enterReset)

//functions
function handleTryClick(event){
	event.preventDefault();
		
	inputNumber = document.querySelector("#inputNumber");
	if(0 <= Number(inputNumber.value) <= 10){
	if(Number(inputNumber.value) == randomNumber){
		toggleScreen()	
		document.querySelector(".screen2 h2").innerText = `Acertou em ${xAttempts} tentativas!`
	}
	xAttempts ++;
	}
	inputNumber.value = ""
	inputNumber.focus()
}
function handleResetClick(){
	toggleScreen()
	inputNumber.focus()
	xAttempts = 1;
	randomNumber = Math.round(Math.random() * 10);
}
function toggleScreen(){
	screen1.classList.toggle("hide")
	screen2.classList.toggle("hide")
}
function enterReset(e){
	if(e.key == 'Enter' && screen1.classList.contains("hide")){
		handleResetClick();
	}
}