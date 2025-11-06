const valueMap = new Map<string, number>([
  ["I", 1],
  ["IV", 4], //
  ["V", 5],
  ["IX", 9], //
  ["X", 10],
  ["XL", 40], //
  ["L", 50],
  ["XC", 90], //
  ["C", 100],
  ["CD", 400], //
  ["D", 500],
  ["CM", 900], //
  ["M", 1000],
]);

// O(1)
function romanToInt(str: string): number {
  let sum = 0;
  let i = 0;

  while (i < str.length) {
    if (i < str.length - 1) {
      const k = str.substring(i, i + 2);
      if (valueMap.has(k)) {
        sum += valueMap.get(k)!;
        i = i + 2;
        continue;
      }
    }
    const k = str.substring(i, i + 1);
    sum += valueMap.get(k)!;
    i = i + 1;
  }

  return sum;
}

(function run() {
  console.log(romanToInt("III")); // 3
  console.log(romanToInt("LVIII")); // 58
  console.log(romanToInt("MCMXCIV")); // 1994
})();
