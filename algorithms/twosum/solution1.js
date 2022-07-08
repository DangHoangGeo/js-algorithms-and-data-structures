/**
 * Two-pass Hash Table
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
 var twoSum = function(nums, target) {
    let map = new Map;
    for (let i = 0; i < nums.length; i++){
        map.set(nums[i],i);
    }
    for (let i = 0; i < nums.length; i++){
        if(map.get(target-nums[i]) & (i != map.get(target-nums[i]))){
            return[i,map.get(target-nums[i])];
        }
    }
};

let answer = twoSum([3,2,3],6);
console.log(answer);