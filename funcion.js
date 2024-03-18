let currentResult = ''; // almacena los datos introducidos por el usuario
let history = [];  // almacena el historial de las busqueda

function appendValue(value) {
    currentResult += value;
    document.getElementById('result').value = currentResult;
}

function clearResult() {
    currentResult = '';
    document.getElementById('result').value = '';
}

function deleteLast() {
    currentResult = currentResult.slice(0, -1);
    document.getElementById('result').value = currentResult;
}

function calculate() {
    if (currentResult) {
        let result = eval(currentResult);
        history.push(currentResult + ' = ' + result);
        displayHistory();
        clearResult();
        currentResult = result;
    }
}

function displayHistory() {
    let historyList = document.getElementById('history-list');
    historyList.innerHTML = '';
    history.forEach(item => {
        let li = document.createElement('li');
        li.textContent = item;
        historyList.appendChild(li);
    });
}
