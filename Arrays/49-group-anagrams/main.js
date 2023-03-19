var groupAnagrams = function (strs, map = new Map()) {
    if (!strs.length) return [];

    groupWords(strs, map);
    return [...map.values()];
};

function groupWords(strs, map) {
    for (const word of strs) {
        const hash = getHash(word);
        const values = map.get(hash) || [];
        values.push(word);

        map.set(hash, values)
    }
}

function getHash(word) {
    const frequency = new Array(26).fill(0);
    for (const char of word) {
        const charCode = getCharCode(char);
        frequency[charCode]++;
    }

    return hashify(frequency);
}

function getCharCode(char) {
    return char.charCodeAt(0) - 'a'.charCodeAt(0);
}

function hashify(frequency) {
    return frequency.toString();
}

const strs = ["eat", "tea", "tan", "ate", "nat", "bat"];
const result = groupAnagrams(strs);
console.log(...result);