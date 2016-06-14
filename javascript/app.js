window.onload = function () {
	var result = document.getElementById('result');
}

function addValue(i) {
result.innerHTML += i;

}

function calculate(i) {
	result.innerHTML = eval(result.innerHTML);
	history += eval(result.innerHTML);
	
	var history = parseInt(eval(result.innerHTML));
	var historyBox = document.getElementById('history');
	
	historyBox.innerHTML += history;
	historyBox.innerHTML += "<br/>";
}

function clearResults() {
 result.innerHTML = "";
}




