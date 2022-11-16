var removeElement = function(nums, val) {
    //loop through the array
    for(let i=0; i<nums.length; i++){
        //if you find a value that matches the target
        if(nums[i] == val){
            //remove the value from the array
            nums.splice(i, 1)
            //you need to decrement to reset the index, as you have just removed a value
            i--
        }
    }
    //return the remaining array length
    return nums.length
    
};