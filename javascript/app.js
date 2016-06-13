window.onload = function () {
	var result = document.getElementById('result');
};  

function addValue(i) {
result.innerHTML += i	

}

function calculate(i) {
	result.innerHTML = eval(result.innerHTML)
}

function clearResults() {
 result.innerHTML = "";
}

 