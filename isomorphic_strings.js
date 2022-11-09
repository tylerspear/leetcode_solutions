// Given two strings s and t, determine if they are isomorphic.
// Two strings s and t are isomorphic if the characters in s can be replaced to get t.
// All occurrences of a character must be replaced with another character while preserving the order of characters. No two characters may map to the same character, but a character may map to itself.

// Example 1:

// Input: s = "egg", t = "add"
// Output: true
// Example 2:

// Input: s = "foo", t = "bar"
// Output: false
// Example 3:

// Input: s = "paper", t = "title"
// Output: true

let isIsomorphic = function(s, t) {
    //hash maps for each string: e>a, g>d
    let mapST = {}
    let mapTS = {}

    for(let i=0; i<s.length; i++){
        //get each char from the 2 strings
        let c1 = s[i]
        let c2 = t[i]
        //if the character already been mapped and not equal to the next value
        if((mapST[c1] && mapST[c1] != c2) || (mapTS[c2] && mapTS[c2] != c1)){
            return false
        }
        //set the mappings
        mapST[c1] = c2
        mapTS[c2] = c1
    }
}