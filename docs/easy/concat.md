---
sidebar_position: 7
tags: [easy, array]
---

# Concat

Implement the JavaScript `Array.concat` function in the type system. A type takes the two arguments. The output should be a new array that includes inputs in ltr order

For example:

```ts twoslash
// @errors: 2304
type Result = Concat<[1], [2]> // expected to be [1, 2]
```

<details>
  <summary>Solution ✅</summary>

```ts twoslash {1}
type Concat<A extends any[], B extends any[]> = [...A, ...B]

type Result = Concat<[1], [2]> // expected to be [1, 2]
```
</details>