function setTheDice(name, number) {
    switch (number) {
        case 1:
            dotList = document.getElementById(name).querySelectorAll(".top,.mid,.bottom,.left,.right");
            for (let i = 0; i < dotList.length; i++) {
                dotList[i].style.visibility = "hidden";
            }
            document.getElementById(name).getElementsByClassName("center")[0].style.visibility = "visible";
            break;
        case 2:
            dotList = document.getElementById(name).querySelectorAll(".left:not(.top),.right:not(.bot)");
            for (let i = 0; i < dotList.length; i++) {
                dotList[i].style.visibility = "hidden";
            }
            break;
        case 3:
            dotList = document.getElementById(name).querySelectorAll(".left:not(.top),.right:not(.bot)");
            for (let i = 0; i < dotList.length; i++) {
                dotList[i].style.visibility = "hidden";
            }
            document.getElementById(name).getElementsByClassName("center")[0].style.visibility = "visible";
            break;
        case 4:
            dotList = document.getElementById(name).querySelectorAll(".mid");
            for (let i = 0; i < dotList.length; i++) {
                dotList[i].style.visibility = "hidden";
            }
            break;
        case 5:
            dotList = document.getElementById(name).querySelectorAll(".mid");
            for (let i = 0; i < dotList.length; i++) {
                dotList[i].style.visibility = "hidden";
            }
            document.getElementById(name).getElementsByClassName("center")[0].style.visibility = "visible";
            break;
        case 6:

    }
}

function resetDice() {
    dotList = document.querySelectorAll(".top,.mid,.bottom,.left,.right");
    for (let i = 0; i < dotList.length; i++) {
        dotList[i].style.visibility = "visible";
    }
    dotList = document.getElementsByClassName("center");
    for (let i = 0; i < dotList.length; i++) {
        dotList[i].style.visibility = "hidden";
    }
}

function rollTheDice () {
    let diceOne = Math.floor(Math.random() * 6) + 1;
    let diceTwo = Math.floor(Math.random() * 6) + 1;

    resetDice();
    setTheDice('diceOne', diceOne);
    setTheDice('diceTwo', diceTwo);

    if (diceOne === diceTwo) {
        document.querySelector('h1').textContent = "Draw!";
        document.querySelector('.flag').style.visibility = "hidden";
        document.querySelector('.flag').style.margin = "0px";
    } else if (diceOne > diceTwo) {
        document.querySelector('h1').textContent = `Player 1 wins!`;
        document.querySelector('.flag').style.visibility = "visible";
        document.querySelector('.flag').style.margin = "50px";
    } else {
        document.querySelector('h1').textContent = `Player 2 wins!`;
        document.querySelector('.flag').style.visibility = "visible";
        document.querySelector('.flag').style.margin = "50px";
    }
}

if (window.performance.navigation.type === window.performance.navigation.TYPE_RELOAD) {
    rollTheDice();
}

