//eces random password generator
//tinkering 8

const passwordElement = document.getElementById("password");
const passwordLength = document.getElementById("length");
const includeUppercase = document.getElementById("uppercase");
const includeLowercase  = document.getElementById("lowercase");
const includeNumbers = document.getElementById("numbers");
const includeSymbols = document.getElementById("symbols");

const generate_btn = document.getElementById("generate");
generate_btn.addEventListener('click', GeneratePassword);
const copy_btn = document.getElementById("copy");
copy_btn.addEventListener('click', CopyPassword);

const uppercaseChars = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
const lowercaseChars = "abcdefghijklmnopqrstuvwxyz";
const numberChars = "0123456789";
const symbolChars = "!@#$%^&*()";

function GeneratePassword(){
	let password = "";
	let length = passwordLength.value;
	let chars = "";

	chars += includeUppercase.checked ? uppercaseChars : "";
	chars += includeLowercase .checked ? lowercaseChars : "";
	chars += includeNumbers.checked ? numberChars : "";
	chars += includeSymbols.checked ? symbolChars : "";

	for (let i = 0; i <= length; i++){
		let rand = Math.floor(Math.random() * chars.length);
		password += chars.substring(rand, rand + 1);
	}

	passwordElement.value = password;
}

async function CopyPassword(){
	if (navigator.clipboard){
		await navigator.clipboard.writeText(passwordElement.value);

		window.alert("📌your password was copied to the clipboard📌");
	}
}