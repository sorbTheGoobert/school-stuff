// 1. 10 хүртэлх натурал тоог хэвлэх программ бич

// 2. 10 хүртэлх натурал тооны сондгой тоонуудыг хэвлэх программ бич

// 3. 10 хүртэлх натурал тооны тэгш тоонуудыг хэвлэх программ бич

// 4. 100 хүртэлх натурал тооны нийлбэрийг олох программ бич

// 5. N хүртэлх натурал тооны хэвлэх болон тэдгээр тооны нийлбэрийг олох программ бич

// 6. Өгөгдсөн тоог анхны мөн эсэхийг олох программ бич

// 7. Өгөгдсөн интервал дахь анхны тоог хэвлэх программ бич

// 8. N тооны факториал олох программ бич

// 9. Өгөгдсөн тооны цифрүүдийн нийлбэрийг олох программ бич

// 10. N хүртэлх тооны сондгой тоо хэвлэх болон түүний нийлбэрийг олох программ бич

// 11. N хүртэлх тооны тэгш тоо хэвлэх болон түүний нийлбэрийг олох программ бич

// 12. Өгөгдсөн  эерэг тооны урвууг хэвлэх программ бич // 123 <=> 321

// 13. Өгөдсөн тооны цифрүүдийг үгээр хэвлэх программ бич

// 14. prompt ашиглан n -д утга орууlахад palindrome тоо мөн эсэхийг шалгах.
// Example1 : input: 111, output: true
// Example2 : input: 110, output: false
// Example3 : input: 101, output: true
// https://en.wikipedia.org/wiki/Palindromic_number

// 15 1-100 ийн хооронд random оор 1 утга авдаг randomNumber гэсэн variable зарлана уу.
// 15.1 Prompt ашиглан 1 утга аваад тэр тоог таах хүртэл зогсолтгүй ажиллах loop бичээргэй. 
// 15.2 Хэрвээ prompt - оос авсан утга нь randomNumber оос их бол "таны оруулсан тоо их байна" г.м чиглүүлэх маягаар хэвлэдэг байх.

// 16. Давхар давталт 1
// Бүхэл тоо өгөгдөнө. Жишээн дээрхтэй төстэй тоон хэлбэрийг үүсгэ.
// Input: 5
// Output:
// - 1 
//  - 1 2 
//  - 1 2 3 
//  - 1 2 3 4 
//  - 1 2 3 4 5

// 17. Давхар давталт 2
// Бүхэл тоо өгөгдөнө. Жишээн дээрхтэй төстэй тоон хэлбэрийг үүсгэ.
// Input: 5
// Output:
// - 5 4 3 2 1 
// - 5 4 3 2 
// - 5 4 3 
// - 5 4 
// - 5

// 18. Multiplication Tables
// Write a for loop that will iterate from 0 to 10. For each iteration of the for loop, it will multiply the number by 9 and log the result
// (e.g. "2 * 9 = 18").
// Bonus: Use a nested for loop to show the tables for every multiplier from
// 1 to 10 (100 results total).

// 19. Using a for loop print all even numbers up to and including n. Don’t include 0.

// let n1 = 22;
// Example output:
// 2 4 6 8 10 12 14 16 18 20 22 OR each item on a new line

// 20. Given a string change the every second letter to an uppercase ‘Z’. Assume
// there are no space.

// let str1 = "javascript";  
// Example output:
// jZvZsZrZpZ OR each letter on a new line
// HINT: You can use  if((i+1) % 2 == 0) to check for even indexes 

