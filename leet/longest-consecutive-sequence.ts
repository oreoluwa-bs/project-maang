// Time O(n^2) Space O(n)
function longestConsecutiveSequence(nums: number[]): number {
  const sne = new Set<number>();
  let lcs = 1;

  for (let i = 0; i < nums.length; i++) {
    sne.add(nums[i]);
  }

  for (let i = 0; i < nums.length; i++) {
    let cs = 1;
    let v = nums[i] + 1;
    let valid = sne.has(v);

    while (valid) {
      v = v + 1;
      valid = sne.has(v);
      cs++;
    }

    if (lcs < cs) {
      lcs = cs;
    }
  }

  return lcs;
}

// Time O(nlogn) Space O(1)
function longestConsecutiveSequenceOpt(nums: number[]): number {
  nums.sort((a, b) => a - b);
  let lcs = 1;
  let cs = 1;

  for (let i = 1; i < nums.length; i++) {
    if (nums[i] == nums[i - 1]) {
      continue;
    }

    if (nums[i] - nums[i - 1] === 1) {
      cs++;
    } else {
      if (lcs < cs) {
        lcs = cs;
      }
      cs = 1;
    }
  }

  if (lcs < cs) {
    lcs = cs;
  }

  return lcs;
}

// Time O(n) Space O(n)
function longestConsecutiveSequenceOptimal(nums: number[]): number {
  const sne = new Set<number>();

  for (let i = 0; i < nums.length; i++) {
    sne.add(nums[i]);
  }

  let lcs = 1;

  sne.forEach((v) => {
    if (sne.has(v - 1)) {
      return;
    } else {
      let cn = v;
      let csub = 1;
      while (sne.has(cn + 1)) {
        cn++;
        csub++;
      }

      if (lcs < csub) {
        lcs = csub;
      }
    }
  });

  return lcs;
}

(function run() {
  console.log(longestConsecutiveSequence([100, 4, 200, 1, 3, 2])); //4
  console.log(longestConsecutiveSequence([0, 3, 7, 2, 5, 8, 4, 6, 0, 1])); // 9
  console.log(longestConsecutiveSequence([1, 0, 1, 2])); // 3

  console.log("--------");

  console.log(longestConsecutiveSequenceOpt([100, 4, 200, 1, 3, 2])); //4
  console.log(longestConsecutiveSequenceOpt([0, 3, 7, 2, 5, 8, 4, 6, 0, 1])); // 9
  console.log(longestConsecutiveSequenceOpt([1, 0, 1, 2])); // 3

  console.log("--------");

  console.log(longestConsecutiveSequenceOptimal([100, 4, 200, 1, 3, 2])); //4
  console.log(
    longestConsecutiveSequenceOptimal([0, 3, 7, 2, 5, 8, 4, 6, 0, 1]),
  ); // 9
  console.log(longestConsecutiveSequenceOptimal([1, 0, 1, 2])); // 3
})();
