```javascript
function integerSquareRoot(n) {
    if (n === 0 || n === 1) {
        return n;
    }
    let start = 1;
    let end = n;
    let ans;
    while (start <= end) {
        let mid = Math.floor((start + end) / 2);
        if (mid * mid === n) {
            return mid;
        }
        if (mid * mid < n) {
            start = mid + 1;
            ans = mid;
        } else {
            end = mid - 1;
        }
    }
    return ans;
}

console.log(integerSquareRoot(10));
console.log(integerSquareRoot(16));
console.log(integerSquareRoot(25));
```