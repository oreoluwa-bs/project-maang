// Space - O(1) , Time - O(n)
function longestRepeatingCharacterReplacement(s1: string, k: number): number {
  const occurrence = new Array<number>(26).fill(0);
  let maxOccurrence = 0;
  let ans = 0;
  let left = 0;

  for (let right = 0; right < s1.length; right++) {
    const index = s1.charCodeAt(right) - "A".charCodeAt(0);
    maxOccurrence = Math.max(maxOccurrence, ++occurrence[index]);

    if (right - left + 1 - maxOccurrence > k) {
      const leftIndex = s1.charCodeAt(left) - "A".charCodeAt(0);
      occurrence[leftIndex]--;
      occurrence[s1.charCodeAt(left) - "A".charCodeAt(0)]--;
      left++;
    }

    ans = Math.max(ans, right - left + 1);
  }

  return ans;
}

/*
 *
 *
 *
 */

(function run() {
  console.log(longestRepeatingCharacterReplacement("ABAB", 2)); // 4
  console.log(longestRepeatingCharacterReplacement("AABABBA", 1)); // 4
  // console.log(longestRepeatingCharacterReplacement("ABAB", 2)); // true
})();
