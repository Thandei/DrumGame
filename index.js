var numberOfDrums = document.querySelectorAll(".drum").length

// applying eventListener to all drum buttons
for (var i = 0; i < numberOfDrums; i++) {
    document.querySelectorAll(".drum")[i].addEventListener("click", function() {
        var buttonInnerHtml = this.innerHTML;
        makeSound(buttonInnerHtml);

    })
}

// Applying eventListener to Keyboard with sending event parameter to anaymous function which enables key attr

document.addEventListener("keypress", function(e) {

    makeSound(e.key);
})

function makeSound(key) {
    switch (key) {
        case "w":
            var tom_1_aud = new Audio("/sounds/tom-1.mp3");
            tom_1_aud.play();
            break;
        case "a":
            var tom_2_aud = new Audio("/sounds/tom-2.mp3");
            tom_2_aud.play();
            break;
        case "s":
            var tom_3_aud = new Audio("/sounds/tom-3.mp3");
            tom_3_aud.play();
            break;
        case "d":
            var tom_4_aud = new Audio("/sounds/tom-4.mp3");
            tom_4_aud.play();
            break;
        case "j":
            var snare = new Audio("/sounds/snare.mp3");
            snare.play();
            break;
        case "k":
            var crash = new Audio("/sounds/crash.mp3");
            crash.play();
            break;

        case "l":
            var kick = new Audio("/sounds/kick-bass.mp3");
            kick.play();
            break;



    }
}