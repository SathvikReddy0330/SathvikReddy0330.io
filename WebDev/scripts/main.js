let myVariable = [1,2,3,false, 'Bob'];
let ans = true;

// this is single-line comment
/*
    This is multi-line comments
*/
let k = "Hello" + 'Buddy';
myVariable[1] === 2;

// conditionals
let iceCream = "chocolate"
if(iceCream === "chocolate"){
    alert("Yay, I love chocolate ice cream!");
}
else{
    alert("But my favorite is chocolate");
}

// functions
function multiply(num1, num2){
    let result  = num1 * num2;
    return result;
}
multiply(4, 7);

// Event Handling
document.querySelector("html").addEventListener("click",
    function(){
        alert("Stop Poking Me!!");
    });
