// 1. 4 н хувьсагч зарлан тоон утга өг.Өгөгдсөн 4 тооны 80-аас их тоонуудын нийлбэрийг ол.:
// a=85 b=75 c=96 d=69
// 80-аас их тоонуудын нийлбэрийг: 181

// 2. 4 н хувьсагч зарлан тоон утга өг.Өгөгдсөн 4 тооны 5-аас бага тоонуудын үржвэрийг ол. 5-аас бага тоо ядаж 1 байгаа:
// a=3 b=7 c=2 d=4
// 5-аас бага тоонуудын үржвэр: 24

// 3.if … else ашиглан myAge болон yourAge-ийн утгыг харьцуул. Харьцуулалт дээр үндэслэн үр дүнг консол руу хөгшин (би эсвэл та) гэж тэмдэглэнэ үү. Насыг оруулахын тулд prompt("Насаа оруулна уу:")-г ашиглана уу.

// 4. Амралтын өдөр эсвэл ажлын өдөр эсэхийг шалгаарай. 

// 5. Өгөгдсөн жилийг өндөр жил мөн эсэхийг шалгаад хэрвээ мөн бол өндөр жил мөн үгүй бол үгүй гэж хариулна уу.
// Өндөр жил гэдэг нь 4 жилд нэг удаа болдог бөгөөд тэр нь 2-р сар 29 хоногтой үед тохиолддог. Энэ нь 4-д хуваагдаж байвал мөн, 100 хуваагдаж байвал өндөр жил биш. Харин 400 жилд бүтнээрээ хуваагдаж байвал мөн.

// 6. Багш сурагчдын эцсийн шалгалтын дүнг дүгнэхээр болжээ
// 6.1 Бат - 67 оноо, Болд - 59 оноо авчээ.
// 6.2 Шалгалтын онооноос хамааран багш тодорхой дүнгийн жагсаалт гаргах ёстой бөгөөд энэ нь
//   a. Хэрвээ оноо 60 хувиас доош байвал (60 орохгүй) - Маш муу
//   b. Хэрвээ оноо 60 - 70 (70 орохгүй) хооронд байвал - Хангалттай
//   c. Хэрвээ оноо 70 - 80 (80 орохгүй) хооронд байвал - Дунд
//   d. Хэрвээ оноо 80 - 90 (90 орохгүй) хооронд байвал - Сайн
//   e. Хэрвээ оноо 90 - 100 хооронд байвал - Маш сайн гэсэн үнэлгээг өгч байгаа юм байна.
// 6.3 Тэгвэл тухайн сурагчдыг тэнцсэн болоод тэнцээгүй эсэхийг жагсааж доорх хэлбэрээр
// НЭР - АВСАН ОНОО - ҮНЭЛГЭЭ гэсэн маягаар console дээр харуулна уу.

// 7. Хоёр багийн дундаж оноог олно уу. ( A team - 96, 108, 89; B team - 88, 91, 110 )
// 7.1 Багийн дундаж нөгөө багийхаас их бол тэр баг түрүүлсэн гэж хэвлэнэ үү. Багуудын оноо тэнцсэн тохиолдолд багууд тэнцсэн гэж хэвлэнэ үү.
// Энэ дүрэм нь зөвхөн багийн дундаж 100 аас багагүй тохиолдолд энэхүү дүрэм хэрэгжэхийг анхаарна уу. Хэрвээ 2 баг 2 уулаа 100 аас бага тохиолдолд ялагч байхгүй. Тус бүрийн нөхцөлийг оноог өөрчилж туршиж үзээрэй.

// 8.Write conditional expressions to satisfy the following safety rules:
// a) If crewStatus is true, print "Crew Ready" else print "Crew Not Ready".
// b) If computerStatusCode is 200, print "Please stand by. Computer is rebooting." Else if computerStatusCode is 400, print "Success! Computer online." Else print "ALERT: Computer offline!"
// c) If shuttleSpeed is > 17,500, print "ALERT: Escape velocity reached!" Else if shuttleSpeed is < 8000, print "ALERT: Cannot maintain orbit!" Else print "Stable speed".

