// const book = {
//     title: 'joy',
//     author: 'john',
//     pages: 26,
//     read: 'not yet read',
//     info: () => {
//         return book
//     }
// }
//
// // console.log(book.info())
//
//
// function Player(name, marker) {
//     this.name = name;
//     this.marker = marker;
//     this.sayName = function() {
//         // console.log(this.name)
//         return this.name
//     };
// }
//
// const player1 = new Player('steve', 'X');
// const player2 = new Player('also steve', 'O');
//
// // console.log(player1.sayName())
// // console.log(player2.marker)
// //
// // console.log(Object.getPrototypeOf(player1))
//
// Player.prototype.sayHello = () => {
//     console.log('Hello, i am a player')
// }
//
// player1.sayHello()
//
// // console.log(Object.getPrototypeOf(Player))

// function Person(name) {
//     this.name = name;
// }
//
// Person.prototype.sayName = function() {
//     console.log(`Hello, I'm ${this.name}!`);
// };

// function Player(name, marker) {
//     this.name = name;
//     this.marker = marker;
// }
//
// const player1 = new Player('Steve', 'X')
//
// Player.prototype.getMarker = function() {
//     console.log(`My marker is '${this.marker}'`);
// };
//
// console.log(Object.getPrototypeOf(Player.prototype))

// Object.setPrototypeOf(Player.prototype, Person.prototype)
// // console.log(Object.getPrototypeOf(Player.prototype))
//
// const player1 = new Player('Steve', 'X')
// player1.getMarker()
// player1.sayName()

// function Hero(name, level) {
//     this.name = name
//     this.level = level
// }
//
// Hero.prototype.greet = function () {
//     return `${this.name} says hello`
// }
//
// function Warrior(name, level, weapon) {
//     Hero.call(this, name, level)
//
//     this.weapon = weapon
// }
//
// function Healer(name, level, spell) {
//     Hero.call(this, name, level)

//     this.spell = spell
// }
//
// Warrior.prototype.attack = function () {
//     return `${this.name} attacks with ${this.weapon}`
// }
//
// Healer.prototype.heal = function () {
//     return `${this.name} casts ${this.spell}`
// }
//
// const hero1 = new Warrior('Bjorn', 1, 'axe')
// const hero2 = new Healer('Keon', 2, 'cast')
//
// console.log(hero1)
// console.log(hero1.attack())
// console.log(hero2.heal())
//
// Object.setPrototypeOf(Warrior.prototype, Hero.prototype)
// Object.setPrototypeOf(Healer.prototype, Hero.prototype)
//
// console.log(hero1.greet())

// const animal = {
//     eats: true,
//     walk (){
//         console.log('Animal walk')
//     }
// }
//
// let rabbit = {
//     jumps: true
// }
//
// rabbit.__proto__ = animal
//
// console.log(rabbit.eats)
// console.log(rabbit.jumps)
//
// rabbit.walk()

// let user = {
//     name: 'John',
//     surname: 'Smith',
//
//     set fullName(value){
//         [this.name, this.surname] = value.split(' ')
//     },
//
//     get fullName() {
//         return `${this.name} ${this.surname}`
//     }
// }
//
// user.fullName = 'luna lily'
// console.log(user.fullName)
// console.log(user.name)
// console.log(user.surname)
//
// function multiply() {
//     'use strict'
// }