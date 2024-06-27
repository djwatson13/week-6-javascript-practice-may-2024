let part1 = document.getElementById("part1");
let part2 = document.getElementById("part2");
let part3 = document.getElementById("part3");
let part4 = document.getElementById("part4");
let messageParagraph = document.getElementById("messageParagraph");

function day1Part1() {
  let playerOne;
  playerOne = {};
  playerOne.name = prompt("What is your name?");
  playerOne.hiScore = prompt("What is your all time hi-score?");
  playerOne.age = prompt("How old are you?")

  messageParagraph.innerHTML = `Hi, ${playerOne.name}, ${playerOne.age}! Can you beat your hi score of ${playerOne.hiScore}?`;
}
part1.onclick = day1Part1;


function day1Part2() {
  let customer = {};
  customer.name = prompt("What is your name?");
  customer.address = prompt("What is your address?");
  customer.phone = prompt("What is your phone number?");
  
  messageParagraph.innerHTML = `Hi, ${customer.name}! Your current address is ${customer.address}. Your current phone number is ${customer.phone}`;
}
part2.onclick = day1Part2;


function day1Part3() {
  let pet;
  pet = {};
  pet.name = prompt("What is your pet's name?")

  messageParagraph.innerHTML = `Nice to meet you, ${pet.name}!`;
}
part3.onclick = day1Part3;

function day1Part4() {
  alert("hello!");
  let game;
  game = {};
  game.name = prompt("What is your favorite video game?")
  
  messageParagraph.innerHTML = `${game.name} is a very fun video game! You have good taste.`
}

part4.onclick = day1Part4;