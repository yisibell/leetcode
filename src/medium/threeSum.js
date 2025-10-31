// 给你一个包含 n 个整数的数组 nums，判断 nums 中是否存在三个元素 a, b, c ，使得 a + b + c = 0？请你找出所有满足条件且不重复的三元组。

// 示例：

// 输入：nums = [-1,0,1,2,-1,-4]
// 输出：[[-1,-1,2],[-1,0,1]]


/**
 * 三数之和 - 排序 + 双指针
 */
var threeSum = function(nums) {
    const result = [];
    const n = nums.length;
    
    // 先排序
    nums.sort((a, b) => a - b);
    
    for (let i = 0; i < n - 2; i++) {
        // 跳过重复的起始数字
        if (i > 0 && nums[i] === nums[i - 1]) continue;
        
        let left = i + 1;
        let right = n - 1;
        
        while (left < right) {
            const sum = nums[i] + nums[left] + nums[right];
            
            if (sum === 0) {
                result.push([nums[i], nums[left], nums[right]]);
                
                // 跳过重复的左指针元素
                while (left < right && nums[left] === nums[left + 1]) left++;
                // 跳过重复的右指针元素
                while (left < right && nums[right] === nums[right - 1]) right--;
                
                left++;
                right--;
            } else if (sum < 0) {
                left++;
            } else {
                right--;
            }
        }
    }
    
    return result;
};

console.log(threeSum([-1,0,1,2,-1,-4]));