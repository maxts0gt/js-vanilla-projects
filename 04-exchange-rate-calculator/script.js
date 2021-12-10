const currencyEl_one = document.getElementById('currency-one');
const currencyEl_two = document.getElementById('currency-two');
const amountEl_one = document.getElementById('amount-one');
const amountEl_two = document.getElementById('amount-two');

const rateEl = document.getElementById('rate');
const swap = document.getElementById('swap');

const apiKey = '8498440958bb9f1bf038b302';

const endPoint = `https://v6.exchangerate-api.com/v6/${apiKey}/latest/`;

// Fetch exchange rates and update the DOM
function calculate() {
	const currencyOne = currencyEl_one.value;
	const currencyTwo = currencyEl_two.value;

	fetch(`${endPoint}${currencyOne}`)
		.then((res) => res.json())
		.then((data) => {
			const rate = data.conversion_rates[currencyTwo];
			rateEl.innerText = `1 ${currencyOne} = ${rate} ${currencyTwo}`;
			amountEl_two.value = (amountEl_one.value * rate).toFixed(2);
		});
}

// Event Listeners
currencyEl_one.addEventListener('change', calculate);
currencyEl_two.addEventListener('change', calculate);
amountEl_one.addEventListener('input', calculate);
amountEl_two.addEventListener('input', calculate);
swap.addEventListener('click', () => {
	const temp = currencyEl_one.value;
	currencyEl_one.value = currencyEl_two.value;
	currencyEl_two.value = temp;
	calculate();
});

// On Load
calculate();
