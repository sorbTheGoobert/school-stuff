// Create a function that takes two numbers as arguments and returns their sum.
// console.log(Somme(7,15))

function Somme(a, b) {
    return a + b;
}
// console.log(Somme(7, 15));

// Write a function that takes the base and height of a triangle as arguments and returns its area.
// console.log(TriangleArea(10,12))

function TriangleArea(a, b) {
    return (a * b) / 2;
}
// console.log(TriangleArea(10, 22));

// Write a function that takes the height and the width of rectangle as arguments and returns its perimeter.
// console.log(RectanglePerimetre(6,6))

function RectanglePerimetre(a, b) {
    return 2 * (a + b);
}

// console.log(RectanglePerimetre(6, 6));

// Write a function that takes a number as argument and returns it square.
// console.log(SquareNumber(9))

function SquareNumber(n) {
    return n * n;
}

// console.log(SquareNumber(9));

// Write a function that takes hours as argument  and converts its into seconds.
// console.log(HourToSecond(24))

function HourToSecond(hours) {
    return hours * 3600;
}

// console.log(HourToSecond(24));

// Create a function that  takes a string as argument and returns the length of this string.

function findLength(string) {
    return string.length;
}

// console.log(findLength("PineCone"));

// write a function that takes a string as argument and returns it to number

function strToNum(string) {
    return parseInt(string);
}

// console.log(strToNum("43110 w0r1d!"));
// console.log(typeof (strToNum("43110 w0r1d!")));

// write a function that takes a number as argument and returns it to string

function numToStr(number) {
    return String(number);
}

// console.log(numToStr(534));
// console.log(typeof (numToStr(534)));

// Exercise 1
// <h3>Write a function which checks given input/parameter:</h3>
// <ul>
//   <li>If input/parameter is divisible by 3 print => Fizz</li>
//   <li>If input/parameter is divisible by 5 print => Buzz</li>
//   <li>If input/parameter is divisible by 3 or 5 print => FizzBuzz</li>
//   <li>If input/parameter is NOT divisible by 3 or 5 print => given Input Number/Value</li>
//   <li>If input/parameter is other than Number/Value print => 'Nan - Not a Number! Please Input Number' </li>
// </ul>

function FizzBuzz(number) {
    if (number % 3 == 0 && number % 5 == 0) {
        return "FizzBuzz";
    }else if (number % 3 == 0) {
        return "Fizz";
    }else if (number % 5 == 0) {
        return "Buzz";
    }else if(number % 3 != 0 && number % 5 != 0 && typeof(number) == "number"){
        return "give me something that is worthy";
    }else if(typeof(number) != "number"){
        return "Nan - Not a Number! Please Input Number";
    }
}

// console.log(FizzBuzz("hi"));

// Exercise 2

// In mathematics, the factorial of a non-negative integer n, denoted by n!, is the product of all positive integers less than or equal to n.
//  In simple terms, the Factorial of 7 is solved like this:
// 7 _ 6 _ 5 _ 4 _ 3 _ 2 _ 1 = 5,040

// Example:
// > console.log(factorializer(7));
// > 5040

function factorial(n) {
    let val = 1;
    for(i = 1; i <= n; i++){
        val*=i;
    }
    return val;
}

// console.log(factorial(7));

// Exercise 3
// Identify if a number is Odd or Even?
// A function that lets you know if a number is Even or Odd

// Example:
// > console.log(oddOrEven(7));
// > "Odd"

function oddOrEven(number) {
    if(number % 2){
        return "Odd";
    }else{
        return "Even";
    }
}

// console.log(oddOrEven(7));

// Exercise 4

// Return the sum of a number going back to it's root. In other words, the function will work like this:

// addUp(5);
// 5 + 4 + 3 + 2 + 1 + 0 = 15
// Example:
// > console.log(addUp(8));
// > 36

function addUp(number) {
    let sum = 0;
    for(i = number; i >= 0; i--) {
        sum+=i;
    }    
    return sum;
}

// console.log(addUp(8));

// Exercise 5

// Create a function  that takes a string as argument and returns true if a string is empty and false otherwise.
// isEmpty(“ ”)➞ true
// isEmpty(“Chaima”)➞ false

function isEmpty(string) {
    if(!string){
        return true;
    }else{
        return false;
    }
}

// console.log(isEmpty("123"));

// Exercise 6

// Create a function that takes two strings as arguments and returns true if
// the total number of characters in the first string is equal to the total number of characters in the second string.
// Otherwise return false.

// isEqualStr (“ Simplon”,”tunis ”)➞ false
// isEqualStr (“CA”,”FS”)➞ true

// Exercise 7

// Create a function that takes two numbers, a and b, return true if a can be divided evenly by b , return false otherwise.
// oneDevideByTwo(9,3)➞true
// oneDevideByTwo(10,2)➞true
// oneDevideByTwo(13,2)➞false

// Exercise 8

// Create a function that takes in a mood and return a sentence in the following format:
// "Today, I am feeling {mood}". However, if no argument is passed, return "Today, I am feeling neuter".
// moodToday("happy") ➞ "Today, I am feeling happy"
// moodToday( ) ➞ "Today, I am feeling neuter"

// Exercise 9

// Write a function that validates whether two strings are identical. Make it case insensitive.
// match(“HELLO WORLD”) and (”hello world”) → true
// match("mask", "mAskinG") ➞ false

// Exercise 10

// Create a function that takes a string as argument and returns "upper" if all the letters in a word are uppercase, "lower" if lowercase and "mixed" for any mix of the two.
// getCase("javascript..") ➞ "lower"
// getCase("SHOUT!") ➞ "upper"

// Exercise 11

// Create a function that takes  a string as argument (of a person’s first and last name) and returns a string with the first and last name swapped.
// swapName("Ada Lovelace") ➞ "Lovelace Ada"
// swapName(“Alan Turing”)➞  “Turing Alan”

// Exercise 12

// Create a function that takes a string and returns a string with its letters in alphabetical order.
// AlphabetSoup("javascript") ➞ "aacijprstv"
// AlphabetSoup(“simplon”) ➞”ilmnops”

// Exercise 13

// Create a function that takes a number as argument and returns the incrementing (+1) for each odd number and decrementing (-1) for each even number.
// incrementOrDecrement(5) ➞4
// incrementOrDecrement(2) ➞3

