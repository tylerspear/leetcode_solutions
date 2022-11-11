//Given an integer x, return true if x is a palindrome, and false otherwise.

//1st pass with string conversion
var isPalindrome = function(x) {
    let num = x.toString()
    let num2 = num.split('').reverse().join('')
    if(num == num2){
        return true
    }
    return false
}
// };

// console.log(isPalindrome(525))

//2nd pass w/o string conversion
//get left and right values and compare
// % by 10 to get the 1's place
// divide by 100 to get the 100's place

//if those are the same, chop down by diving by 10 (121/10) to remove right digit
//mod by 100 to chop off first digit
// function isPalindrome(x){
//     if(x<0) return false

//     //find out how much to divide by each iteration
//     //121 > 100, 1211 > 1000
//     divider = 1
//     while(x>= divider * 10){
//         divider *= 10
//     }

//     while(x){
//         //get right-most digit
//         let right = x % 10
        
//         //get left digit. 121 / 100 = 1, 1211/1000 = 1
//         let left = Math.floor(x / divider)
//         if(right != left) return false
        
//         //chop off left digit 121 % 100 = 21 && right digit 21/10 = 2
//         x = Math.floor((x % divider) / 10)
        
//         //chop off 2 digits from the divider value (1000 > 100)
//         divider = Math.floor(divider / 100)
//     }
//     return true
// }

console.log(isPalindrome(9998))