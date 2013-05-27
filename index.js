module.exports = function self(n) {
    if (n < 0) return NaN;
    if (n === 0) return 1;

    return n * self(n - 1);
};
