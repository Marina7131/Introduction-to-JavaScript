/************************************************************** Task 1: Warm-up! **************************************************************/
//Task a: declare a variable called votingAge, console log true if age > 18 (no function required)

let votingAge;
if(votingAge>18);
console.log(true);



//Task b: declare a variable and then use a conditional to change the value of that variable
// based on the value assigned to a second variable (no function required)

let tester1=1;
let tester2=0;

if(tester2!=1)
    tester1=true;



//Task c: Convert string ("1999") to integer (1999)  (no function required) // hint look up the Number method

Number("1999");




//Task d: Write a function to multiply a*b 

function myFunction(a, b) {
    return a * b;   
  }

console.log(myFunction(2,3));


/************************************************************** Task 2 **************************************************************/
//Age in Dog years
//write a function that takes your age and returns it to you in dog years - they say that 1 human year is equal to seven dog years 


function myDogAge(age) {
    return age*7;  
  }


/************************************************************** Task 3 **************************************************************/
//Dog feeder 
//takes weight in pounds and age in years (note if the dog is a puppy the age will be a decimal)
// and returns the number of pounds of raw food to feed in a day.

//feeding requirements
// adult dogs at least 1 year 
// up to 5 lbs - 5% of their body weight  return .05*lbs
// 6 - 10 lbs - 4% of their body weight 
// 11 - 15 lbs - 3% of their body weight 
// > 15lbs - 2% of their body weight 

// Puppies less than 1 year
// 2 - 4 months 10% of their body weight
// 4 - 7 months 5% of their body weight 
// 7 - 12 months 4% of their body weight

// when you are finished invoke your function with the weight of 15 lbs and the age of 1 year -
// if your calculations are correct your result should be 0.44999999999999996
  
function myDogFeeder(age,lbs) {
    
    if(age>=1){
        if(lbs<=5)
        {
            return .05*lbs;
        }
        else if (lbs<=10)
        {
            return .04*lbs;
        }
        else if(lbs<=15)
        {
            return .03*lbs;
        }
         else if(lbs>15)
        {
            return .02*lbs;
        }
    }
    else
    {
       // console.log('got here');
        if(age<=(1/3)){
            return .1*lbs;
        }
        else if(age<=(7/12)){
            return .05*lbs;
        }
        else if(age<1){
            return (lbs*.04);
        }

    }

}

console.log(myDogFeeder(1,15));

  





/************************************************************** Task 4 **************************************************************/
// Rock, Paper, Sissors
// Your function should take a string (either rock paper or sissors)
// it should return you won or you lost based on the rules of the game (you may need to look up the rules if you have not played before)
// use math.random to determine the computers choice 
// hint while you can complete this with only conditionals based on strings it may help to equate choice to a number 

function game(string){
    let choice = Math.floor((Math.random() * 3) + 1);
    if(choice=1){
        choice="Rock";
    }
    else if(choice=2){
        choice="Paper";
    }
    else{
        choice="Sissors";
    }
   
    if(string=="Rock" && choice=="Sissors")
        return "You Win";
    if(string=="Rock" && choice=="Rock")
    return "You Tied";
    if(string=="Rock" && choice=="Paper")
    return "You Lost";

    if(string=="Sissors" && choice=="Sissors")
        return "You Tied";
    if(string=="Sissors" && choice=="Rock")
        return "You Lost";
    if(string=="Sissors" && choice=="Paper")
        return "You Won ";


    if(string=="Paper" && choice=="Sissors")
        return "You Lost";
    if(string=="Paper" && choice=="Rock")
        return "You Won";
    if(string=="Paper" && choice=="Paper")
        return "You Tied";

}
  

/************************************************************** Task 5 **************************************************************/
//Metric Converter
//a. KM to Miles - should take the number of kilometers and convert it to the equal number of miles

function kmConverter(km){
    return (km*0.62137119223733);
}

console.log(kmConverter(5));


//b. Feet to CM - should take the number of feet and convert it to the equal number of centimeters

function cmConverter(cm){
    return (cm * 0.032808);
}




/************************************************************** Task 6 **************************************************************/
// 99 bottles of soda on the wall
// create a function called annoyingSong
// the function should take a starting number as an argument and count down 
//- at each iteration it should log (number) bottles of soda on the wall, (number) bottles of soda,
// take one down pass it around (number left over) bottles of soda on the wall`
  
function annoyingSong(num) {
    console.log(num + " bottles of soda on the wall " + num + " bottles of soda " + "take one down pass it around " + (num-1)+" bottles of soda on the wall");
}
annoyingSong(3);


/************************************************************** Task 7 **************************************************************/
//Grade Calculator
//write a javaScript program that takes a mark out of 100 and returns a corisponding letter grade 
//90s should be A 
//80s should be B 
//70s should be Cs 
//60s should be D 
//and anything below 60 should be F
  
function letterGrade(num) {
    if(num>=90)
    {
        return "A";
    }
    if(num>=80)
    {
        return "B";
    } 
    if(num>=70){
        return "C";
    } 
    if(num>=60){
        return "D";
    } 
    if(num<60){
        return "F";
    }
}
console.log(letterGrade(82));


/************************************************************** Stretch **************************************************************/
//Create a function that counts the number of vowels within a string. It should handle both capitalized and uncapitalized vowels.
// Hint - you may need to study tomorrow's traning kit on arrays 
// try looking up the .includes() method





/************************************************************** Stretch **************************************************************/
//Take Rock, Paper, Sissors further
//update your rock papers sissors code below to take a prompt from a user using the window object





