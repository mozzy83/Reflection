//Get String from input
//Controller Function
function getValue() {
    document.getElementById("alert").classList.add("invisible");
    let userString = document.getElementById("userString").value;
    if(userString.length < 2){alert("Value must be longer than two characters to reverse")}
    else{let revString = reverseString(userString);
    displayString(revString);}
}
//Reverse the string
//Logic Function
function reverseString(userString) {
    let revString = [];
    //reverse a string using a for loop
    for (let i = userString.length - 1; i >= 0; i--) {
        revString += userString[i];        
    }
    return revString;
}
//Display reversed string to user
//View Function
function displayString(revstring) {
    //write to the page
    document.getElementById("msg").innerHTML = `Your string's reflection:<br> ${revstring}`;
    //show alert box
    document.getElementById("alert").classList.remove("invisible");
}