---
tags: [medium, array]
---

# Last of Array

Implement a generic `Last<T>` that takes an Array `T` and returns its last element.

For example:

```ts twoslash
// @errors: 2304
type arr1 = ['a', 'b', 'c']
type arr2 = [3, 2, 1]

type tail1 = Last<arr1> // expected to be 'c'
type tail2 = Last<arr2> // expected to be 1
```

<details>
  <summary>Solution ✅</summary>

```ts twoslash {4}
type arr1 = ['a', 'b', 'c']
type arr2 = [3, 2, 1]

type Last<T> = T extends [...any, infer K] ? K : never

type tail1 = Last<arr1> // expected to be 'c'
type tail2 = Last<arr2> // expected to be 1
type tail3 = Last<[0]> // expected to be 0
type tail4 = Last<[]> // expected to be never
```
</details>