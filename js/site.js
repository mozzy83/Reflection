//Get string from UI
function getValue(){
    document.getElementById("alert").classList.add("invisible");

    let userString = document.getElementById("userString").value;
    let revString = reverseString(userString);

    displayString(revString);
}

//Reverse the string
function reverseString(userString){
    let revString = [];

    for (let index = userString.length-1; index >= 0; index--) {
        revString += userString[index]; 
    }
    return revString;
}

//Display reversed string
function displayString(revString){
    document.getElementById("msg").innerHTML = `Your string's reflection is: ${revString}`;
    document.getElementById("alert").classList.remove("invisible");
}