function getHistory(){
	return document.getElementById("history-value").innerText;
}

function printHistory(num){
	document.getElementById("history-value").innerText += num;
}
function printResponse(num){
	document.getElementById("output-value").innerText = num;
}

function getOutput(){
	return document.getElementById("output-value").innerText;
}
function printOutput(valor){
    
    if(getOutput() == 0)
    {
        clearOutput();
    }
    document.getElementById('history-value').innerText += valor;
    number = document.getElementById('output-value').innerText += valor;    
}

function printOperator(operador)
{
    document.getElementById('history-value').innerText += operador;

    clearOutput();
}
function calculate()
{
    var result = 0;
    result = document.getElementById('history-value').innerText;
    var response = document.getElementById("output-value").innerText = eval(result);
    if(response != result)
    {
        printResponse(response);
    }
}
function clearOutput()
{
    document.getElementById('output-value').innerText = '';

}


function clearHistory()
{
    document.getElementById('history-value').innerText = '';
    document.getElementById('output-value').innerText = 0;

}


