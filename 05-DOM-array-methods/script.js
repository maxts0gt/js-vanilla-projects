const main = document.getElementById('main');
const addUserBtn = document.getElementById('add-user');
const doubleBtn = document.getElementById('double');
const showMillBtn = document.getElementById('show-millionaires');
const sortBtn = document.getElementById('sort');
const calcWealthBtn = document.getElementById('calculate-wealth');

let data = [];

// Fetch random user data and add money
async function getRandomUser() {
	response = await fetch('https://randomuser.me/api');
	data = await response.json();
	const newUser = {
		name: `${data.results[0].name.first} ${data.results[0].name.last}`,
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
}
