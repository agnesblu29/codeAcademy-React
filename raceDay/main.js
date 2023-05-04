let raceNumber = Math.floor(Math.random() * 1000);
let early= true;
let runnerAge = 18;

if(early && runnerAge>18){
  raceNumber +=1000;
}
if(runnerAge> 18 && early){
  console.log(`Your number is: ${raceNumber}. You will race at 9:30am.`);
}
else if(!early && runnerAge > 18){
  console.log(`Your number is: ${raceNumber}. You will race at 11:00am.`);
}
else if(runnerAge < 18){
  console.log(`Your number is: ${raceNumber}. You will race at 12:30am.`);
}
else{
  console.log('Please go to the registration desk');
}
