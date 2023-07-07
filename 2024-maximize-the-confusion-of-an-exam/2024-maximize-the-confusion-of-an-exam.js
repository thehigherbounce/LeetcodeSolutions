/**
 * @param {string} answerKey
 * @param {number} k
 * @return {number}
 */
var maxConsecutiveAnswers = function(answerKey, k) {
  let maxConsecutive = 0;  // Variable to store the maximum number of consecutive 'T's or 'F's
  let maxCount = 0;       // Variable to store the maximum count of 'T's or 'F's encountered so far
  let left = 0;           // Left pointer for the sliding window
  let counts = {};        // Object to keep track of the count of 'T's and 'F's

  for (let right = 0; right < answerKey.length; right++) {
    // Increment the count for the current character in the window
    counts[answerKey[right]] = (counts[answerKey[right]] || 0) + 1;

    // Update the maximum count of 'T's or 'F's
    maxCount = Math.max(maxCount, counts[answerKey[right]]);

    // If the number of replacements required is greater than k, move the left pointer and update the counts
    if (right - left + 1 - maxCount > k) {
      counts[answerKey[left]]--;
      left++;
    }

    // Update the maximum number of consecutive 'T's or 'F's
    maxConsecutive = Math.max(maxConsecutive, right - left + 1);
  }

  return maxConsecutive;
};