let string = "";

for (i = 1; i <= 8; i++) {
    for (l = 0; l < i; l++) {
        string += "# ";
    }
    string += "\n";
}

console.log(string)

// ----------------------

string = "";

for (i = 8; i >= 1; i--) {
    for (l = 0; l < i; l++) {
        string += "# ";
    }
    string += "\n";
}

console.log(string)

// ----------------------

string = "";

for (i = 8; i >= 1; i--) {
    for (l = 8; l > i; l--) {
        string += "  ";
    }
    for (l = i; l > 0; l--) {
        string += "# ";
    }
    string += "\n";
}

console.log(string)
// ----------------------

string = "";

for (i = 1; i <= 8; i++) {
    for (l = 8; l > i; l--) {
        string += "  ";
    }
    for (l = i; l > 0; l--) {
        string += "# ";
    }
    string += "\n";
}

console.log(string)

// ----------------------

string = "";

string+="# # # # # # # #\n";

for (i = 1; i < 6; i++) {
    string+="#             #"
    string += "\n";
}

string+="# # # # # # # #\n";

console.log(string)

// ----------------------

string = "";

string += "# # # # # # #\n";

for (i = 1; i < 6; i++) {
    for (l = i; l >= 1; l--) {
        string += "  ";
    }
    string += "#"
    string += "\n";
}

string += "# # # # # # #\n";

console.log(string)
// ----------------------

string = "";

string += "# # # # # # #\n";

for (i = 1; i < 6; i++) {
    for (l = 6; l > i; l--) {
        string += "  ";
    }
    string += "#"
    string += "\n";
}

string += "# # # # # # #\n";

console.log(string);
// ----------------------

string = "";

string += "# # # # # # #\n";
let space = 0;
let middleSpace = 3;
let goingDown = false;

for (i = 1; i < 6; i++) {
    string += "  ";
    if (middleSpace > 0) {
        for (l = 0; l < space; l++) {
            string += "  ";
        }
        string += "# ";
        for (l = 0; l < middleSpace; l++) {
            string += "  ";
        }
        if (!goingDown) {
            middleSpace -= 2;
        } else {
            middleSpace += 2;
        }
        string += "# "
        for (l = 0; l < space; l++) {
            string += "  ";
        }
        if (!goingDown) {
            space++;
        } else {
            space--;
        }
    } else {
        for (l = 0; l < space; l++) {
            string += "  ";
        }
        string += "# ";
        for (l = 0; l < space; l++) {
            string += "  ";
        }
        middleSpace += 2;
        space--;
        goingDown = true;
    }
    string += "  ";
    string += "\n";
}

string += "# # # # # # #\n";

console.log(string);

// ----------------------

string = "";

string += "# # # # # # #\n";
space = 0;
middleSpace = 3;
goingDown = false;

for (i = 1; i < 6; i++) {
    string += "# ";
    if (middleSpace > 0) {
        for (l = 0; l < space; l++) {
            string += "  ";
        }
        string += "# ";
        for (l = 0; l < middleSpace; l++) {
            string += "  ";
        }
        if (!goingDown) {
            middleSpace -= 2;
        } else {
            middleSpace += 2;
        }
        string += "# "
        for (l = 0; l < space; l++) {
            string += "  ";
        }
        if (!goingDown) {
            space++;
        } else {
            space--;
        }
    } else {
        for (l = 0; l < space; l++) {
            string += "  ";
        }
        string += "# ";
        for (l = 0; l < space; l++) {
            string += "  ";
        }
        middleSpace += 2;
        space--;
        goingDown = true;
    }
    string += "# ";
    string += "\n";
}

string += "# # # # # # #\n";

console.log(string);