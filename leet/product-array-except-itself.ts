// O(n) - time and space
function productArrExceptItself(nums: number[]): number[] {
  const pre = new Array<number>(nums.length);
  const post = new Array<number>(nums.length);

  for (let i = 0; i < nums.length; i++) {
    if (i == 0) {
      pre[i] = 1;
      continue;
    }

    pre[i] = pre[i - 1] * nums[i - 1];
  }

  for (let i = nums.length - 1; i >= 0; i--) {
    if (i == nums.length - 1) {
      post[i] = 1;
      continue;
    }

    post[i] = post[i + 1] * nums[i + 1];
  }

  return pre.map((r, i) => {
    return r * post[i];
  });
}

// time O(n) - Space O(1)
function productArrExceptItselfOpt(nums: number[]): number[] {
  let pre = 1;
  let post = 1;
  const ans = new Array<number>(nums.length).fill(1);

  for (let i = 0; i < nums.length; i++) {
    ans[i] = pre;
    pre = pre * nums[i];
  }

  for (let i = nums.length - 1; i >= 0; i--) {
    ans[i] = ans[i] * post;
    post = post * nums[i];
  }

  return ans;
}

(function run() {
  console.log(productArrExceptItself([1, 2, 3, 4])); // [24,12,8,6]
  console.log(productArrExceptItself([-1, 1, 0, -3, 3])); // [0,0,9,0,0]

  console.log(productArrExceptItselfOpt([1, 2, 3, 4])); // [24,12,8,6]
  console.log(productArrExceptItselfOpt([-1, 1, 0, -3, 3])); // [0,0,9,0,0]
})();
