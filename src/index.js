module.exports = function check(str, bracketsConfig) {
    const brackets = {};
  for (item of bracketsConfig) {
    for (let i = 0; i<item.length; i++) {
      brackets[item[i]] = item[i+1];
      i++;
    }
  }
  str = str.split('');

  let openBrackets = []
  let stateOfBrackets = 0;
  
  for (item of str){ 
    if (openBrackets.includes(brackets[item])) stateOfBrackets = 1;
    if (brackets[item] && stateOfBrackets == 0) {
      openBrackets.push(item);
    }
    else 
      if (item != brackets[openBrackets.pop()]) 
        return false;
      else stateOfBrackets = 0;
  }
  if (openBrackets.length != 0) return false;

  return true;
}
