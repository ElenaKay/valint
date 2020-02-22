
# VALINT: Does This String Represent A (Base 10) Integer?

this is a simple library to check whether a character sequence represents an integer: `'A'`, `'[b]'`, `'hello'`, `12.54`, '0.000040` and the like don't, for example; but `'0'`, `'0x5'`, `'05'`, `'5.'`, `'5.0'`, etc. all represent valid integers.

## Installation

```sh
npm install valint
```

## Functions

```typescript
function isAnyInt(str: string): bool
```

tests whether a string represents an integer, regardless of its base.
its argument has to be a String, or else an error will be thrown.

```typescript
function isBase10Int(str: string, allowTail: bool = false): bool
```

tests whether a string represents a **base 10** integer.
its first argument has to be a string; otherwise, an error will be thrown.

The default behaviour is rejecting **any** digit sequence that contains a floating point,
even things like `'5.'` and `'5.0'` which are indeed valid ***integers***.

The second argument, `allowTail`, modifies this behaviour: 
when `true`, it causes `isBase10Int` to accept strings like `'12.'` and `'12.00000000000'` as valid integers too.
when `false`, it cause `isBase10Int` to only accept "pure" base 10 strings, like `'5'`, `'12'`, `'120'`, `'55'`, `'40000'`, etc.

## Usage

```js
var valint = require('valint');

console.log(valint.isAnyInt('a')); // false
console.log(valint.isBase10Int('a')); // false

console.log(valint.isAnyInt('12')); // true
console.log(valint.isBase10Int('12')); // true

console.log(valint.isAnyInt('5.12')); // false
console.log(valint.isBase10Int('5.12')); // false

console.log(valint.isAnyInt('0x0')); // true
console.log(valint.isBase10Int('0x0')); // false

console.log(valint.isAnyInt('5.')); // true
console.log(valint.isBase10Int('5.')); // false
console.log(valint.isBase10Int('5.', true)); true
```
