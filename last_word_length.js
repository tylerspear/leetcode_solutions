var lengthOfLastWord = function(s) {
    let trimmed = s.trim()
    let words = trimmed.split(' ')
    let lastLen = words[words.length - 1].length
    return lastLen
  };