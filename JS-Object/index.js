// 1. Нохой нэртэй хоосон объект үүсгэ
// Нохойн объектыг консол дээр хэвлэ
// Нохойны объектын үүлдэр, нэр, өнгө, нас, хайр татсан шинж чанарыг нэмнэ үү. 
// Нохойн объектоос үүлдэр, нэр, хөл, өнгө, нас, хайр татсан шинж чанарын value - г аваарай

const dog = {};
console.log(dog);
dog.breed = "i dont fricking know";
dog.name = "dog?";
dog.color = "green";
dog.age = -1; // i think i forgot
dog.memorable = "its probably a dog :)";
dog.legs = [0, 0, 0, 0]; // its flying?????
console.log(dog);

// 2. Машин нэртэй объект  
// let car = {
//   make: "Toyota",
//   model: "Corolla",
//   year: 2019,
//   color: "Red"
// };
// 2.1 "color" property-г солих
// 2.2 "owner" нэртэй шинэ property нэмэх
// 2.3 Бүх property-руу хандаж log дээр хэвлэх 

const car = {
    make: "Toyota",
    model: "Corolla",
    year: 2019,
    color: "Red"
};

car.color = "Prismatic";
car.owner = "";
console.log(car);

// 3. Create an object called 'person' with properties name, age, and address.
// 3.1 The address property should be an object with properties street, city, and country.
// 3.2 Access and log the properties of the `address` object. 

const person = {
    name: "[REDACTED]",
    age: "[REDACTED]",
    address: {
        street: "[REDACTED]",
        city: "[REDACTED]",
        country: "[REDACTED]"
    }
};

console.log(person);
console.log(person.address);

// 4. Create an object called book with properties title, author, and year.
// Delete the year property from the book object.
// Log the updated book object.

const book = {
    title: "shakespeare i think",
    author: "notshakesbeer",
    year: "1BC"
}

console.log(book);

delete book.year;

console.log(book);

// Log all the keys and values of the movie object to the console.

const movie = {
    title: "the boom guy: boomer",
    director: "oppenhiemer",
    year: "241 BC",
}

console.log(movie);

// 6. Create two objects representing two people's details.
// Merge them into a single object.
// Log the merged object.

let person1 = {
    name: "Joe",
    // age: 32,
    gender: "HELL YEAH🦅🦅🦅🦅",
}
let person2 = {
    name: "mama",
    age: 1850,
    // gender: "HELL NAW🇬🇧🇬🇧🇬🇧🇬🇧",
}

console.log({...person1, ...person2});

// 7. Create an object data with properties firstName, lastName, and age.
// Rename the firstName property to name.
// Log the updated data object.

let obj = {
    firsName: "6",
    lastName: "6",
    age: 6,
}

obj.name = obj.firsName;
delete obj.firsName;

console.log(obj);

// 8. Create an object userProfile with properties username, email, and age.
// Write code to check if email exists and log it; if it doesn't, assign a default value and log the updated object.

let userProfile = {
    username: "X*X_GameGod21_X*X",
    email: "gamergod21@yahoo.com",
    age: 21
}

// eh whatever