function longestPalindrome(s: string): string {
    let start = 0;
    let maxLength = 0;

    for (let i = 0; i < s.length; i++) {
        const len1 = expandAroundCenter(s, i, i);
        const len2 = expandAroundCenter(s, i, i + 1);
        
        const currentMax = Math.max(len1, len2);
        
        if (currentMax > maxLength) {
            maxLength = currentMax;
            start = i - Math.floor((currentMax - 1) / 2);
        }
    }
    
    return s.substring(start, start + maxLength);
}

function expandAroundCenter(s: string, left: number, right: number): number {
    while (left >= 0 && right < s.length && s[left] === s[right]) {
        left--;
        right++;
    }
    return right - left - 1;
}