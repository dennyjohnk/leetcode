var isAnagram = function (s, t) {
    if (s.length !== t.length) return false;
    const sMap = new Map();

    for (const char of s) {
        if (sMap.has(char)) {
            sMap.set(char, sMap.get(char) + 1)
        } else {
            sMap.set(char, 1)
        }
    }

    for (const char of t) {
        if (sMap.has(char)) {
            sMap.set(char, sMap.get(char) - 1)
        } else return false;
    }

    for (const [_, count] of sMap) {
        if (count !== 0) return false;
    }

    return true;
}

const s = 'rat';
const t = 'car';

const result = isAnagram(s, t);
console.log(result);