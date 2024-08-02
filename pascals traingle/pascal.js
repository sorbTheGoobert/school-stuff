let row = 10;

traingle = [
    [1],
    [1, 1]
];
function makeTraingle(row) {
    for (i = 2; i < row; i++) {
        let tempRow = new Array(i + 1);
        tempRow[0] = 1;
        for (l = 1; l < i; l++) {
            tempRow[l] = traingle[i - 1][l - 1] + traingle[i - 1][l];
        }
        tempRow[i] = 1;
        traingle.push(tempRow);
    }
}

function printTraingle() {
    if (row > 2) {
        for (i = 0; i < traingle.length; i++) {
            let string = "";
            for (l = 0; l < traingle[i].length; l++) {
                string += traingle[i][l] + ", ";
            }
            console.log(string);
        }
    } else {
        switch (row) {
            case 1:
                console.log("1");
                break;
            case 2:
                console.log("1, \n1, 1, ");
                break;
        }
    }
}

makeTraingle(row);
printTraingle()
