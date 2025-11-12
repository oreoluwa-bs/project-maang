// Time O(n×m) Space O(1)
function verifyingAlienDict(words: string[], order: string): boolean {
  const orderMap = new Map<string, number>();

  for (let i = 0; i < order.length; i++) {
    orderMap.set(order[i], i);
  }

  for (let i = 0; i < words.length - 1; i++) {
    for (let j = 0; j < words[i].length; j++) {
      if (j >= words[i + 1].length) {
        return false;
      }
      if (words[i][j] != words[i + 1][j]) {
        const io = orderMap.get(words[i][j])!;
        const jo = orderMap.get(words[i + 1][j])!;

        if (jo < io) {
          return false;
        } else {
          break;
        }
      }
    }
  }

  return true;
}

/*
 * Lexicographically sorted ???
 *
 *
 * arr[a][0] < arr[b][0]  - true
 * len(arr[a]) > len(arr[b]) && above is true - false
 *
 *
 */

(function run() {
  console.log(
    verifyingAlienDict(["hello", "leetcode"], "hlabcdefgijkmnopqrstuvwxyz"),
  ); // true
  console.log(
    verifyingAlienDict(["word", "world", "row"], "worldabcefghijkmnpqstuvxyz"),
  ); // false
  console.log(
    verifyingAlienDict(["apple", "app"], "abcdefghijklmnopqrstuvwxyz"),
  ); // false
})();
