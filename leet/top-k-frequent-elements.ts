function topKFrequentElements(nums: number[], target: number): number[] {
  const frq = new Map<number, number>();

  for (let i = 0; i < nums.length; i++) {
    const key = nums[i];
    frq.set(key, (frq.get(key) || 0) + 1);
  }

  const ans = [...frq.entries()]
    .sort((a, b) => b[1] - a[1])
    .slice(0, target)
    .map(([n]) => n);
  return ans;
}

/*
 * There are a few approaches
 *
 * Linear - go through find the a potential value and find the sum (O(n))
 *
 * Binary Search -  (sort) and then use binary search (O(n))
 *
 * Hashmap
 *
 */

(function run() {
  console.log(topKFrequentElements([1, 1, 1, 2, 2, 3], 2)); // [1,2]
  console.log(topKFrequentElements([1], 1)); // [1]
  console.log(topKFrequentElements([1, 2, 1, 2, 1, 2, 3, 1, 3, 2], 2)); // [1,2]
})();
