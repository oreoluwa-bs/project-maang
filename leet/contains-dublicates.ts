// O(n) - time and space
function containsDuplicates(nums: number[]): boolean {
  const set = new Set<number>();

  for (let i = 0; i < nums.length; i++) {
    if (set.has(nums[i])) return true;
    set.add(nums[i]);
  }
  return false;
}

// O(n) - time and space
function containsDuplicatesTwo(nums: number[], k: number): boolean {
  const map = new Map<number, number>();

  for (let i = 0; i < nums.length; i++) {
    if (map.has(nums[i]) && Math.abs(i - map.get(nums[i])!) <= k) return true;
    map.set(nums[i], i);
  }
  return false;
}

// O(n) - time  O(k) space
function containsDuplicatesSliding(nums: number[], k: number): boolean {
  const window = new Set<number>();

  for (let i = 0; i < nums.length; i++) {
    if (window.has(nums[i])) return true;
    window.add(nums[i]);
    if (i >= k) {
      window.delete(nums[i - k]);
    }
  }
  return false;
}

/*
 * There are a few approaches
 *
 * Linear - go through find the a potential value and find the duplicat (O(n^2))
 *
 * Sorted -  (sort) and then use binary search (O(n))
 *
 * Hash set - o(n)
 *
 */

(function run() {
  console.log(containsDuplicates([12, 16, 22, 7, 13, 22, 2])); //true
  console.log(containsDuplicates([7, 13, 22, 2])); // false
  console.log(containsDuplicates([7, 2, 3, 2, 1])); //true

  console.log(containsDuplicatesTwo([1, 2, 3, 1], 3)); //true
  console.log(containsDuplicatesTwo([1, 0, 1, 1], 1)); // true
  console.log(containsDuplicatesTwo([1, 2, 3, 1, 2, 3], 1)); // false

  console.log(containsDuplicatesSliding([1, 2, 3, 1], 3)); //true
  console.log(containsDuplicatesSliding([1, 0, 1, 1], 1)); // true
  console.log(containsDuplicatesSliding([1, 2, 3, 1, 2, 3], 1)); // false
})();
