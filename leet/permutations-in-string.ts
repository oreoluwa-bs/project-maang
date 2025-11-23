// brute force  Time complexity: O(nxm)  Space complexity: O(n)
function permuationInStringV1(s1: string, s2: string): boolean {
  const freqA = new Map<string, number>();
  const freqB = new Map<string, number>();
  let right = 0;
  let left = 0;

  for (let i = 0; i < s1.length; i++) {
    const count = freqA.get(s1[i]) || 0;
    freqA.set(s1[i], count + 1);
  }

  while (right < s2.length) {
    const count = freqB.get(s2[right]) || 0;
    freqB.set(s2[right], count + 1);

    if (right - left + 1 === s1.length) {
      if (areMapsEqual(freqA, freqB)) {
        return true;
      }
      const charToRemove = s2[left];
      const rcount = freqB.get(charToRemove)!;

      if (rcount < 2) {
        freqB.delete(charToRemove);
      } else {
        freqB.set(charToRemove, rcount - 1);
      }
      left++;
    }

    right++;
  }

  return false;
}

function areMapsEqual(map1, map2) {
  // 1. Check if the sizes are different. If so, they cannot be equal.
  if (map1.size !== map2.size) {
    return false;
  }

  // 2. Iterate through one map and compare its entries to the other.
  for (let [key, value] of map1) {
    // Check if the key exists in the second map and if the corresponding value is the same.
    // Using Object.is() for value comparison handles NaNs and -0 correctly,
    // which strict equality (===) might not always do as expected for these specific cases.
    if (!map2.has(key) || !Object.is(map2.get(key), value)) {
      return false;
    }
  }

  // If all checks pass, the maps are considered equal.
  return true;
}

// Time complexity: O(n + m)   Space complexity: O(1)
function permuationInString(s1: string, s2: string): boolean {
  const freqA = new Array(26).fill(0);
  const freqB = new Array(26).fill(0);

  for (let i = 0; i < s1.length; i++) {
    const iAt = s1.charCodeAt(i) - "a".charCodeAt(0);
    freqA[iAt] = freqA[i] + 1;

    const bAt = s2.charCodeAt(i) - "a".charCodeAt(0);
    freqB[bAt] = freqB[i] + 1;
  }

  if (matches(freqA, freqB)) {
    return true;
  }

  // Slide the window
  for (let i = s1.length; i < s2.length; i++) {
    // Add the new character
    const addIdx = s2.charCodeAt(i) - "a".charCodeAt(0);
    freqB[addIdx]++;

    // Remove the character going out of the window
    const remIdx = s2.charCodeAt(i - s1.length) - "a".charCodeAt(0);
    freqB[remIdx]--;

    // Check if frequencies match
    if (matches(freqA, freqB)) {
      return true;
    }
  }

  return false;
}

function matches(a: number[], b: number[]): boolean {
  for (let i = 0; i < 26; i++) {
    if (a[i] !== b[i]) {
      return false;
    }
  }
  return true;
}

/*
 *
 *
 *
 */

(function run() {
  console.log(permuationInStringV1("ab", "eidbaooo")); // true
  console.log(permuationInStringV1("ab", "eidboaoo")); // false
  console.log(permuationInStringV1("abd", "eidbaoo")); // true
  console.log("---------------------------");
  console.log(permuationInString("ab", "eidbaooo")); // true
  console.log(permuationInString("ab", "eidboaoo")); // false
  console.log(permuationInString("abd", "eidbaoo")); // true
})();
