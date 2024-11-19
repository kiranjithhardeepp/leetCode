class Solution:
    def searchInsert(self, nums: List[int], target: int) -> int:
        index = 0
        for i in range(len(nums)):
            if nums[i] == target:
                index = i
                break
        if index:
            return index
        else:
            for i in range(len(nums)):
                if target <= nums[i]:
                    return i
                    break
        print(i)
        print("length=",len(nums))
        if i == len(nums)-1:
            return len(nums)