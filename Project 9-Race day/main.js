let raceNumber = Math.floor(Math.random() * 1000);
let Registertration = true
let age = 21

if (age>18 && Registertration){
      raceNumber += 1000
}
if (age>18 && Registertration == true){
    console.log("Your race begins at 9:30 am and your race number is : " + raceNumber)
}
else if (age>18 && Registertration == false){
    console.log("Your race begins at 11:00 am and your race number is : " + raceNumber)
}
else if (age<18){
    console.log("Your race begins at 12:30 pm and your race number is : " + raceNumber)
}
else{
    console.log("Please Register First")
}