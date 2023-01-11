module.exports = function reverse(n) {
    let result = "";

    nStr = Math.abs(n).toString();
    for (let char of nStr) {
        result = char + result;
    }

    return +result;
};

console.log(module.exports(-123));
