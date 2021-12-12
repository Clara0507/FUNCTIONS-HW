// WEEK 3 HW 2; Exercise 1.  
//Define a function maxOfThree that takes three numbers as arguments and returns the largest of them.

function maxOfThree(x, y, z){
    if (x>y && x>z){
        return x
    }
    else if (y>x && y>z){
        return y
    }
    else
        return z
}
console.log(maxOfThree(100, 290, 700))//For.js file; in order to see in your terminal
document.getElementById("sum").innerHTML=maxOfThree(38, 33, 55) //For HTML file 

//Turn this into one liner arrow function
//const sumOfThree=(x, y, z)=>???
