const str1 = 'abc';
const str2 = 'acb';
function isSubsequence(str1, str2){
    let i=0;
    let j=0;
    while(i< str1.length){
        //if length of str2 is 0 return false
        if(j === str2.length){
            return false;
        }
        if(str1[i] === str2[j]){
            i++
        }
        j++
    }
    return true;
}
console.log(isSubsequence(str1, str2));