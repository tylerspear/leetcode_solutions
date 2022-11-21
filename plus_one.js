var plusOne = function(digits) {
    //reverse the array [1,2,3,4]
    digits = digits.reverse()
    let carry = 1
    let i = 0

    while(carry){
        //if we're in bounds
        if(i < digits.length){
            //if we hit a 9, change to a 0
            if(digits[i] == 9){
                digits[i] = 0
            } else { //otherwise, just add 1 and decrement our carry variable, loop breaks
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