const btnCalcTemp = document.getElementById('btnCalcTemp');
const inpTemp = document.getElementById('userValue');
const celsiusToFaren = document.getElementById('celsiusToFaren');
const farenToCelsius = document.getElementById('farenToCelsius');
const txtResult = document.getElementById('resultTempConvert');

btnCalcTemp.onclick = function(){
    let userValue = Number(inpTemp.value);
    let result;

    if (celsiusToFaren.checked){
        result = converToFaren(userValue).toFixed(1);
        result = `${result} °F`;
    } else if (farenToCelsius.checked) {
        result = convertToCelsius(userValue).toFixed(1);
        result = `${result} °C`;
    } else {
        result = "Select a unit";
    };

    txtResult.textContent = result;
};

function convertToCelsius(value){
    return ((value - 32)/1.8);
};

function converToFaren(value){
    return ((value*1.8) + 32);
};