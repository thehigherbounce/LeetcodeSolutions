/**
 * @param {string} s
 * @return {string}
 */
var longestPalindrome = function(s) {
if (s.length <= 1) return s;

    const isPalindrome = (str, left, right) => {
        while (left >= 0 && right < str.length && str[left] === str[right]) {
            left--;
            right++;
        }
        return str.slice(left + 1, right);
    };

    let longest = '';

    for (let i = 0; i < s.length; i++) {
        const palindrome1 = isPalindrome(s, i, i);
        const palindrome2 = isPalindrome(s, i, i + 1);

        const currentLongest = palindrome1.length > palindrome2.length ? palindrome1 : palindrome2;

        if (currentLongest.length > longest.length) {
            longest = currentLongest;
        }
    }

    return longest;
};