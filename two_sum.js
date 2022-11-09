var twoSum = function(nums, target) {
    const passed = {}
    
    for(let i=0; i < nums.length; i++){
        
        //find the num we need
        let diff = target - nums[i]
        //if we've already passed that num
        if(passed[diff] !== undefined){
            return [passed[diff], i]
        }
        //otherwise set the object property to the current index
        else {
            passed[nums[i]] = i
        }
    }
};

console.log(twoSum([2,7,11,15], 9))