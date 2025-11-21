//Time-O(n) Space-O(On)
function firstMissingPositive(nums: number[]): number {
  const set = new Set<number>();

  for (let i = 0; i < nums.length; i++) {
    set.add(nums[i]);
  }

  let found = false;
  let counter = 1;
  while (!found) {
    if (!set.has(counter)) {
      return counter;
    }
    counter++;
  }

  return 1;
}

// Time-O(n) Space-O(On)
function firstMissingPositiveBetterhm(nums: number[]): number {
  const nmap = new Map();

  for (let i = 0; i < nums.length; i++) {
    if (nums[i] > 0) {
      nmap.set(nums[i], nums[i]);
    }
  }

  let found = false;
  let counter = 1;
  while (!found) {
    if (!nmap.has(counter)) {
      return counter;
    }
    counter++;
  }

  return 1;
}

// Time-O(n) Space-O(On)
function firstMissingPositiveOptimal(nums: number[]): number {
  const n = nums.length;

  // Step 1: Replace non-positive or out-of-range numbers with n+1
  for (let i = 0; i < n; i++) {
    if (nums[i] <= 0 || nums[i] > n) {
      nums[i] = n + 1;
    }
  }

  // Step 2: Mark presence by negating the value at index |nums[i]| - 1
  for (let i = 0; i < n; i++) {
    const val = Math.abs(nums[i]);
    if (val <= n) {
      nums[val - 1] = -Math.abs(nums[val - 1]);
    }
  }

  // Step 3: Find the first positive index
  for (let i = 0; i < n; i++) {
    if (nums[i] > 0) {
      return i + 1;
    }
  }

  // If all are present, return n+1
  return n + 1;
}

/*
 *
 *
 *
 */

(function run() {
  console.log(firstMissingPositive([1, 2, 0])); // 3
  console.log(firstMissingPositive([3, 4, -1, 1])); // 2
  console.log(firstMissingPositive([7, 8, 9, 11, 12])); // 1

  console.log(firstMissingPositiveBetterhm([1, 2, 0])); // 3
  console.log(firstMissingPositiveBetterhm([3, 4, -1, 1])); // 2
  console.log(firstMissingPositiveBetterhm([7, 8, 9, 11, 12])); // 1

  console.log(firstMissingPositiveOptimal([1, 2, 0])); // 3
  console.log(firstMissingPositiveOptimal([3, 4, -1, 1])); // 2
  console.log(firstMissingPositiveOptimal([7, 8, 9, 11, 12])); // 1
})();
