class Solution:
    def singleNumber(self, nums: List[int]) -> int:
        for i in range(len(nums)):
            count = nums.count(nums[i]) #2
            if count < 2:
                return nums[i]
                break

