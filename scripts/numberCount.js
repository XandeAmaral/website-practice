// -- CONT NUMBER

const txtValue = document.getElementById("txtValue");
const btnDec = document.getElementById("btnDec");
const btnInc = document.getElementById("btnInc");
const btnReset = document.getElementById("btnReset");

const firstValue = Number(txtValue.textContent);
let tempValue = firstValue;

btnDec.onclick = function(){
    tempValue--;
    updateValue();
};

btnInc.onclick = function(){
    tempValue++;
    updateValue();
};

btnReset.onclick = function(){
    tempValue = firstValue;
    updateValue();
};

function updateValue(){
    txtValue.textContent = tempValue;
};
