console.log("Hello world");

const paragraph = document.getElementById("paragraph");

paragraph.innerHTML = "Hello world";

var started = false;

function input(event) {
    if(!started){
        if (event.key == " ") {
            started = true;
            letterNormalized = 0;
            paragraph.style.color = "red";
            const CHAOS = setInterval(randomize, 1);
            setTimeout(greeting, 4000);
        }
    }
}

var firstPartI = 5;
var lastPartI = 6;
function randomize() {
    switch(letterNormalized) {
        case 0:
            var firstPart = "";
            var lastPart = "";
            firstPartI = 5;
            lastPartI = 6;
            break;
        case 1:
            var firstPart = "H";
            var lastPart = "";
            firstPartI = 4;
            lastPartI = 6;
            break;
        case 2:
            var firstPart = "He";
            var lastPart = "";
            firstPartI = 3;
            lastPartI = 6;
            break;
        case 3:
            var firstPart = "Hel";
            var lastPart = "";
            firstPartI = 2;
            lastPartI = 6;
            break;
        case 4:
            var firstPart = "Hell";
            var lastPart = "";
            firstPartI = 1;
            lastPartI = 6;
            break;
        case 5:
            var firstPart = "Hello";
            var lastPart = "";
            firstPartI = 0;
            lastPartI = 6;
            break;
        case 6:
            var firstPart = "Hello";
            var lastPart = "w";
            firstPartI = 0;
            lastPartI = 5;
            break;
        case 7:
            var firstPart = "Hello";
            var lastPart = "wo";
            firstPartI = 0;
            lastPartI = 4;
            break;
        case 8:
            var firstPart = "Hello";
            var lastPart = "wor";
            firstPartI = 0;
            lastPartI = 3;
            break;
        case 9:
            var firstPart = "Hello";
            var lastPart = "worl";
            firstPartI = 0;
            lastPartI = 2;
            break;
        case 10:
            var firstPart = "Hello";
            var lastPart = "world";
            firstPartI = 0;
            lastPartI = 1;
            break;
        case 11:
            var firstPart = "Hello";
            var lastPart = "world!";
            firstPartI = 0;
            lastPartI = 0;
            break;
        default:
            var firstPart = "Hello";
            var lastPart = "world!";
            firstPartI = 0;
            lastPartI = 0;
            break;
    }
    for (var i = 0; i < firstPartI; i++) {
        var randomeLetter = Math.floor(Math.random() * 94) + 32;
        randomeLetter = String.fromCharCode(randomeLetter);
        firstPart += randomeLetter;
    }
    for (var i = 0; i < lastPartI; i++) {
        var randomeLetter = Math.floor(Math.random() * 94) + 32;
        randomeLetter = String.fromCharCode(randomeLetter);
        lastPart += randomeLetter;
    }
    paragraph.innerHTML = firstPart + " " + lastPart;
}

var letterNormalized = 0;

function greeting() {
    if(started){
        letterNormalized++;
        if (letterNormalized == 11) {
            paragraph.style.color = "white";
        }
        if (letterNormalized == 12) {
            started = false;
            clearInterval(CHAOS);
        }
        setTimeout(greeting, 2000);
    }
}
 


