const main = document.getElementById('main');
const addUserBtn = document.getElementById('add-user');
const doubleBtn = document.getElementById('double');
const showMillBtn = document.getElementById('show-millionaires');
const sortBtn = document.getElementById('sort');
const calcWealthBtn = document.getElementById('calculate-wealth');

let data = [];

// Fetch random user data and add money
async function getRandomUser() {
	const response = await fetch('https://randomuser.me/api');
	const data = await response.json();

	const user = data.results[0];

	const newUser = {
		name: `${user.name.first} ${user.name.last}`,
		money: Math.floor(Math.random() * 1000000),
	};
	addData(newUser);
}

// On Load
getRandomUser();
getRandomUser();
getRandomUser();

// Add new obj to data arr
function addData(obj) {
	data.push(obj);
	updateDOM();
}

// Update DOM
function updateDOM(providedData = data) {
	// Clean main div
	main.innerHTML = '<h2><strong>Person</strong> Wealth</h2>';

	providedData.forEach((item) => {
		console.log(item);
		const element = document.createElement('div');
		element.classList.add('person');
		element.innerHTML = `<strong>${item.name}</strong>${formatMoney(
			item.money
		)}`;
		main.appendChild(element);
	});
}

// Format currency
function formatMoney(number) {
	return '$' + number.toFixed(2).replace(/\d(?=(\d{3})+\.)/g, '$&,');
}

// Double Money Function
function doubleMoney() {
	data = data.map((user) => {
		return { ...user, money: user.money * 2 };
	});
	updateDOM();
}

// Event Listeners
addUserBtn.addEventListener('click', getRandomUser);
doubleBtn.addEventListener('click', doubleMoney);
