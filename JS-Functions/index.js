// 1. Өгөгдсөн 2 тооны ихийг олох функц бич.

function largerNum(a, b) {
    if (a > b) {
        return a;
    } else
        if (a < b) {
            return a;
        } else
            if (a == b) {
                return a;
            }
}

// console.log(largerNum(10, 5));

// 2. Өгөгдсөн array -аас өгөгдсөн тоо байгаа эсэхийг олох функц бич. Тухайн тоо байвал индексийг буцаана. Байхгүй бол -1 буцаана.

function findNum(array, n) {
    for (i = 0; i < array.length; i++) {
        if (array[i] == n) {
            return `${i} index, ${i + 1}th number`;
        }
    }
    return -1;
}

// bunchonum = [520, 812, 1026, 1114, 1183, 1389, 1414, 1508, 1527, 1700];

// console.log(findNum(bunchonum, 1183));

// 3. Өгөгдсөн тэмдэгт мөрөөс -аас өгөгдсөн тэмдэгт байгаа эсэхийг олох функц бич. Тухайн тэмдэгт байвал индексийг буцаана. Байхгүй бол -1 буцаана.

function findLetter(string, letter) {
    for (i = 0; i < string.length; i++) {
        if (string[i] == letter) {
            return `${i} index, ${i + 1}st/nd/rd letter`;
        } else if (string[i].toUpperCase() == letter) {
            return `${i} index if case insensitive, ${i + 1}st/nd/rd letter`;
        }
    }
    return -1;
}

// console.log(findLetter("abcdefhijklmnopqrstuvwxyz", "A"))

// 4. Өгөгдсөн 2 тоон интервал дахь санамсаргүй тоо буцаах функц бич.

function randomFromInterval(a, b) {
    if (b > a) {
        let temp = b;
        b = a;
        a = temp;
    }
    return Math.floor(Math.random() * (a - b + 1)) + b;
}

// console.log(randomFromInterval(1, 10));

// 5. Өгөгдсөн array - ийн дундажыг олох функц бич.

function findSumOfArray(array) {
    let sum = 0;
    for (i = 0; i < array.length; i++) {
        sum += array[i];
    }
    return sum;
}

function findAvarageOfArray(array) {
    let sum = findSumOfArray(array);
    sum /= array.length;
    return sum;
}

// let score = [20, 10, 6];
// console.log(findAvarageOfArray(score));

// 6. Өгөгдсөн array - ийн нийлбэрийг олох функц бич.

// let prices = [15, 1, 5, 7.99];
// console.log(findSumOfArray(prices));
// if end like .000000000002 its funny, round it up for "less accuracy"

// 7. Өгөгдсөн тоо анхны эсэхийг олох функц бич.

function checkIfPrime(number) {
    if (number > 9007199254740991){
        return "naw too large";
    }
    if(number <= 1){
        return "eww wtfronk?";
    }
    for (i = 2; i <= Math.ceil(Math.sqrt(number)); i++){
        if(number % i == 0){
            return `divisible by ${i}, nice try`;
        }
    }
    return "yeah thats a cool prime (trying hard to not mention ultrakill)";
}
//164532895758037
// console.log(checkIfPrime(164532895758037));

// 8. Өгөгдсөн тэмдэгт мөрийн бүх үсгийг том үсэг болгох функц бич.

function toUpperCaseFromScratch(string) {
    let returnString = "";
    for(i = 0; i < string.length; i++){
        if (string.charCodeAt(i) >= 97 && string.charCodeAt(i) <= 122) {
            returnString += String.fromCharCode((string.charCodeAt(i) - 32));
        }else{
            returnString+= string[i];
        }
    }
    return returnString;
}

// console.log(toUpperCaseFromScratch("jAVAscr1p4"));

// 9. Өгөгдсөн тэмдэгт мөрийн бүх үсгийг жижиг үсэг болгох функц бич.

function toLowerCaseFromScratch(string) {
    let returnString = "";
    for (i = 0; i < string.length; i++) {
        if (string.charCodeAt(i) >= 65 && string.charCodeAt(i) <= 90) {
            returnString += String.fromCharCode((string.charCodeAt(i) + 32));
        } else {
            returnString += string[i];
        }
    }
    return returnString;
}

// console.log(toLowerCaseFromScratch("jAVAscr1p4"));

// 10. arr = [4, 32, 2, 5, 8, -10, 20, 1, 0, -20]
// arraySorter гэдэг function - руу өгж явуулахад уг function нь array ийг багаас их рүү эрэмбэлээд буцаадаг.

//quick sort btw

function arraySorter(input) {
    quickSort(input, 0, input.length - 1);
    return input;
}

function quickSort(array, start, end) {
    if (end <= start) {
        return 0;
    }
    let pivot = partition(array, start, end);
    quickSort(array, start, pivot - 1);
    quickSort(array, pivot + 1, end);
}
function partition(array, start, end) {
    let pivot = array[end];
    let i = start - 1;
    for (let j = start; j <= end - 1; j++) {
        if (array[j] < pivot) {
            i++;
            let temp = array[i];
            array[i] = array[j];
            array[j] = temp;
        }
    }
    i++;
    let temp = array[i];
    array[i] = array[end];
    array[end] = temp;
    return i;
}

//definetly didnt paste this

// arr = [4, 32, 2, 5, 8, -10, 20, 1, 0, -20];
// console.log(arraySorter(arr));