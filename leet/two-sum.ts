function twoSum(nums: number[], target: number): number[] {
  const map = new Map<number, number>();

  for (let i = 0; i < nums.length; i++) {
    const diff = target - nums[i];
    if (map.has(diff)) {
      return [map.get(diff)!, i];
    }
    map.set(nums[i], i);
  }
  return [];
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
  console.log(twoSum([12, 16, 22, 7, 13, 22, 2], 20));
  console.log(twoSum([7, 13, 22, 2], 20));
  console.log(twoSum([7, 3, 2, 1], 9));
})();