// // 1
// console.log("1.");
// let i;
// for (i = 1; i <= 10; i++) console.log(i);
// //2
// console.log("2.");
// for (i = 1; i < 10; i += 2) console.log(i);
// //3
// console.log("3.");
// for (i = 2; i <= 10; i += 2) console.log(i);
// //4
// console.log("4.");
// let sum = 0;
// for (i = 1; i <= 100; i++) sum += i;
// console.log(sum);
// //5
// console.log("5.");
// let n = prompt("n");
// sum = 0;
// for (i = 1; i <= n; i++) {
//     console.log(i);
//     sum += i;
// }
// console.log(sum);
// //6
// console.log("6.")
// n = prompt("n");
// function checkIfPrime(num) {
//     var isPrime = true;
//     var eachNumber;
//     if (num <= 1) isPrime = false;
//     else {
//         for (eachNumber = 2; eachNumber < num; eachNumber++) {
//             if (num % eachNumber == 0) {
//                 isPrime = false;
//                 break;
//             }
//         }
//     }
//     return isPrime;
// }
// if (checkIfPrime(n)) console.log("anhnii");
// else console.log("anhnii bish");
// //7
// console.log("7.")
// let a = prompt("interval1"), b = prompt("interval2");
// for (i = a; i <= b; i++) if (checkIfPrime(i)) console.log(i);
// //8
// console.log("8.");
// n = prompt("n factorial");
// sum = 1;
// for (i = 1; i <= n; i++) sum *= i;
// console.log(sum);
// //9
// console.log("9.");
// n = prompt("n digit addition");
// sum = 0;
// function numberToArray(num) {
//     num = String(num);
//     var output = new Array(num.length);
//     var letter;
//     for(letter = 0; letter < num.length; letter++){
//         output[letter] = parseInt(num[letter]);
//     }
//     return output;
// }
// n = numberToArray(n);
// for(i = 0; i < n.length; i++) sum+=n[i];
// console.log(sum);
// //10
// console.log("10.");
// n = prompt("n for odd digit")
// sum = 0;
// for(i = 1; i <= n; i+=2){
//     console.log(i);
//     sum+=i;
// }
// console.log(sum);
// //11
// console.log("11.");
// n = prompt("n for x%2==0 typa digit")
// sum = 0;
// for(i = 2; i <= n; i+=2){
//     console.log(i);
//     sum+=i;
// }
// console.log(sum);
// //12
// console.log("12.");
// n = prompt("reverse");
// n = numberToArray(n);
// let reserve;
// sum = 0;
// for(i = 0; i < n.length / 2; i++){
//     reserve = n[i];
//     n[i] = n[n.length - 1 - i];
//     n[n.length - 1 - i] = reserve;
// }
// for(i = 0; i < n.length; i++) sum+=n[i] * Math.pow(10, n.length - 1 - i);
// console.log(sum);
// //13
// console.log("13.");
// n = prompt("tostring");
// n = numberToArray(n);
// for(i = 0; i < n.length; i++) n[i] = String(n[i]);
// console.log(n);
// //14
// console.log("14.");
// n = prompt("palindrome");
// n = numberToArray(n);
// isPalindrome = true;
// for(i = 0; i < n.length / 2; i++) if(n[i] != n[n.length - i - 1]) isPalindrome = false;
// console.log(isPalindrome);
// //15
// console.log("15.");
// n = prompt("give me a number, i could geuss it in 1 try");
// function clear() {
//     console.clear();
// }
// let randomNumber = Math.floor((Math.random() * 100) + 1);
// function guess(n) {
//     randomNumber = Math.floor((Math.random() * 100) + 1);
//     if (randomNumber < n) {
//         console.log(`${randomNumber}, таний тоо их байна.`);
//     } else if (randomNumber > n) {
//         console.log(`${randomNumber}, таний тоо бага байна.`);
//     } else if(randomNumber == n){
//         console.log(`${randomNumber}, ez`);
//         clearInterval(sisyphus);
//         clearInterval(uhh);
//     }
// }
// sisyphus = setInterval(guess, 1, n);
// uhh = setInterval(clear, 5000);
// //16
// let j;
// let str = "";
// for(i = 1; i <= 5; i++){
//     for(j = 1; j <= i; j++){
//         str+=String(j);
//         str+=" ";
//     }
//     console.log(str);
//     str = "";
// }
// //17
// for (i = 1; i <= 5; i++) {
//     for (j = 5; j >= i; j--) {
//         str += String(j);
//         str += " ";
//     }
//     console.log(str);
//     str = "";
// }
// //18
// for(i = 1; i <= 10; i++){
//     for(l = 1; l <= 10; l++){
//         console.log(`${i} * ${l} = ${i*l}`);
//     }
// }
// //19
// //11 dugeer bodlogtoi adilhan???
// //20
// str = "javascript";
// strOut = "";
// for(i = 0; i < str.length; i++){
//     if(i % 2 == 1){
//         strOut+="Z";
//     }else{
//         strOut+=str[i];
//     }
// }
// console.log(strOut);