window.onload = function () {
	let result = document.getElementById('result');
}

function addValue(i) {
result.innerHTML += i;

}

function calculate(i) {
	result.innerHTML = eval(result.innerHTML);
	history += eval(result.innerHTML);
	
	let history = parseInt(eval(result.innerHTML));
	let historyBox = document.getElementById('history');
	
	historyBox.innerHTML += history;
	historyBox.innerHTML += "<br/>";
}

function clearResults() {
 result.innerHTML = "";
}




