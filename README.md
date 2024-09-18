# Question: How do you compute the integer square root of a number without using built-in square root functions? JavaScript Summary

The provided JavaScript code defines a function called `integerSquareRoot` that calculates the integer square root of a given number `n` without using built-in square root functions. The function uses a binary search algorithm to find the integer square root. If the input number `n` is 0 or 1, the function returns `n` as the square root. Otherwise, it initializes two variables `start` and `end` to 1 and `n` respectively, and a variable `ans` to store the result. It then enters a while loop that continues as long as `start` is less than or equal to `end`. In each iteration, it calculates the middle value `mid` between `start` and `end`, and checks if the square of `mid` is equal to `n`. If it is, it returns `mid` as the square root. If the square of `mid` is less than `n`, it updates `start` to `mid + 1` and `ans` to `mid`. If the square of `mid` is greater than `n`, it updates `end` to `mid - 1`. When the loop ends, it returns `ans` as the integer square root of `n`. The function is then called with the arguments 10, 16, and 25, and the results are logged to the console.

---

# TypeScript Differences

The TypeScript version of the solution solves the problem in a similar way to the JavaScript version. Both versions use a binary search algorithm to find the integer square root of a number. The main difference between the two versions is that the TypeScript version is written in an object-oriented style, with the algorithm encapsulated in a method of a class, while the JavaScript version is written in a procedural style, with the algorithm implemented directly in a function.

In terms of language features, the TypeScript version uses static typing, which is not available in JavaScript. The input parameter `n` and the variable `result` are both explicitly declared as type `number`. This provides compile-time type checking, which can help catch type-related errors before the code is run.

Another difference is that the TypeScript version uses a template string to output the result, which allows for easier and more readable string interpolation than the JavaScript version.

In terms of methods, both versions use the same methods (`Math.floor` for rounding down to the nearest integer, and the arithmetic operators for the calculations), so there are no differences in this regard.

---

# C++ Differences

Both the JavaScript and C++ versions solve the problem using a binary search algorithm. They both start with a range from 1 to the input number and then repeatedly divide this range in half until they find the integer square root. 

The main difference between the two versions is in how they handle the division operation. In JavaScript, the division operation always results in a floating-point number, so the `Math.floor` function is used to round down to the nearest integer. In C++, the division of two integers results in an integer, so no rounding is necessary.

Another difference is in how they handle the multiplication operation. In JavaScript, the mid value is multiplied by itself to check if it's equal to or less than the input number. In C++, to avoid potential overflow from the multiplication, the mid value is compared to the input number divided by the mid value.

The C++ version also includes input/output operations to interact with the user, while the JavaScript version simply calls the function with hard-coded values and logs the results to the console.

In terms of language features, the JavaScript version uses `let` for variable declaration, which allows block scope, while the C++ version uses `int`, which is a basic data type. The C++ version also uses the `#include <iostream>` preprocessor directive to include the input/output stream library, and the `std::cout` and `std::cin` objects for output and input respectively. The JavaScript version uses `console.log` for output.

---
