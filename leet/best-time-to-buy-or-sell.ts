// brute force  Time complexity: O(n^2)  Space complexity: O(1)
function bestTimeToBuyOrSellStockBrute(nums: number[]): number {
  let maxProfit = 0;

  for (let i = 0; i < nums.length; i++) {
    let right = i + 1;
    while (right < nums.length) {
      const diff = nums[right] - nums[i];
      maxProfit = Math.max(diff, maxProfit);
      right++;
    }
  }

  return maxProfit;
}

// Time complexity: O(n)   Space complexity: O(1)
function bestTimeToBuyOrSellStock(nums: number[]): number {
  let maxProfit = 0,
    left = 0,
    right = 1;

  while (right < nums.length) {
    const diff = nums[right] - nums[left];

    if (diff < 0) {
      left++;
      right = left + 1;
    }

    maxProfit = Math.max(diff, maxProfit);

    right++;
  }

  return maxProfit;
}

/*
 *
 *
 *
 */

(function run() {
  console.log(bestTimeToBuyOrSellStockBrute([7, 1, 5, 3, 6, 4])); // 5
  console.log(bestTimeToBuyOrSellStockBrute([7, 6, 4, 3, 1])); // 0
  console.log(bestTimeToBuyOrSellStock([7, 1, 5, 3, 6, 4])); // 5
  console.log(bestTimeToBuyOrSellStock([7, 6, 4, 3, 1])); // 0
})();
