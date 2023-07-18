function minimumDifference(nums) {
  const n = nums.length >> 1;
  const f = new Map();
  const g = new Map();

  for (let i = 0; i < (1 << n); ++i) {
    let s = 0, cnt = 0;
    let s1 = 0, cnt1 = 0;

    for (let j = 0; j < n; ++j) {
      if ((i & (1 << j)) !== 0) {
        s += nums[j];
        ++cnt;
        s1 += nums[n + j];
        ++cnt1;
      } else {
        s -= nums[j];
        s1 -= nums[n + j];
      }
    }

    if (!f.has(cnt)) {
      f.set(cnt, new Set());
    }
    f.get(cnt).add(s);

    if (!g.has(cnt1)) {
      g.set(cnt1, new Set());
    }
    g.get(cnt1).add(s1);
  }

  let ans = Infinity;

  for (let i = 0; i <= n; ++i) {
    const fi = Array.from(f.get(i));
    const gi = Array.from(g.get(n - i));

    fi.sort((a, b) => a - b);
    gi.sort((a, b) => a - b);

    for (let a of fi) {
      let left = 0, right = gi.length - 1;
      let b = -a;

      while (left < right) {
        let mid = (left + right) >> 1;

        if (gi[mid] >= b) {
          right = mid;
        } else {
          left = mid + 1;
        }
      }

      ans = Math.min(ans, Math.abs(a + gi[left]));

      if (left > 0) {
        ans = Math.min(ans, Math.abs(a + gi[left - 1]));
      }
    }
  }

  return ans;
}

const nums1 = [3, 9, 7, 3];
const actual1 = minimumDifference(nums1);
console.log(actual1);

const nums2 = [-36, 36];
const actual2 = minimumDifference(nums2);
console.log(actual2);

const nums = [2, -1, 0, 4, -2, -9];
const actual = minimumDifference(nums);
console.log(actual);

