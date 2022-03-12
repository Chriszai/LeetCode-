/**
 * @param {number[]} nums
 * @return {number}
 */
 var longestConsecutive = function (nums) {
    const set = new Set();
    for (num of nums) {
        set.add(num)
    }
    let longestStreak = 0;

    for (const num of set) {
        if (!set.has(num - 1)) {
            let currentNum = num;
            let currentStreak = 1;

            while (set.has(currentNum + 1)) {
                currentNum += 1;
                currentStreak += 1;
            }

            longestStreak = Math.max(longestStreak, currentStreak);
        }
    }

    return longestStreak;
    //100 1  
};