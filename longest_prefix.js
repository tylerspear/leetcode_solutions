var longestCommonPrefix = function(strs) {
    let pre = ''
    
    //loop over the first element's length
    for(let i=0; i<strs[0].length; i++) {
        if(strs.every(item => strs[0][i] == item[i])){
            pre += strs[0][i]
        } else {
            break
        }
    }

    return pre
    
    
};

console.log(longestCommonPrefix(["flower","flow","flight"]))