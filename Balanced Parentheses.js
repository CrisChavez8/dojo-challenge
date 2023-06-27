
function isBalancedParentheses  (input) {

    //let input = "()";
    let opened = [];
    let closed = [];

    for (var i = 0; i < input.length; i++) {
    let currentChar = input[i];

    if (currentChar === "(") {
        opened.push(currentChar);
    } else if (currentChar === ")") {
        if (opened.length > 0) {
        opened.pop();
        } else if (opened.length === 0) {
        closed.push(currentChar);
        }
    }
    }

    return opened.length === 0 && closed.length === 0
    ? true
    : false

}

let result = isBalancedParentheses("()");

result ? console.log("Valid", input) : console.log("Invalid", input);