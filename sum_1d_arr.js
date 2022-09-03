var runningSum = function(nums) {
    let sums = []
    let sum = 0
    for(let i=0; i<nums.length; i++){
        sums.push(sum + nums[i])
        sum = sum + nums[i]
    }
    return sums
};