let result;
let history;
let historyBox;
window.onload = function () {
	result = document.getElementById('result');
}

function addValue(i) {
result.innerHTML += i;

}

function calculate(i) {
	result.innerHTML = eval(result.innerHTML);
	history += eval(result.innerHTML);
	
	history = parseInt(eval(result.innerHTML));
	historyBox = document.getElementById('history');
	
	historyBox.innerHTML += history;
	historyBox.innerHTML += "<br/>";
}

function clearResults() {
 result.innerHTML = "";
}




