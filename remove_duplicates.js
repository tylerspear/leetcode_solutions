var removeDuplicates = function(nums) {
   let left = 1
   
   for(let right = 1; right < nums.length; right++){
    //if values next to each other are different
    if(nums[right] != nums[right - 1]){
        //move left pointer to the current index
        nums[left] = nums[right]
        left += 1
    }
    console.log(nums)
   }

   return left
};

console.log(removeDuplicates([0,0,1,1,1,2,2,3,3,4]))
console.log(removeDuplicates([1,1,2]))
console.log(removeDuplicates([1]))
console.log(removeDuplicates([1,2]))
console.log(removeDuplicates([-3,-1,0,0,0,3,3]))
