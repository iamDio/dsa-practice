function longestPalindrome(s: string): string {
    // we are implementing the expand around centers pattern
    // set the start point
    let start = 0;
    // set the max pointer."track the length of the longest palindrome found so far
    let maxLength = 0;
    // loop through string
    for (let i = 0; i < s.length; i++) {
        // call a helper function wiht the string and the index. 
        // odd length palindrome check where s = string, left = i right = i. This is for odd palidnromes because it sets i as the same position for left and right pointers, making it the center. 
        const oddLength = expandAroundCenter(s, i, i);
        // even length palindrom check where s = string, left =i right i+1. We set the right pointer to the adjacent position since in even length palindromes the center will be in between 2 elements, not 1 specific character in the string
        const evenLength = expandAroundCenter(s, i, i + 1);
        // create a temporary variable current max which is set to the greater of two values 
        const currentMax = Math.max(oddLength, evenLength);
        // if current max is > the initial max length
        if (currentMax > maxLength) {
            //set max length to current max
            maxLength = currentMax;
            //set start position of current max palidnromic substring
            start = i - Math.floor((currentMax - 1) / 2);
        }
    }
    // start+maxLength is one position AFTER the last character" (because substring's second parameter is exclusive)
    return s.substring(start, start + maxLength);
}

// helper function to move the pointers
function expandAroundCenter(s: string, left: number, right: number): number {
    // this method is called during the execution of main loop in the initial function with the following params:
    //s = the string we're checking 
    //left = the index of the left pointer
    //right = the index of the second pointer
    // this loop executes for as long as left is within the beginning of the string, right is less than the length of the string i.e. still within the end of the string/right boundary, and for as long as the left pointer of the string is the same character as the right pointer of the string, indicating a palindrome
    while (left >= 0 && right < s.length && s[left] === s[right]) {
        // if the conditions are met, move left to the left, and right to the right
        left--;
        right++;
    }

    // "return the length of the palindrome found from this center"
    return right - left - 1;
}