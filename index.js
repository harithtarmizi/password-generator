const characters = ["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z","a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z", "0", "1", "2", "3", "4", "5", "6", "7", "8", "9","~","`","!","@","#","$","%","^","&","*","(",")","_","-","+","=","{","[","}","]",",","|",":",";","<",">",".","?",
"/"];

let firstPassword = document.getElementById("generate-first-password")
let secondPassword = document.getElementById("generate-second-password")
let passwordLength = 15

function getRandomCharacter() {
	let randomChar = Math.floor(Math.random() * characters.length)
	return characters[randomChar]
}

function generateRandomPassword() {
	let randomPasswordOne = ""
	let randomPasswordTwo = ""

	for (let i = 0; i < passwordLength; i++) {
		randomPasswordOne += getRandomCharacter()
	}

	for (let i = 0; i < passwordLength; i++) {
		randomPasswordTwo += getRandomCharacter()
	}

	firstPassword.textContent = randomPasswordOne
	secondPassword.textContent = randomPasswordTwo
}
