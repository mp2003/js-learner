class SegmentTree {
  constructor(size) {
    this.size = size;
    this.tree = Array(4 * size).fill(0);
    this.lazy = Array(4 * size).fill(0);
  }

  _propagate(node, start, end) {
    if (this.lazy[node] !== 0) {
      this.tree[node] += this.lazy[node];
      if (start !== end) {
        this.lazy[2 * node + 1] += this.lazy[node];
        this.lazy[2 * node + 2] += this.lazy[node];
      }
      this.lazy[node] = 0;
    }
  }

  _rangeUpdate(node, start, end, l, r, value) {
    this._propagate(node, start, end);

    if (start > r || end < l) return;

    if (start >= l && end <= r) {
      this.lazy[node] += value;
      this._propagate(node, start, end);
      return;
    }

    const mid = Math.floor((start + end) / 2);
    this._rangeUpdate(2 * node + 1, start, mid, l, r, value);
    this._rangeUpdate(2 * node + 2, mid + 1, end, l, r, value);

    this.tree[node] = Math.max(
      this.tree[2 * node + 1],
      this.tree[2 * node + 2]
    );
  }

  update(l, r, value) {
    this._rangeUpdate(0, 0, this.size - 1, l, r, value);
  }

  _rangeQuery(node, start, end, l, r) {
    this._propagate(node, start, end);

    if (start > r || end < l) return -Infinity;

    if (start >= l && end <= r) return this.tree[node];

    const mid = Math.floor((start + end) / 2);
    const left = this._rangeQuery(2 * node + 1, start, mid, l, r);
    const right = this._rangeQuery(2 * node + 2, mid + 1, end, l, r);

    return Math.max(left, right);
  }

  query(l, r) {
    return this._rangeQuery(0, 0, this.size - 1, l, r);
  }
}

function bestPrice(n, price, k, q, queries) {
  const MAX_PRICE = 1000000;
  let segmentTree = new SegmentTree(MAX_PRICE + 1);

  for (let i = 0; i < n; i++) {
    let low = price[i][0];
    let high = price[i][1];
    segmentTree.update(low, high, 1);
  }

  let bestPrices = Array(MAX_PRICE + 1).fill(0);
  for (let i = 1; i <= MAX_PRICE; i++) {
    if (segmentTree.query(i, i) >= k) {
      bestPrices[i] = 1;
    }
  }

  for (let i = 1; i <= MAX_PRICE; i++) {
    bestPrices[i] += bestPrices[i - 1];
  }

  let result = [];
  for (let i = 0; i < q; i++) {
    let l = queries[i][0];
    let r = queries[i][1];
    result.push(bestPrices[r] - bestPrices[l - 1]);
  }

  return result;
}

// Example usage:
const n = 3;
const price = [
  [1, 3],
  [3, 5],
  [2, 6],
];
const k = 3;
const q = 2;
const queries = [
  [1, 3],
  [5, 6],
];

console.log(bestPrice(n, price, k, q, queries)); // Output should be [1, 0]
