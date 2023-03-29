//Valid Parentheses


/**
 * @param {string} s
 * @return {boolean}
 */
var isValid = function(s) {
    let str=[]
    for(let i=0;i<s.length;i++){
        let top=str[str.length-1]
        if(s[i]=='(' || s[i]=='[' || s[i]=='{'){
            str.push(s[i])
        }
        else if((s[i]==')' && top=='(') || (s[i]==']' && top=='[') || (s[i]=='}' && top=='{')){
            str.pop();
        }
        else{
            return false
        }
    }
    if(str.length==0){
        return true
    }
    return false
};
