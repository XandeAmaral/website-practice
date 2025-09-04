const d4 = document.getElementById('d4'),
    d6 = document.getElementById('d6'),
    d8 = document.getElementById('d8'),
    d10 = document.getElementById('d10'),
    d12 = document.getElementById('d12'),
    d20 = document.getElementById('d20'),
    txtResult = document.getElementById('result'),
    txtPreviousResults = document.getElementById('previous-results'),
    btnRoll = document.getElementById('btnRoll'),
    allOptions = [d4,d6,d8,d10,d12,d20];

const min = 0;
let previousResult = [],
    isFirstRoll = true,
    diceSelected;

d4.onclick = function() {
    selectDice(4);
    highlightOption(d4);
};

d6.onclick = function() {
    selectDice(6);
    highlightOption(d6);
};

d8.onclick = function() {
    selectDice(8);
    highlightOption(d8);
};

d10.onclick = function() {
    selectDice(10);
    highlightOption(d10);
};

d12.onclick = function() {
    selectDice(12);
    highlightOption(d12);
};

d20.onclick = function() {
    selectDice(20);
    highlightOption(d12);
};

btnRoll.onclick = function() {
    selectDice(diceSelected);
};

function highlightOption(option) {
    // clear all the options
    allOptions.forEach(li => {
        li.classList.remove("selected");
    });

    // highlight the selected option
    option.classList.add('selected');
};

function selectDice(n) {
    // Process when a dice is selected
    if (!isFirstRoll) {
        previousResult.push(txtResult.textContent);
    } else {
        isFirstRoll = false;
        btnRoll.style.visibility = "visible";
    };
    txtPreviousResults.textContent = formatPreviousResults(previousResult);
    txtResult.textContent = rollDice(n).toString();
    diceSelected = n;
};

function rollDice(max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
};

function formatPreviousResults(results) {
    if (results.length > 0) {
        let formatResults = '';
        results.forEach((result, index) => {
            if(index == (results.length - 1)) {
                formatResults += `${result.toString()}.`;
            } else {
              formatResults += `${result.toString()}, `;
            };
        });
        return formatResults;
    } else {
        return '';
    };
}
