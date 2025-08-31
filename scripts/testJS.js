const btnManipuleString = document.getElementById('btnManipuleString'),
    btnMenuWithWhile = document.getElementById('btnMenuWithWhile'),
    btnGuessNumber = document.getElementById('btnGuessNumber');

// -- STRING MANIPULATION

btnManipuleString.onclick = function(){
    const fullnam = '  test   am  ';
    let fullnamTrim = fullnam.trim();
    let first = fullnamTrim.slice(0, fullnamTrim.indexOf(' '));
    let last = fullnamTrim.slice(fullnamTrim.indexOf(' ')).trim();
    console.log(first);
    console.log(last);
    console.log(fullnam.trim().charAt(0).toUpperCase());
};

// -- MENU WITH WHILE AND SWITCH

btnMenuWithWhile.onclick = function(){
    let control = 1;
    let op;
    while (control != 0) {
        op = Number(window.prompt(`Select an option:\n1. Scenario 1 \n2. Scenario 2 \n0. Exit`));
        switch(op) {
            case 1:
                console.log('Scenario 1 is selected.');            
                break;
            case 2:
                console.log('Scenario 2 is selected.');
                break;
            case 0:
                control = 0;
                break;
            default:
                console.log('Invalid option');
                break;
        };
    };
};

// -- GUESS NUMBER GAME

btnGuessNumber.onclick = function(){
    const minNum = 0,
        maxNum = 10;
    
    const guessNum = Math.floor(Math.random()* (maxNum - minNum)) + minNum;
    console.log(guessNum);
    let userAttempts = [],
        userOpt,
        running = true;
    
    while (running) {
        userOpt = window.prompt(`Guess a number between ${minNum} and ${maxNum}`);
        
        if (userOpt != null) {
            userOpt = Number(userOpt);
            if (isNaN(userOpt) || (userOpt < minNum || userOpt > maxNum)) {
                window.alert(`Enter a valid value.`);
            }
            else {
                if (userOpt > guessNum) {
                    window.alert(`Too high. Try again!`);
                    userAttempts.push(userOpt);
                } else if (userOpt < guessNum) {
                    window.alert(`Too low. Try again!`);
                    userAttempts.push(userOpt);
                } else {
                    running = false;
                };
            };
        };
    };
    
    if (userAttempts.length > 0) {
        let message = 'Great job!\nHere are your other attempts:\n';
        userAttempts.forEach((attempt, index) => {
            if(index == (userAttempts.length - 1)) {
                message += `${attempt.toString()}.`;
            } else {
              message += `${attempt.toString()}, `;
            };
        });
        window.alert(message);
    } else {
        window.alert('Wow! You got it on your first attempt, great job!');
    };
};