// 9.Write a JavaScript conditional statement to find the sign of product of three numbers.
// Display an console.log box with the specified sign.
 
// Sample numbers : 3, -7, 2
// Output : The sign is -

// 1
console.log("1.");
var a = 85, b = 75, c = 96, d = 69, sum = 0;
if(a > 80) sum += a;
if(b > 80) sum += b;
if(c > 80) sum += c;
if(d > 80) sum += d;
console.log(sum);
answer1 = document.createElement("p");
answer1.innerHTML = `1. ${sum}`
document.body.appendChild(answer1);
// 2
console.log("2.");
a = 3; b = 7; c = 2; d = 4; sum = 1;
if (a < 5) sum *= a;
if (b < 5) sum *= b;
if (c < 5) sum *= c;
if (d < 5) sum *= d;
console.log(sum);
answer2 = document.createElement("p");
answer2.innerHTML = `2. ${sum}`
document.body.appendChild(answer2);
// 3
console.log("3.");
let answer3;
var myAge = 14; yourAge = undefined; gotAge = false;
yourAge = prompt("Насаа оруулна уу:");
if (myAge < yourAge) sum = "Та хөгшин";
else if (myAge > yourAge) sum = "Би хөгшин";
else sum = "Адил настай";
console.log(sum);
answer3 = document.createElement("p");
answer3.innerHTML = `3. ${sum}`
document.body.appendChild(answer3);
// 4
console.log("4.");
let answer4;
var day;
day = prompt("gib day");
switch(day) {
    case "1":
        console.log("ajil");
        sum = "ajil";
        break;
    case "Monday":
        console.log("ajil");
        sum = "ajil";
        break;
    case "2":
        console.log("ajil");
        sum = "ajil";
        break;
    case "Tuesday":
        console.log("ajil");
        sum = "ajil";
        break;
    case "3":
        console.log("ajil");
        sum = "ajil";
        break;
    case "Wednesday":
        console.log("ajil");
        sum = "ajil";
        break;
    case "4":
        console.log("ajil");
        sum = "ajil";
        break;
    case "Thursday":
        console.log("ajil");
        sum = "ajil";
        break;
    case "5":
        console.log("ajil");
        sum = "ajil";
        break;
    case "Friday":
        console.log("ajil");
        sum = "ajil";
        break;
    case "6":
        console.log("amralt");
        sum = "amralt";
        break;
    case "Saturday":
        console.log("amralt");
        sum = "amralt";
        break;
    case "7":
        console.log("amralt");
        sum = "amralt";
        break;
    case "Sunday":
        console.log("amralt");
        sum = "amralt";
        break;
}
answer4 = document.createElement("p");
answer4.innerHTML = `4. ${sum}`
document.body.appendChild(answer4);
//5
console.log("5.");
let answer5;
var year = prompt("gib year");
if (year % 400 == 0) sum = "ondor jil";
else if (year % 100 == 0) sum = "ondor jil bish";
else if (year % 4 == 0) sum = "ondor jil";
console.log(sum);
answer5 = document.createElement("p");
answer5.innerHTML = `5. ${sum}`
document.body.appendChild(answer5);
// 6
console.log("6.");
let answer6;
var bat = {
    score: 67,
    name: "bat",
}
var bold = {
    score: 59,
    name: "bold",
}
function pointCheck(child, score) {
    var grade;
    if (score < 60) grade = "Маш муу";
    else if (score < 70) grade = "Хангалттай";
    else if (score < 80) grade = "Дунд";
    else if (score < 90) grade = "Сайн";
    else grade = "Маш сайн";
    return child + ` - ${score}% - ` + grade;
}
sum = pointCheck(bat.name, bat.score) + " " + pointCheck(bold.name, bold.score);
console.log(sum);
answer6 = document.createElement("p");
answer6.innerHTML = `6. ${sum}`
document.body.appendChild(answer6);
// 7