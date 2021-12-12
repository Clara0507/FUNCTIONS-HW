// WEEK 3 HW 2; EXERCISE 3. 

//       Create an array of at least five Student objects with the following properties: name, activity, gender
    
//     - Filter all those students who are into swimming 

//     - Filter all those students who are in the activity entered by the user. 
//       For example, if the user enters "Basketball" display only students with basketball as their activity

const students=[ // This is my object, must turn into a string so HTML can display it
    {name:'Clara',  activity:'swimming', gender:'female'}, // Don't forget to also separate each object itself with a comma, as well as each property
    {name:'Sophie', activity:'writing', gender:'female'},
    {name:'Junior', activity:'basketball', gender:'male'},
    {name:'Mia', activity:'swimming', gender:'female'},
    {name:'Christian', activity:'basketball', gender:'male'},
    {name:'Gissella', activity:'painting', gender:'female'},
    {name:'Sugel', activity:'painting', gender:'female'}
]
function arrayToString (arrayOfObjects){  // You need to turn your object into string so your browser (HTML) displays it correctly
    let displayStr='' // Here I'm declaring a variable and initializing it into an empty string where it will store my result after using map() method
    arrayOfObjects.map(elemInArr => displayStr += elemInArr.name + ' ' + elemInArr.activity + ' ' + elemInArr.gender) // Here I'm using the map method to travel through my array of objects and return what I want into a string that I saved into my displayStr variable
    return displayStr
}

const swimmers=students.filter(hobby => hobby.activity.includes('swimming')) //Breakdown on line 45 on...

document.getElementById("object1").innerHTML=arrayToString(swimmers) // Here I'm calling my function (the one that rendered my objects into a string) and as an arguement I'm passing what I want filtered

// Now user enters an activity
//let prompt = require ('prompt-sync')() //This doesn't work in HTML
let userInput = prompt('Enter an activity: ').toLowerCase() // Take care of the letter case

function activityUserEnters(userAct){
    let displayUserAct=''
    userAct.map(elemInArr => displayUserAct += elemInArr.name + ' ' + elemInArr.activity + ' ' + elemInArr.gender)
    return displayUserAct
}

const userEnterAct=students.filter(hobby => hobby.activity.includes(userInput))

document.getElementById("object2").innerHTML=activityUserEnters(userEnterAct)



// BREAKDOWN OF MY ONE LINER ARROW FUNCTION (line 25)

//const studentAct-->This is the variable I'm storing my arrow function in, I named it studentAct
//students.filter-->I want to filter through my object which is named students
//()-->Open and closing parentheses because you are using a method filter(), everything goes inside these
//hobby-->Your parameter comes first. This is the name I gave my parameter, remember you don't need to put the word 'function'
// => Denotes the arrow function and what comes after is what you want to be executed, always goes after your parameter(s)
//hobby.activity-->Here you use your parameter again and .activity is accessing the activity property in your object
//.includes()-->Once you access your property you want to use .includes() to access what you want to filter, don't forget parentheses
//('swimming')-->This is your search criteria for your filtering method, goes inside the paretheses of .includes() and since swimming is a string don't forget the ''


// Now insert this file inside HTML: IT'S NOT SHOWING UP CORRECTLY IN HTML CHECK WHAT THE ISSUE IS
//HTML knows it's an object but doesn't know exactly what's inside it so you need to turn object into string using map() to 
//travel through your array of objects and give you back everything in a string that you will store in a separate variable






