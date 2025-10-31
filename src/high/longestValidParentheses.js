// 8.	给定一个只包含 '(' 和 ')' 的字符串，找出最长有效（格式正确且连续）括号子串的长度。
// 示例：

// 输入: "(()"
// 输出: 2
// 解释: 最长有效括号子串为 "()"

// 输入: ")()())"
// 输出: 4
// 解释: 最长有效括号子串为 "()()"


// 解题思路：

// 使用动态规划或栈来跟踪有效括号的边界。

// 解法：动态规划
function longestValidParentheses(s) {
    if (!s || s.length < 2) return 0;
    
    const n = s.length;
    const dp = new Array(n).fill(0);
    let maxLen = 0;
    
    for (let i = 1; i < n; i++) {
        if (s[i] === ')') {
            if (s[i - 1] === '(') {
                // 情况1：前一个就是 '('，形成一对
                dp[i] = (i >= 2 ? dp[i - 2] : 0) + 2;
            } else if (i - dp[i - 1] > 0 && s[i - dp[i - 1] - 1] === '(') {
                // 情况2：前一个也是 ')'，需要找到对应的 '('
                const prevLen = i - dp[i - 1] >= 2 ? dp[i - dp[i - 1] - 2] : 0;
                dp[i] = dp[i - 1] + prevLen + 2;
            }
            maxLen = Math.max(maxLen, dp[i]);
        }
    }
    
    return maxLen;
}


console.log(longestValidParentheses("(()"));
console.log(longestValidParentheses(")()())"));