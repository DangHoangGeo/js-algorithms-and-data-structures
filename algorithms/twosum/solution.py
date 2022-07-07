from typing import List
class Solution:
    def twoSum( nums: List[int], target: int) -> List[int]:
        hMap = {}
        for index, value in enumerate(nums):
            remaining = target - value
            if remaining in hMap:
                return[index,hMap[remaining]]
            hMap[value] = index
        return []
print(Solution.twoSum([1,2,3,4,6], 6))