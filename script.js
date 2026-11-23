// let telefon = {
//   rang: "qizil",
//   xotira: "1 Gb",
//   model: "Nokia 3300",
//   narx: 1000,
// };

// let yostiq = {
//     rang: "pushti",
//     model: "yumshoq",
//     xotira: "2kg paxta",
//     narx: "5mlrd$",
// };
// console.log(yostiq)

// console.log(telefon);
// console.log(telefon.model);
// console.log(telefon["rang"]);

// alert(
//   "Bizda " +
//     telefon.model +
//     " telefoni bor. Narxi " +
//     telefon.narx +
//     " so'm, xotirasi " +
//     telefon.xotira +
//     " rangi " +
//     telefon.rang,
// );

// alert(`Bizda ${telefon.model} telefoni bor. Narxi ${telefon.narx}`);

// const person = {
//   firstName: "Vali",
// };

// person.hairColor = "black";
// person.age = 12;

// person.firstName = "Firdavs";

// console.log(person);

// let car = {};

// let name = prompt("Mashina nomini kiriting");
// let cost = prompt("Mashina narxi kiriting");
// let color = prompt("Mashina rangi kiriting");

// car.name = name;
// car.narx = cost;
// car.rang = color;

// console.log(car);


let ism = prompt("ismingizni kiriting:");
let fam = prompt("Familiyangizni kiriting:");
let yosh = Number(prompt("Yoshingizni kiriting:"));
let matem = Number(prompt("Matematika bahoingiz:"));
let eng = Number(prompt("Ingliz tili bahoingiz:"));
let info = Number(prompt("Informatika bahoingiz:"));
let his = Number(prompt("Tarix bahoingiz:"));
let yil = 2026 - yosh;
let email = ism + "." + fam + "@school.uz";
console.log("o'rtacha ball:" +  ((matem + eng + info + his) / 4));
console.log("email: " + ism + "." + fam + "@school.uz");
console.log("Tug'ilgan yili: " + yil);
console.log("Matematika: " + matem);
console.log("Ingliz tili: " + eng);

let foydalanuvchi = {
    age: yosh,
    birthyear: yil,
    email: email,
    firstname: ism,
    grades: {
        math: matem,
        english: eng,
        informatics: info,
        history: his,
    },
    lastname: fam,
};
console.log(foydalanuvchi)