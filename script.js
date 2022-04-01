// include api for currency change
const api = "https://api.exchangerate-api.com/v4/latest/USD";

// for selecting different controls
var search = document.querySelector(".searchBox");
var convert = document.querySelector(".convert");
var fromCurrecy = document.querySelector('.from');
var toCurrecy = document.querySelector(".to");
var finalValue = document.querySelector(".finalValue");
var finalAmount = document.getElementById("finalAmount");
var resultFrom;
var resultTo;
var searchValue;

// Event when currency is changed
console.log(fromCurrecy);
document.addEventListener('DOMContentLoaded', function(){
	fromCurrecy.addEventListener('change', (event) => {
		resultFrom = `${event.target.value}`;
		console.log('result from',resultFrom);
	});
})

// Event when currency is changed
document.addEventListener('DOMContentLoaded', function(){
toCurrecy.addEventListener('change', (event) => {
	resultTo = `${event.target.value}`;
	console.log('result to',resultTo);
});
});

document.addEventListener('DOMContentLoaded', function(){
	search.addEventListener('input', updateValue);
});

// function for updating value
function updateValue(e) {
	searchValue = e.target.value;
}

// when user clicks, it calls function getresults
document.addEventListener('DOMContentLoaded', function(){
	convert.addEventListener("click", getResults);
});

// function getresults
function getResults() {
	fetch(`${api}`)
		.then(currency => {
			console.log('currency ',currency.json);
			return currency.json();
		}).then(displayResults);
}

// display results after convertion
function displayResults(currency) {
	let fromRate = currency.rates[resultFrom];
	let toRate = currency.rates[resultTo];
	console.log(fromRate +"---"+toRate);
	console.log(finalValue);
	value =
	((toRate / fromRate) * searchValue).toFixed(2);
	console.log(value)
	finalValue.setAttribute("value", value);
}

// when user click on reset button
function clearVal() {
	window.location.reload();
};