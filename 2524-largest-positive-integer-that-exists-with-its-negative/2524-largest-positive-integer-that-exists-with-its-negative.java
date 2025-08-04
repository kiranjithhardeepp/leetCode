class Solution {
    public int findMaxK(int[] nums) {
        int greater=0;
        for(int number: nums){
            for(int i=1;i<nums.length;i++){
                if(number + nums[i]==0){
                        if(number > greater){
                            greater = number;
                        }
                        else if(nums[i]> greater){
                            greater = nums[i];
                        }
                }
            }
        }
        if(greater<=0){
            return -1;
        }
        return greater;
    }
}