import { getLocalStorageCart } from "./logic.js";
import { printCart } from "./ui.js";

const checkoutSummaryList = document.getElementById('order-summary-list');
const totalPriceSpan = document.getElementById('summary-total-price');

printCart(checkoutSummaryList, getLocalStorageCart(), totalPriceSpan, false);

// Exercise 6
const validate = (e) => {
	e.preventDefault();
	let error = 0;
	const fName = document.getElementById("fName");
	const fEmail = document.getElementById("fEmail");
	const fAddress = document.getElementById("fAddress");
	const fLastN = document.getElementById("fLastN");
	const fPassword = document.getElementById("fPassword");
	const fPhone = document.getElementById("fPhone");

	const lettersRegex = /^\p{L}+$/u;
	const lettersAndNumbers = /^\w+$/;
	const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
	const phoneNumberRegex = /^\+?[1-9]\d{6,14}$/;

	const hasMinimumLength = (inputElementValue) => inputElementValue.length >= 3;

	const validateField = (inputElement,validationFn) => {
		const value = inputElement.value.trim();
		const isValid = hasMinimumLength(value) && validationFn(value);
		if (!isValid){
			inputElement.classList.add('is-invalid');
			return false;
		}
		inputElement.classList.remove('is-invalid');
		return true;
	}

	if(!validateField(fName, (nameInput)=>
		lettersRegex.test(nameInput)
	)){
		error++;
	};

	if(!validateField(fEmail, (emailInput)=>
		emailRegex.test(emailInput)
	)){
		error++;
	};

	if(!validateField(fAddress, (addressInput)=>
		addressInput.length >= 6
	)){
		error++;
	}

	if(!validateField(fLastN, (lastNameInput)=>
		lettersRegex.test(lastNameInput)
	)){
		error++;
	};

	if(!validateField(fPassword, (passwordInput)=>
		lettersAndNumbers.test(passwordInput)
	)){
		error++;
	}
	if(!validateField(fPhone, (phoneInput)=>
		phoneNumberRegex.test(phoneInput)
	)){
		error++;
	};

	if(error>0){
		alert("Please fill in all required fields.");
	}else{
		alert("Form submitted successfully");
		form.reset();
	}
}

const form = document.querySelector('.form');
form.addEventListener('submit', validate);