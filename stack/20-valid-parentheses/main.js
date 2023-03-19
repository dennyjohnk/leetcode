var isValid = function (s) {
    const stack = [];
    const map = {
        ')': '(',
        '}': '{',
        ']': '[',
    };

    for (const char of s) {
        if (char in map) {
            const elem = stack.pop();
            if (elem === map[char]) continue;
        } else {
            stack.push(char);
            continue;
        }
        return false;
    }

    return stack.length === 0;
}

const s = "()[]{})";
const result = isValid(s);
console.log(result);