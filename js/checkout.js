// Exercise 6
const form = document.querySelector('.form');
console.log(form);


const validate = (e) => {
	e.preventDefault();

	let error = 0;
	// Get the input fields
	const fName = document.getElementById("fName");
	const fEmail = document.getElementById("fEmail");
	const fAddress = document.getElementById("fAddress");
	const fLastN = document.getElementById("fLastN");
	const fPassword = document.getElementById("fPassword");
	const fPhone = document.getElementById("fPhone");

	const lettersRegex = /^\p{L}+$/u;
	const lettersAndNumbers = /^\w+$/;
	const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;


	// Get the error elements
	// const errorName = document.getElementById("errorName");
	// const errorEmail = document.getElementById("errorEmail");  
	
	// Validate fields entered by the user: name, phone, password, and email
	if(fName.value.length < 3 
		|| !lettersRegex.test(fName.value)){
		error++;
		fName.classList.add('is-invalid');
	}else{
		fName.classList.remove('is-invalid');
	}

	if(fEmail.value.length < 3
		||  !emailRegex.test(fEmail.value)
	){
		error++;
		fEmail.classList.add('is-invalid');
	}else{
		fEmail.classList.remove('is-invalid');
	}

	if(fAddress.value.length < 3){
		error++;
		fAddress.classList.add('is-invalid');
	}else{
		fAddress.classList.remove('is-invalid');
	}

	if(fLastN.value.length < 3
		|| !lettersRegex.test(fLastN.value)
	){
		error++;
		fLastN.classList.add('is-invalid');
	}else{
		fLastN.classList.remove('is-invalid');
	}

	if(fPassword.value.length < 3
		|| !lettersAndNumbers.test(fPassword.value)
	){
		error++;
		fPassword.classList.add('is-invalid');
	}else{
		fPassword.classList.remove('is-invalid');
	}

	if(fPhone.value.length < 3
		|| isNaN(fPhone.value)
	){
		error++;
		fPhone.classList.add('is-invalid');
	}else{
		fPhone.classList.remove('is-invalid');
	}

	if(error>0){
		alert("Please fill in all required fields.");
	}else{
		alert("Form submitted successfully");
		form.reset();
	}
}

form.addEventListener('submit', validate);
