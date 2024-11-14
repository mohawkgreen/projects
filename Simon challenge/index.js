var running = false;
var tone1 = new Audio("./assets/sounds/B_major.mp3");
var tone2 = new Audio("./assets/sounds/C_major.mp3");
var tone3 = new Audio("./assets/sounds/D_major.mp3");
var tone4 = new Audio("./assets/sounds/E_major.mp3");
var tones = [tone1, tone2, tone3, tone4]

$('h1').click(function () {
    if(!running) {
        $('body').css('background-color', 'darkslateblue');
        running = true;
        animateStart();
        setTimeout(function () {
            playRounds();
        }, 3500);
    }    
});

function animateStart() {
    for (let i = 3; i > 0; i--) { 
        $('h1').fadeOut(function () {
            $('h1').text(i)
        }).fadeIn();
    }
    $('h1').fadeOut(function () {
        $('h1').text('Go!')
    }).fadeIn();
}

function playRound(count, sequence) {
    return new Promise((resolve) => {
        sequence.push(Math.floor(Math.random() * 4) + 1);
        animateSequenceNumbers(sequence, function() {
            gatherInput(count, sequence, resolve);
        });
    });
}

async function playRounds (count) {
    var count = 1;
    var sequence = [];
    while(running) {
        await playRound(count, sequence)
        count++;
    }
}

function gatherInput(count, sequence, resolve) {
    var clickCount = 0;
    var maxClicks = count;
    var userInput = 0;
    setTimeout(function () {
        if(clickCount !== maxClicks) {
            gameOver();
        }
    }, count * 2000);
    for (let i = 1; i < 5; i++) {
        $('#' + i).click(function () {
            clickCount++;
            var id = $(this).attr('id').replace('#', '')
            $('#' + id).fadeOut(50, function() {
                tones[id - 1].play();
            }).fadeIn(50);
            userInput = id;
            if(userInput != sequence[clickCount - 1]) {
                gameOver(count);
            }
            if(clickCount === maxClicks) {
                for (let j = 1; j < 5; j++) {
                    $('#' + j).off('click')
                }
                resolve();
            }
        });
    }
}

function gameOver(count) {
    running = false;
    $('body').css("background-color", "#EB3549");
    $('h1').fadeOut(function() {
        $('h1').text('Round ' + count);
    }).fadeIn().fadeOut(function() {
        $('h1').text('Game Over!');
    }).fadeIn();
}

async function animateSequenceNumbers(sequence, next) {
    for (let i = 0; i < sequence.length; i++) {
        await animateSequenceNumber(sequence[i]);
    }
    next();
}

function animateSequenceNumber(number) {
    return new Promise((resolve) => {
        $('#' + number).fadeOut(function () {
            tones[number - 1].play();
        }).fadeIn(function () {
            resolve();
        });
    });
}