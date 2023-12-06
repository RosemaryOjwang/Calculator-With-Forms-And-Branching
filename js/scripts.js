//Business Logic
function add(num1, num2)    {
    return num1 + num2;
}

function subtract(num1, num2)   {
    return num1 - num2;
}

function multiply(num1, num2)   {
    return num1 * num2;
}

function divide(num1, num2) {
    return num1 / num2;
}     

//User Interface Logic
function handleCalculation(event) {
    event.preventDefault();
    //code to get and process form value will go here!
}

window.addEventListener("load", function()  {
    const form = document.getElementById("calculator");
    form.addEventListener("submit", handleCalculation);
});

