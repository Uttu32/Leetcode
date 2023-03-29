//Find the index of first occurance in a string

/**
 * @param {string} haystack
 * @param {string} needle
 * @return {number}
 */
var strStr = function(haystack, needle) {
    let len = needle.length;
    if(haystack.includes(needle)==false){
        return -1;
    }
    else{
        for(let i=0;i<haystack.length;i++){
            let word ="";
            while(word.length < len){
                for(let j=i ; j<i+len ; j++){
                    word = word + haystack[j];
                }
            }
            if(word == needle){
                return i;
            }
        }
    }
};
