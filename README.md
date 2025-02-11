# TypeScript Type 'string' is not assignable to type 'number'

This repository demonstrates a common TypeScript error: 'Type 'string' is not assignable to type 'number'. This occurs when attempting to combine arrays of different types using the spread syntax or concatenation.

## Bug
The `combine` function is designed to merge two number arrays. However, `arr2` contains a string element ("6"), causing a type error.

## Solution
The solution involves ensuring both arrays contain only numbers before combining them.  This can be achieved through type checking or by transforming the arrays to have consistent types. 
