for(let i = 0; i < document.querySelectorAll("button.drum").length; i++) {
    document.querySelectorAll("button.drum")[i].addEventListener("mousedown", function (event){
        makeSound(this.innerHTML);
        buttonAnimation(event);
    });
    document.querySelectorAll("button.drum")[i].addEventListener("mouseup", function (event){
        buttonAnimation(event);
    });
}

document.addEventListener("keydown", function (event){
    makeSound(event.key);
    buttonAnimation(event);
});

document.addEventListener("keyup", function (event){
    buttonAnimation(event);
});

function makeSound(key) {
    switch(key) {
        case "w":
            var audio = new Audio('./sounds/crash.mp3');
            break;
        case "a":
            var audio = new Audio('./sounds/kick-bass.mp3');
            break;
        case "s":
            var audio = new Audio('./sounds/snare.mp3');
            break;
        case "d":
            var audio = new Audio('./sounds/tom-1.mp3');
            break;
        case "j":
            var audio = new Audio('./sounds/tom-2.mp3');
            break;
        case "k":
            var audio = new Audio('./sounds/tom-3.mp3');
            break;
        case "l":
            var audio = new Audio('./sounds/tom-4.mp3');
            break;
        default:
            console.log(this.innerHTML);
    }
    audio.play();
}

function buttonAnimation(event){
    switch(event.type) {
        case "mousedown":
            document.querySelector("." + event.target.innerHTML).classList.add("pressed");
            break;
        case "keydown":
            document.querySelector("." + event.key).classList.add("pressed");
            break;
        case "mouseup":
            document.querySelector("." + event.target.innerHTML).classList.remove("pressed");
            break;
        case "keyup":
            document.querySelector("." + event.key).classList.remove("pressed");
            break;
        default:
            console.log(event.type)
    }
}


