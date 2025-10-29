// O(n) - time and space
function validAnagrams(s: string, t: string): boolean {
  if (s.length !== t.length) return false;

  const farr = new Array<number>(26).fill(0);

  for (let i = 0; i < s.length; i++) {
    const si = s.charCodeAt(i);
    const ti = t.charCodeAt(i);

    farr[si] = farr[si] + 1;
    farr[ti] = farr[ti] - 1;
  }
  // console.log(farr.join(","));

  for (let i = 0; i < farr.length; i++) {
    if (farr[i] !== 0) {
      return false;
    }
  }

  return true;
}

// time- O(n*klogk)  space- O(n⋅k)
function groupedAnagrams(s: string[]): string[][] {
  const map = new Map<string, string[]>();

  for (let i = 0; i < s.length; i++) {
    const so = s[i].split("").sort().join("");
    map.set(so, [...(map.get(so) || []), s[i]]);
  }

  return [...map.values()];
}

// time- O(n·k)  space- O(n)
function groupedAnagramsOpt2(s: string[]): string[][] {
  const map = new Map<string, string[]>();

  for (let i = 0; i < s.length; i++) {
    const m = new Array(26).fill(0);
    for (const c of s[i]) {
      m[c.charCodeAt(0) - 97]++;
    }
    const so = m.join("");

    map.set(so, [...(map.get(so) || []), s[i]]);
  }

  return [...map.values()];
}

(function run() {
  console.log(validAnagrams("cat", "act")); //true
  console.log(validAnagrams("anagram", "nagaram")); // true
  console.log(validAnagrams("rat", "car")); //false

  console.log(groupedAnagrams(["eat", "tea", "tan", "ate", "nat", "bat"])); // [["bat"],["nat","tan"],["ate","eat","tea"]]
  console.log(groupedAnagrams([""])); // [[""]]
  console.log(groupedAnagrams(["a"])); // [["a"]]

  console.log(groupedAnagramsOpt2(["eat", "tea", "tan", "ate", "nat", "bat"])); // [["bat"],["nat","tan"],["ate","eat","tea"]]
  console.log(groupedAnagramsOpt2([""])); // [[""]]
  console.log(groupedAnagramsOpt2(["a"])); // [["a"]]
})();
