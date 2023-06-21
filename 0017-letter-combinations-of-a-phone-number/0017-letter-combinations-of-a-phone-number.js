/**
 * @param {string} digits
 * @return {string[]}
 */
var letterCombinations = function(digits) {
  if (digits.length === 0) return [];
  const keys = {
      '2': 'abc',
      '3': 'def',
      '4': 'ghi',
      '5': 'jkl',
      '6': 'mno',
      '7': 'pqrs',
      '8': 'tuv',
      '9': 'wxyz'
  }
  
  const result = [];
  const backtrack = function(currentIndex, currentString){
      if(currentIndex === digits.length){
          result.push(currentString);
          return;
      }
      const letters = keys[digits[currentIndex]];
      for(let i = 0;i < letters.length;i++){
          backtrack(currentIndex + 1, currentString + letters[i]);
      }
  }
  backtrack(0, '');
  return result;
};