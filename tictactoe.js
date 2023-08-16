let i = 0;
let caseId = `place-${i}`;
let xArray = [];
let oArray = [];
let resultDisplay = document.querySelector('.js-display-result');
let playerChoice = Math.round(Math.random());
console.log(playerChoice);

let btn0 = document.getElementById('btn-0');
let btn1 = document.getElementById('btn-1');
let btn2 = document.getElementById('btn-2');
let btn3 = document.getElementById('btn-3');
let btn4 = document.getElementById('btn-4');
let btn5 = document.getElementById('btn-5');
let btn6 = document.getElementById('btn-6');
let btn7 = document.getElementById('btn-7');
let btn8 = document.getElementById('btn-8');
let btnscore = document.getElementById('js-btn-score');
let btnpa = document.getElementById('js-btn-pa');
let btnp = document.getElementById('js-btn-p');

function playGame(caseNum) {
    let btndispalyer = document.querySelector(`.place-${caseNum}`);
    playerTurn(btndispalyer, caseNum);

    console.log('xArray : ' + xArray);
    console.log('oArray : ' + oArray);
    

    //1st Player [X] Win Possibilities
    if (xArray.length > 2){
        //Case [0] = 0;
        if (xArray[0] === '0' || xArray[1] === '0' || xArray[2] === '0' || xArray[3] === '0' || xArray[4] === '0') {
            if ((xArray[1] === '1' || xArray[2] === '1' || xArray[3] === '1' || xArray[4] === '1') && (xArray[1] === '2' || xArray[2] === '2' || xArray[3] === '2' || xArray[4] === '2')) {
                resultDisplay.innerHTML = 'Player X Won!';
                btnDisable();
            } else if ((xArray[1] === '3' || xArray[2] === '3' || xArray[3] === '3' || xArray[4] === '3') && (xArray[1] === '6' || xArray[2] === '6' || xArray[3] === '6' || xArray[4] === '6')) {
                resultDisplay.innerHTML = 'Player X Won!';
                btnDisable();
            } else if ((xArray[1] === '4' || xArray[2] === '4' || xArray[3] === '4' || xArray[4] === '4') && (xArray[1] === '8' || xArray[2] === '8' || xArray[3] === '8' || xArray[4] === '8')) {
                resultDisplay.innerHTML = 'Player X Won!';
                btnDisable();
            }
        }
        //Case [0] = 1;
        if (xArray[0] === '1') {
            if ((xArray[1] === '0' || xArray[2] === '0' || xArray[3] === '0' || xArray[4] === '0') && (xArray[1] === '2' || xArray[2] === '2' || xArray[3] === '2' || xArray[4] === '2')) {
                resultDisplay.innerHTML = 'Player X Won!';
                btnDisable();
            } else if ((xArray[1] === '4' || xArray[2] === '4' || xArray[3] === '4' || xArray[4] === '4') && (xArray[1] === '7' || xArray[2] === '7' || xArray[3] === '7' || xArray[4] === '7')) {
                resultDisplay.innerHTML = 'Player X Won!';
                btnDisable();
            }
        }
        //Case [0] = 2;
        if (xArray[0] === '2') {
            if ((xArray[1] === '1' || xArray[2] === '1' || xArray[3] === '1'|| xArray[4] === '1') && (xArray[1] === '0' || xArray[2] === '0' || xArray[3] === '0'|| xArray[4] === '0')) {
                resultDisplay.innerHTML = 'Player X Won!';
                btnDisable();
            } else if ((xArray[1] === '5' || xArray[2] === '5' || xArray[3] === '5' || xArray[4] === '5') && (xArray[1] === '8' || xArray[2] === '8' || xArray[3] === '8' || xArray[4] === '8')) {
                resultDisplay.innerHTML = 'Player X Won!';
                btnDisable();
            } else if ((xArray[1] === '4' || xArray[2] === '4' || xArray[3] === '4' || xArray[4] === '4') && (xArray[1] === '6' || xArray[2] === '6' || xArray[3] === '6' || xArray[4] === '6')) {
                resultDisplay.innerHTML = 'Player X Won!';
                btnDisable();
            }
        }
        //Case [0] = 3;
        if (xArray[0] === '3' || xArray[1] === '3' || xArray[2] === '3' || xArray[3] === '3'|| xArray[4] === '3') {
            if ((xArray[1] === '0' || xArray[2] === '0' || xArray[3] === '0' || xArray[4] === '0') && (xArray[1] === '6' || xArray[2] === '6' || xArray[3] === '6' || xArray[4] === '6')) {
                resultDisplay.innerHTML = 'Player X Won!';
                btnDisable();
            } else if ((xArray[1] === '4' || xArray[2] === '4' || xArray[3] === '4' || xArray[4] === '4') && (xArray[1] === '5' || xArray[2] === '5' || xArray[3] === '5' || xArray[4] === '5')) {
                resultDisplay.innerHTML = 'Player X Won!';
                btnDisable();
            }
        }
        //Case[0] = 4;
        if (xArray[0] === '4' || xArray[1] === '4' || xArray[2] === '4' || xArray[3] === '4' || xArray[4] === '4') {
            if ((xArray[1] === '0' || xArray[2] === '0' || xArray[3] === '0' || xArray[4] === '0') && (xArray[1] === '8' || xArray[2] === '8' || xArray[3] === '8'|| xArray[4] === '8')) {
                resultDisplay.innerHTML = 'Player X Won!';
                btnDisable();
            } else if ((xArray[1] === '1' || xArray[2] === '1' || xArray[3] === '1' || xArray[4] === '1') && (xArray[1] === '7' || xArray[2] === '7' || xArray[3] === '7' || xArray[4] === '7')) {
                resultDisplay.innerHTML = 'Player X Won!';
                btnDisable();
            } else if ((xArray[1] === '2' || xArray[2] === '2' || xArray[3] === '2' || xArray[4] === '2') && (xArray[1] === '6' || xArray[2] === '6' || xArray[3] === '6' || xArray[4] === '6')) {
                resultDisplay.innerHTML = 'Player X Won!';
                btnDisable();
            } else if ((xArray[1] === '3' || xArray[2] === '3' || xArray[3] === '3' || xArray[4] === '3') && (xArray[1] === '5' || xArray[2] === '5' || xArray[3] === '5' || xArray[4] === '5')) {
                resultDisplay.innerHTML = 'Player X Won!';
                btnDisable();
            }
        }
        //Case[0] = 5;
        if (xArray[0] === '5' || xArray[1] === '5' || xArray[2] === '5' || xArray[3] === '5' || xArray[4] === '5') {
            if ((xArray[1] === '2' || xArray[2] === '2' || xArray[3] === '2' || xArray[4] === '2') && (xArray[1] === '8' || xArray[2] === '8' || xArray[3] === '8' || xArray[4] === '8')) {
                resultDisplay.innerHTML = 'Player X Won!';
                btnDisable();
            } else if ((xArray[1] === '4' || xArray[2] === '4' || xArray[3] === '4' || xArray[4] === '4') && (xArray[1] === '3' || xArray[2] === '3' || xArray[3] === '3' || xArray[4] === '3')) {
                resultDisplay.innerHTML = 'Player X Won!';
                btnDisable();
            }
        }
        //Case[0] = 6;
        if (xArray[0] === '6' || xArray[1] === '6' || xArray[2] === '6' || xArray[3] === '6' || xArray[4] === '6') {
            if ((xArray[1] === '0' || xArray[2] === '0' || xArray[3] === '0' || xArray[4] === '0') && (xArray[1] === '3' || xArray[2] === '3' || xArray[3] === '3' || xArray[4] === '3')) {
                resultDisplay.innerHTML = 'Player X Won!';
                btnDisable();
            } else if ((xArray[1] === '7' || xArray[2] === '7' || xArray[3] === '7' || xArray[4] === '7') && (xArray[1] === '8' || xArray[2] === '8' || xArray[3] === '8' || xArray[4] === '8')) {
                resultDisplay.innerHTML = 'Player X Won!';
                btnDisable();
            } else if ((xArray[1] === '4' || xArray[2] === '4' || xArray[3] === '4' || xArray[4] === '4') && (xArray[1] === '2' || xArray[2] === '2' || xArray[3] === '2' || xArray[4] === '2')) {
                resultDisplay.innerHTML = 'Player X Won!';
                btnDisable();
            }
        }
        //Case[0] = 7;
        if (xArray[0] === '7') {
            if ((xArray[1] === '1' || xArray[2] === '1' || xArray[3] === '1' || xArray[4] === '1') && (xArray[1] === '4' || xArray[2] === '4' || xArray[3] === '4' || xArray[4] === '4')) {
                resultDisplay.innerHTML = 'Player X Won!';
                btnDisable();
            } else if ((xArray[1] === '6' || xArray[2] === '6' || xArray[3] === '6' || xArray[4] === '6') && (xArray[1] === '8' || xArray[2] === '8' || xArray[3] === '8' || xArray[4] === '8')) {
                resultDisplay.innerHTML = 'Player X Won!';
                btnDisable();
            }
        }
        //Casea[0] = 8;
        if (xArray[0] === '8') {
            if ((xArray[1] === '2' || xArray[2] === '2' || xArray[3] === '2' || xArray[4] === '2') && (xArray[1] === '5' || xArray[2] === '5' || xArray[3] === '5' || xArray[4] === '5')) {
                resultDisplay.innerHTML = 'Player X Won!';
                btnDisable();
            } else if ((xArray[1] === '0' || xArray[2] === '0' || xArray[3] === '0' || xArray[4] === '0') && (xArray[1] === '4' || xArray[2] === '4' || xArray[3] === '4' || xArray[4] === '4')) {
                resultDisplay.innerHTML = 'Player X Won!';
                btnDisable();
            } else if ((xArray[1] === '6' || xArray[2] === '6' || xArray[3] === '6' || xArray[4] === '6') && (xArray[1] === '7' || xArray[2] === '7' || xArray[3] === '7' || xArray[4] === '7')) {
                resultDisplay.innerHTML = 'Player X Won!';
                btnDisable();
            }
        }

        
    }
    
    if (oArray.length > 2){
        //Case [0] = 0;
        if (oArray[0] === '0' || oArray[1] === '0' || oArray[2] === '0' || oArray[3] === '0' || oArray[4] === '0') {
            if ((oArray[1] === '1' || oArray[2] === '1' || oArray[3] === '1' || oArray[4] === '1') && (oArray[1] === '2' || oArray[2] === '2' || oArray[3] === '2' || oArray[4] === '2')) {
                resultDisplay.innerHTML = 'Player O Won!';
                btnDisable();
            } else if ((oArray[1] === '3' || oArray[2] === '3' || oArray[3] === '3' || oArray[4] === '3') && (oArray[1] === '6' || oArray[2] === '6' || oArray[3] === '6' || oArray[4] === '6')) {
                resultDisplay.innerHTML = 'Player O Won!';
                btnDisable();
            } else if ((oArray[1] === '4' || oArray[2] === '4' || oArray[3] === '4' || oArray[4] === '4') && (oArray[1] === '8' || oArray[2] === '8' || oArray[3] === '8' || oArray[4] === '8')) {
                resultDisplay.innerHTML = 'Player O Won!';
                btnDisable();
            }
        }
        //Case [0] = 1;
        if (oArray[0] === '1') {
            if ((oArray[1] === '0' || oArray[2] === '0' || oArray[3] === '0' || oArray[4] === '0') && (oArray[1] === '2' || oArray[2] === '2' || oArray[3] === '2' || oArray[4] === '2')) {
                resultDisplay.innerHTML = 'Player O Won!';
                btnDisable();
            } else if ((oArray[1] === '4' || oArray[2] === '4' || oArray[3] === '4' || oArray[4] === '4') && (oArray[1] === '7' || oArray[2] === '7' || oArray[3] === '7' || oArray[4] === '7')) {
                resultDisplay.innerHTML = 'Player O Won!';
                btnDisable();
            }
        }
        //Case [0] = 2;
        if (oArray[0] === '2') {
            if ((oArray[1] === '1' || oArray[2] === '1' || oArray[3] === '1'|| oArray[4] === '1') && (oArray[1] === '0' || oArray[2] === '0' || oArray[3] === '0'|| oArray[4] === '0')) {
                resultDisplay.innerHTML = 'Player O Won!';
                btnDisable();
            } else if ((oArray[1] === '5' || oArray[2] === '5' || oArray[3] === '5' || oArray[4] === '5') && (oArray[1] === '8' || oArray[2] === '8' || oArray[3] === '8' || oArray[4] === '8')) {
                resultDisplay.innerHTML = 'Player O Won!';
                btnDisable();
            } else if ((oArray[1] === '4' || oArray[2] === '4' || oArray[3] === '4' || oArray[4] === '4') && (oArray[1] === '6' || oArray[2] === '6' || oArray[3] === '6' || oArray[4] === '6')) {
                resultDisplay.innerHTML = 'Player O Won!';
                btnDisable();
            }
        }
        //Case [0] = 3;
        if (oArray[0] === '3' || oArray[1] === '3' || oArray[2] === '3' || oArray[3] === '3'|| oArray[4] === '3') {
            if ((oArray[1] === '0' || oArray[2] === '0' || oArray[3] === '0' || oArray[4] === '0') && (oArray[1] === '6' || oArray[2] === '6' || oArray[3] === '6' || oArray[4] === '6')) {
                resultDisplay.innerHTML = 'Player O Won!';
                btnDisable();
            } else if ((oArray[1] === '4' || oArray[2] === '4' || oArray[3] === '4' || oArray[4] === '4') && (oArray[1] === '5' || oArray[2] === '5' || oArray[3] === '5' || oArray[4] === '5')) {
                resultDisplay.innerHTML = 'Player O Won!';
                btnDisable();
            }
        }
        //Case[0] = 4;
        if (oArray[0] === '4' || oArray[1] === '4' || oArray[2] === '4' || oArray[3] === '4' || oArray[4] === '4') {
            if ((oArray[1] === '0' || oArray[2] === '0' || oArray[3] === '0' || oArray[4] === '0') && (oArray[1] === '8' || oArray[2] === '8' || oArray[3] === '8'|| oArray[4] === '8')) {
                resultDisplay.innerHTML = 'Player O Won!';
                btnDisable();
            } else if ((oArray[1] === '1' || oArray[2] === '1' || oArray[3] === '1' || oArray[4] === '1') && (oArray[1] === '7' || oArray[2] === '7' || oArray[3] === '7' || oArray[4] === '7')) {
                resultDisplay.innerHTML = 'Player O Won!';
                btnDisable();
            } else if ((oArray[1] === '2' || oArray[2] === '2' || oArray[3] === '2' || oArray[4] === '2') && (oArray[1] === '6' || oArray[2] === '6' || oArray[3] === '6' || oArray[4] === '6')) {
                resultDisplay.innerHTML = 'Player O Won!';
                btnDisable();
            } else if ((oArray[1] === '3' || oArray[2] === '3' || oArray[3] === '3' || oArray[4] === '3') && (oArray[1] === '5' || oArray[2] === '5' || oArray[3] === '5' || oArray[4] === '5')) {
                resultDisplay.innerHTML = 'Player O Won!';
                btnDisable();
            } 
        }
        //Case[0] = 5;
        if (oArray[0] === '5' || oArray[1] === '5' || oArray[2] === '5' || oArray[3] === '5' || oArray[4] === '5') {
            if ((oArray[1] === '2' || oArray[2] === '2' || oArray[3] === '2' || oArray[4] === '2') && (oArray[1] === '8' || oArray[2] === '8' || oArray[3] === '8' || oArray[4] === '8')) {
                resultDisplay.innerHTML = 'Player O Won!';
                btnDisable();
            } else if ((oArray[1] === '4' || oArray[2] === '4' || oArray[3] === '4' || oArray[4] === '4') && (oArray[1] === '3' || oArray[2] === '3' || oArray[3] === '3' || oArray[4] === '3')) {
                resultDisplay.innerHTML = 'Player O Won!';
                btnDisable();
            }
        }
        //Case[0] = 6;
        if (oArray[0] === '6' || oArray[1] === '6' || oArray[2] === '6' || oArray[3] === '6' || oArray[4] === '6') {
            if ((oArray[1] === '0' || oArray[2] === '0' || oArray[3] === '0' || oArray[4] === '0') && (oArray[1] === '3' || oArray[2] === '3' || oArray[3] === '3' || oArray[4] === '3')) {
                resultDisplay.innerHTML = 'Player O Won!';
                btnDisable();
            } else if ((oArray[1] === '7' || oArray[2] === '7' || oArray[3] === '7' || oArray[4] === '7') && (oArray[1] === '8' || oArray[2] === '8' || oArray[3] === '8' || oArray[4] === '8')) {
                resultDisplay.innerHTML = 'Player O Won!';
                btnDisable();
            } else if ((oArray[1] === '4' || oArray[2] === '4' || oArray[3] === '4' || oArray[4] === '4') && (oArray[1] === '2' || oArray[2] === '2' || oArray[3] === '2' || oArray[4] === '2')) {
                resultDisplay.innerHTML = 'Player O Won!';
                btnDisable();
            }   
        }
        //Case[0] = 7;
        if (oArray[0] === '7') {
            if ((oArray[1] === '1' || oArray[2] === '1' || oArray[3] === '1' || oArray[4] === '1') && (oArray[1] === '4' || oArray[2] === '4' || oArray[3] === '4' || oArray[4] === '4')) {
                resultDisplay.innerHTML = 'Player O Won!';
                btnDisable();
            } else if ((oArray[1] === '6' || oArray[2] === '6' || oArray[3] === '6' || oArray[4] === '6') && (oArray[1] === '8' || oArray[2] === '8' || oArray[3] === '8' || oArray[4] === '8')) {
                resultDisplay.innerHTML = 'Player O Won!';
                btnDisable();
            }
            
        }
        //Casea[0] = 8;
        if (oArray[0] === '8') {
            if ((oArray[1] === '2' || oArray[2] === '2' || oArray[3] === '2' || oArray[4] === '2') && (oArray[1] === '5' || oArray[2] === '5' || oArray[3] === '5' || oArray[4] === '5')) {
                resultDisplay.innerHTML = 'Player O Won!';
                btnDisable();
            } else if ((oArray[1] === '0' || oArray[2] === '0' || oArray[3] === '0' || oArray[4] === '0') && (oArray[1] === '4' || oArray[2] === '4' || oArray[3] === '4' || oArray[4] === '4')) {
                resultDisplay.innerHTML = 'Player O Won!';
                btnDisable();
            } else if ((oArray[1] === '6' || oArray[2] === '6' || oArray[3] === '6' || oArray[4] === '6') && (oArray[1] === '7' || oArray[2] === '7' || oArray[3] === '7' || oArray[4] === '7')) {
                resultDisplay.innerHTML = 'Player O Won!';
                btnDisable();
            }
        }
    }

    else if(((xArray.length === 5 && oArray.length === 4) || (xArray.length === 4 && oArray.length === 5)) && ((resultDisplay.innerHTML !== 'Player X Won!') || (resultDisplay.innerHTML !== 'Player O Won!'))) {
        alert("It's a Tie!");
    }

}

