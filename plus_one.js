var plusOne = function(digits) {
   //reverse the array
    digits = digits.reverse()
    let carry = 1
    let i = 0

    while(carry){
        if(i < digits.length){
            if(digits[i] == 9){
                digits[i] = 0
            } else {
                digits[i] += 1
                carry = 0
            }
        } else {
           digits.push(1)
           carry = 0
        }
        i += 1
    }
    return digits.reverse()

};

console.log(plusOne([4,3,2,1]))
console.log(plusOne([9,9,9]))