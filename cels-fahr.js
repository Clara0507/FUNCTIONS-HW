// WEEK 3 HW 2; EXCERCISE 2:

//     2a. Create a function called celsiusToFahrenheit:
//     - Take a Celsius temperature from the user and convert it to Fahrenheit
//     - Return output as string: "SOMETHING degrees Celsius is Something degrees Fahrenheit"

//     2b. Create a function called fahrenheitToCelsius:
//     - Now take a Fahrenheit temperature from the user and convert it to Celsius
//     - Return output as string: "SOMETHING degrees Fahrenheit is SOMETHING degrees Celsius"


//Celsius to Fahrenheit:
function celsiusToFahrenheit(c){    //What is/are your parameter(s)? Celsius
    return c * 9/5 + 32 
 }
 let result=`25 degrees Celsius is ${celsiusToFahrenheit(25)} degrees Fahrenheit` 
 console.log(result)

 
 //Fahrenheit to Celsius:
 function fahrenheitToCelsius(f){
     return (f - 32) * 5/9
 }
 let result=`77 degrees Fahrenheit is ${fahrenheitToCelsius(77)} degrees Celsius`
 console.log(result)


 //*Work on converting these into one liner arrow functions*
const fahr= c => c*9/5 + 32
console.log(cels(25))

const cels= f => (f-32)*5/9
console.log(fahr(77))              

//Now update your HTML file to include these one liners and remember to add user input