function playerTurn(btndispalyer, caseNum){
    //1st Player 'X' turn
    if (playerChoice === 1) {
        btndispalyer.innerHTML = 'X';
        btndispalyer.disabled = true;
        xArray.push(`${caseNum}`);
        playerChoice = 0;
    }
    //2nd Player 'O' turn
    else {
        btndispalyer.innerHTML = 'O';
        btndispalyer.disabled = true;
        oArray.push(`${caseNum}`);
        playerChoice = 1;
    }
}

function btnDisable() {
    btn0.disabled = true;
    btn1.disabled = true;
    btn2.disabled = true;
    btn3.disabled = true;
    btn4.disabled = true;
    btn5.disabled = true;
    btn6.disabled = true;
    btn7.disabled = true;
    btn8.disabled = true;
    btnp.disabled = true;
}

function btnEnable() {
    btn0.disabled = false;
    btn1.disabled = false;
    btn2.disabled = false;
    btn3.disabled = false;
    btn4.disabled = false;
    btn5.disabled = false;
    btn6.disabled = false;
    btn7.disabled = false;
    btn8.disabled = false;
    btnpa.disabled = false;
    btnscore.disabled = false;

    btn0.innerHTML = '';
    btn1.innerHTML = '';
    btn2.innerHTML = '';
    btn3.innerHTML = '';
    btn4.innerHTML = '';
    btn5.innerHTML = '';
    btn6.innerHTML = '';
    btn7.innerHTML = '';
    btn8.innerHTML = '';
}

function playAgain() {
    btnEnable();
    resultDisplay.innerHTML = '';
    playerChoice = Math.round(Math.random());
    xArray = [];
    oArray = [];
    playGame(caseNum);
}