//write a function which accepts string and return count of each character in a string
function charCount(str) {
    var obj = {};
    for(var char of str){
        char = char.toLowerCase(); //lowercasing every alphabet
        if(/[a-z0-9]/.test(char)){
            // if(obj[char] > 0){
            //     obj[char]++;
            // }else{
            //     obj[char] = 1;
            // } 
            //or
            obj[char] = ++obj[char] || 1;
        }
    }
    return obj;
}
charCount("hello!")