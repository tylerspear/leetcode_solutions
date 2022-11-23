var isPalindrome = function(s) {
    let nonreverse = s.split(' ').join('').replace(/[^0-9a-zA-Z]+/gmi, '').toLowerCase()
    let reversed = s.split('').reverse().join('').replace(/[^0-9a-zA-Z]+/gmi, '').toLowerCase()

    return nonreverse == reversed
};