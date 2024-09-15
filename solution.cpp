```cpp
#include <iostream>

int integerSquareRoot(int num) {
    if (num == 0 || num == 1) {
        return num;
    }
    int start = 1, end = num, ans;
    while (start <= end) {
        int mid = (start + end) / 2;
        if (mid <= num / mid) {
            start = mid + 1;
            ans = mid;
        } else {
            end = mid - 1;
        }
    }
    return ans;
}

int main() {
    int num;
    std::cout << "Enter a number: ";
    std::cin >> num;
    std::cout << "Integer square root of " << num << " is " << integerSquareRoot(num) << std::endl;
    return 0;
}
```