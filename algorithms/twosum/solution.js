/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
 var twoSum = function(nums, target) {
    let right = new Map;
    for (let i = 0; i < nums.length; i++){
        let remaining = target - nums[i];
        if(right.get(remaining) != undefined ){
            return[i , right.get(remaining)];
        }
        right.set(nums[i], i);
    }
};

let answer = twoSum([10,11,2,13,4,5,6],9);
console.log(answer);