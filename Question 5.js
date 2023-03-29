// Length of last word

/**
 * @param {string} s
 * @return {number}
 */
var lengthOfLastWord = function(s) {
    let word=""
    let len =[]
    for(let i=0;i<s.length;i++){
        
        if(s[i]!=" "){
            word=word+s[i]
            len.push(word.length)
        }
        else{
            word=""
        }
    }
    return len[len.length-1]
};
