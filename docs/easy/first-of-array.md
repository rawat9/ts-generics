---
sidebar_position: 3
tags: [easy, built-in, array]
---

# First of Array

Implement a generic `First<T>` that takes an Array `T` and returns its first element's type.

For example:

```ts twoslash
// @errors: 2304
type arr1 = ['a', 'b', 'c']
type arr2 = [3, 2, 1]

type head1 = First<arr1> // expected to be 'a'
type head2 = First<arr2> // expected to be 3
```

<details>
  <summary>Solution ✅</summary>

```ts twoslash {5}
type arr1 = ['a', 'b', 'c']
type arr2 = [3, 2, 1]
type arr3 = []

type First<A> = A extends [infer First, ...any[]] ? First : never

type head1 = First<arr1> // expected to be 'a'
type head2 = First<arr2> // expected to be 3
type head3 = First<arr3> // expected to be never
```
</details>