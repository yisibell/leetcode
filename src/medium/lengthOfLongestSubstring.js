// 给定一个字符串，请你找出其中不含有重复字符的 最长子串 的长度。

// 示例：

// 输入: "abcabcbb"
// 输出: 3 
// 解释: 因为无重复字符的最长子串是 "abc"，所以其长度为 3。




/**
 * 无重复字符的最长子串 - 滑动窗口
 */
var lengthOfLongestSubstring = function(s) {
    const charSet = new Set();
    let left = 0;
    let maxLength = 0;
    
    for (let right = 0; right < s.length; right++) {
        // 如果当前字符已经在窗口中，移动左指针
        while (charSet.has(s[right])) {
            charSet.delete(s[left]);
            left++;
        }
        
        // 添加当前字符到窗口
        charSet.add(s[right]);
        
        // 更新最大长度
        maxLength = Math.max(maxLength, right - left + 1);
    }
    
    return maxLength;
};

/**
 * 无重复字符的最长子串 - 哈希表优化
 */
var lengthOfLongestSubstringOptimized = function(s) {
    const charMap = new Map(); // 存储字符和其最新索引
    let left = 0;
    let maxLength = 0;
    
    for (let right = 0; right < s.length; right++) {
        const char = s[right];
        
        // 如果字符已经存在且在窗口内，直接跳转到重复字符的下一个位置
        if (charMap.has(char) && charMap.get(char) >= left) {
            left = charMap.get(char) + 1;
        }
        
        // 更新字符的最新索引
        charMap.set(char, right);
        
        // 更新最大长度
        maxLength = Math.max(maxLength, right - left + 1);
    }
    
    return maxLength;
};


console.log(lengthOfLongestSubstring("abcabcbb"));