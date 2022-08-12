module.exports = function check(str, bracketsConfig) {
  // your solution
  
  // const closePair = {
  //   '(': ')',
  //   '{': '}',
  //   '[': ']',
  //   '|': '|',
  // }

  const steck = []

  for(let i = 0; i < str.length; i++){
    let currentSymbol = str[i];
   
    for(let arr of bracketsConfig){
      let openBrackets = arr[0];
      let closeBrackets = arr[1]
    
      if(currentSymbol === openBrackets){
        let lastSymbol = steck[steck.length - 1];
        if(steck.length > 0 && currentSymbol === lastSymbol && currentSymbol !== '('
          && currentSymbol !== '{' && currentSymbol !== '['){
          steck.pop(lastSymbol);
        } else {
          steck.push(currentSymbol);
        }
      } else {
        
          // if(steck.length === 0){
          //   return false;
          // }

          let lastSymbol = steck[steck.length - 1];

          if(currentSymbol === closeBrackets && lastSymbol === openBrackets){
            steck.pop(lastSymbol); 
          }
        }
      }
    }

    if(steck.length === 0){
      return true;
    } else {
      return false;
    }
  
}
