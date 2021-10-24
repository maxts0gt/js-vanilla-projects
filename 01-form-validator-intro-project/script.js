const form = document.getElementById('form');
const username = document.getElementById('username');
const email = document.getElementById('email');
const password = document.getElementById('password');
const passwordTwo = document.getElementById('Confirmation');

//Show Input Error message
function showError(input, message) {
	console.log(input);
	const formControl = input.parentElement;
	formControl.className = 'form-control error';
	const small = formControl.querySelector('small');
	small.innerText = message;
}

//Show success outline
function showSuccess(input) {
	const formControl = input.parentElement;
	formControl.className = 'form-control success';
}

//Chess email is valid
function checkEmail(input) {
	const re =
		/^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
	re.test(input.value.trim()) ? showSuccess(input) : showError(input, 'Email is not valid');
}

//Check required fields
function checkRequired(inputArr) {
	inputArr.forEach(function (input) {
		if (input.value.trim() === '') {
			showError(input, `${getFieldName(input)} is required`);
		} else {
			showSuccess(input);
		}

		console.log(input.value);
	});
}

//Check input length
function checkLength(input, min, max) {
	if (input.value.length < min) {
		showError(input, `${getFieldName(input)} must be at least ${min} characters long`);
	} else if (input.value.length > max) {
		showError(input, `${getFieldName(input)} must be at less than ${max} characters long`);
	} else {
		showSuccess(input);
	}
}

// Check passwords match
function checkPasswordsMatch(input1, input2) {
	if (input1.value !== input2.value) {
		showError(input2, 'Passwords do not match');
	}
}

//Get fieldname

function getFieldName(input) {
	return input.id.charAt(0).toUpperCase() + input.id.slice(1);
}

// Event Listeners
form.addEventListener('submit', function (e) {
	e.preventDefault();

	checkRequired([username, email, password, passwordTwo]);
	checkLength(username, 3, 15);
	checkLength(password, 6, 25);
	checkLength(passwordTwo, 6, 25);
	checkEmail(email);
	checkPasswordsMatch(password, passwordTwo);
});
