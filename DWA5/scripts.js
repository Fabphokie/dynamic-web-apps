// scripts.js

const form = document.querySelector("[data-form]");
const result = document.querySelector("[data-result]");

form.addEventListener("submit", (event) => {
  event.preventDefault();
  const entries = new FormData(event.target);
  const { dividend, divider } = Object.fromEntries(entries);
  result.innerText = dividend / divider;


// check if any input value is missing
if(dividend==="" || divider ===""){
    result.innerText = "Division not performed. Both values are required in inputs. Try again.";
    return;
}

// Check if the inputs are valid numbers
if(isNaN(dividend) || isNaN(divider)) {
    console.error("Invalid number provided");
    console.trace("Call stack");
    result.innerText ="Something critical went wrong. Please reload the page.";
    return;
}

// Check if the divider is zero
if(divider == 0){
    result.innerText = "Division not performed.Invalid number provided. Try again.";
    console.error("Division by zero");
    console.trace("Call stack");
    return;
}
/*if (!Number.isInteger(quotient)) {
    result.innerText = "Division not performed. Decimal result is not allowed";
    return;
}

  result.innerText = quotient;*/

// Perform the division and display the result
const quotient = dividend / divider;
result.innerText = Number.isInteger(quotient) ? quotient : Math.floor(quotient);
});