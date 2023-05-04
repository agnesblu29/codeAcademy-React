//integer that represents my age in human years
let myAge=40;
//the first 2 years of a dog's life -> 10.5 years in dog years 
let earlyYears=2;
earlyYears*= 10.5;
/*considering that we already accounted for the first 2 years of my 21 years , we are now considering a total of 21-2=19 of human years*/
let laterYears = myAge-2;
//Each year following equates to 4 dog years.
laterYears*=4;
let myAgeInDogYears = laterYears + earlyYears;

let myName='INeS'.toLowerCase();

console.log(`My name is ${myName}. I am ${myAge} years old in human years which is ${myAgeInDogYears} years old in dog years`);
