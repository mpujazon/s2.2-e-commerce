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

	const hasMinimumLength = (inputElement) => inputElement.value.length >= 3;

	const validateField = (inputElement,validationFn) => {
		const isValid = hasMinimumLength(inputElement) && validationFn(inputElement);
		if (!isValid){
			inputElement.classList.add('is-invalid');
			return false;
		}
		inputElement.classList.remove('is-invalid');
		return true;
	}

	if(!validateField(fName, (nameInput)=>
		lettersRegex.test(nameInput.value)
	)){
		error++;
	};

	if(!validateField(fEmail, (emailInput)=>
		emailRegex.test(emailInput.value)
	)){
		error++;
	};

	if(!validateField(fAddress, (addressInput)=>true)){
		error++;
	}

	if(!validateField(fLastN, (lastNameInput)=>
		lettersRegex.test(lastNameInput.value)
	)){
		error++;
	};

	if(!validateField(fPassword, (passwordInput)=>
		lettersAndNumbers.test(passwordInput.value)
	)){
		error++;
	}
	if(!validateField(fPhone, (phoneInput)=>
		!isNaN(phoneInput.value)
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