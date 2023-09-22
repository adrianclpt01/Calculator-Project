const display = document.querySelector(".display"); //Reads the element .display from the HTML file and saves it in display variable
const buttons = document.querySelectorAll("button"); //Reads all the button elements from the HTML file and saves it in buttons variable
const specialChars = ["%", "*", "/", "-", "+", "="]; //Stores special characters in a variable so then they can be changed to characters that can be read by the computer to do mathematical calculations
const input = document.querySelector("input")  //Reads the element .input from the HTML file and saves it in input variable
let output = ""; //Empty variable that can be used to store any output and display it when the '=' sign is pressed



const calculate = (btnValue) => {   //Variable that contains the code to calculate based on button value
  if (btnValue === "=" && output !== "") { //If the button value is '=' and the output variable is not empty it will replace the '%' sign with /100 so the computer can use it a division
    output = eval(output.replace("%", "/100")); //Replaces '%' sign with /100
  } else if (btnValue === "CE") { //If the first condition is not true it will skip to this condition and it will check if the btnValue is 'CE' will reset the output variable to empty
    output = ""; //Sets output variable to empty

  } else {
    if (output === "" && specialChars.includes(btnValue)) return; //If output is empty and button value includes any special characters, the return statement will end any further actions. This way any special characters won't be displayed if 
    output += btnValue;
  }
  display.value = output;
};

buttons.forEach((button) => {
  button.addEventListener("click", (e) => calculate(e.target.dataset.value));
});