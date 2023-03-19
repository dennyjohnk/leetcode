const OPERATORS = {
    '+': (a, b) => a + b,
    '-': (a, b) => a - b,
    '*': (a, b) => a * b,
    '/': (a, b) => Math.trunc(a / b)
}

var evalRPN = function (tokens) {
    const stack = [];
    for (const token of tokens) {
        if (token in OPERATORS) {
            const [operand2, operand1] = [stack.pop(), stack.pop()];
            const result = OPERATORS[token](operand1, operand2);
            stack.push(result);
        } else {
            stack.push(Number(token))
        }
    }
    return stack.pop();
}


const tokens = ["4", "13", "5", "/", "+"];
const result = evalRPN(tokens);
console.log(result);