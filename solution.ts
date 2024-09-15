Here is a TypeScript console application that computes the integer square root of a number without using built-in square root functions:

```typescript
class IntegerSquareRoot {
    computeSquareRoot(n: number): number {
        if (n == 0 || n == 1) {
            return n;
        }
        let start = 1;
        let end = n;
        let result: number;
        while (start <= end) {
            let mid = Math.floor((start + end) / 2);
            if (mid * mid == n) {
                return mid;
            }
            if (mid * mid < n) {
                start = mid + 1;
                result = mid;
            } else {
                end = mid - 1;
            }
        }
        return result;
    }
}

let app = new IntegerSquareRoot();
let num = 11;
console.log(`The integer square root of ${num} is ${app.computeSquareRoot(num)}`);
```

This application uses a binary search algorithm to find the integer square root of a number. The `computeSquareRoot` method takes a number as input and returns its integer square root. The main logic is in the while loop where it checks if the square of the mid value is equal to the input number. If it is, it returns the mid value as the integer square root. If the square of the mid value is less than the input number, it updates the start value to mid + 1 and sets the result to mid. If the square of the mid value is greater than the input number, it updates the end value to mid - 1. The loop continues until the start value is greater than the end value. At the end of the loop, it returns the result which is the integer square root of the input number.