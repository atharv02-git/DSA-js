//valid anagram
//use frequencyCounter pattern with 1or 2 object, more than one loop

function validAnagram(first, second) {
  if(first.length != second.length){
    return false;
  }

  const lookup = {} //initially this will be empty

  for(let i = 0; i < first.length; i++) {
    let letter = first[i]
    //if letter we looping exists increment it, else set it to 1
    if(lookup[letter]){
      lookup[letter] += 1
    } else {
      lookup[letter] = 1;
    }
  }

  // console.log(lookup);

  for(let i = 0; i < second.length; i++) {
    let letter = second[i];
    //if we can't find letter or letter is zero then return false
    if(!lookup[letter]){
      return false;
    }else{
      lookup[letter] -= 1;
    }
  }
  return true;
}
validAnagram('cat', 'tac')

