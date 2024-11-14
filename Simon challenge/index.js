var running = false;
var tone1 = new Audio("./assets/sounds/B_major.mp3");
var tone2 = new Audio("./assets/sounds/C_major.wav");
var tone3 = new Audio("./assets/sounds/D_major.mp3");
var tone4 = new Audio("./assets/sounds/E_major.mp3");
var tones = [tone1, tone2, tone3, tone4]

$('h1').click(function () {
    if(!running) {
        $('body').css('background-color', 'darkslateblue');
        running = true;
        animateStart();
        setTimeout(function () {
            var count = 1;
            playRounds(count);
            count++;
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

function playRound(count) {
    return new Promise(() => {
        sequence = generateSequence(count);
        sequence.forEach(function (number) {
            $('#' + number).fadeOut(function () {
                tones[number - 1].play();
            }).fadeIn();
        });
        gatherInput(count, sequence);
    });
}

async function playRounds (count) {
    while(running) {
        await playRound(count)
    }
}

function gatherInput(count, sequence) {
    var clickCount = 0;
    var maxClicks = count;
    var userInput = 0;
    for (let i = 1; i < 5; i++) {
        $('#' + i).click(function () {
            clickCount++;
            var id = $(this).attr('id').replace('#', '')
            userInput = id;
            if(userInput !== sequence[clickCount - 1]) {
                gameOver();
            }
            if(clickCount === maxClicks) {
                for (let j = 1; j < 5; j++) {
                    $('#' + j).off('click')
                }
            }
        });
    }
}

function generateSequence(sequenceLength) {
    var sequence = [];
    for (var i = 0; i < sequenceLength; i++) {
        sequence.push(Math.floor(Math.random() * 4) + 1);
    }
    return sequence;
}

function gameOver() {
    running = false;
    $('body').css("background-color", "#EB3549");
    $('h1').text('Game Over!');
}