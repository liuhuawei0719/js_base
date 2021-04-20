var findMin = function(nums) {
  let len = nums.length;
  if(len == 0){
    return null;
  }
  if(len==1){
    return nums[0]
  }
  let l = 0; r = len-1
  while(l<r){
    let mid = Math.floor((r+l)/2);
    if(nums[mid]>nums[r]){
      r = mid
    }else{
      l = mid+1
    }
  }
  return nums[l]
};

var findMin = function(nums) {
  let low = 0;
  let high = nums.length - 1;
  while (low < high) {
      const pivot = low + Math.floor((high - low) / 2);
      if (nums[pivot] < nums[high]) {
          high = pivot;
      } else {
          low = pivot + 1;
      }
  }
  return nums[low];
};

