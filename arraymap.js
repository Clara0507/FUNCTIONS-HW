// WEEK 3 HW 2; EXERCISE 4

// Traverse through an array (either number or string array) and display each value with their index position using Array.map method

// HINT: For index, take a look at the Syntax and Parameters sections in the MDN Doc Link for Array.map

const myArray=[34, 45, 54, 56, 75, 43, 67, 32,]
let result=''
const newArray=myArray.map((x, index) => result += `${x} is at index ${index}, `) //Need index
console.log(result)
document.getElementById("display").innerHTML=result

//x + ' ' + 'is at'+ ' ' + 'index' + ' ' + index + '; ')// Turn into template literal