---
sidebar_position: 10
tags: [easy, array]
---

# Unshift

Implement the generic version of `Array.unshift`

For example:


```ts twoslash
// @errors: 2304
type Result = Unshift<[1, 2], '3'> // [1, 2, '3']
```

<details>
  <summary>Solution ✅</summary>

```ts twoslash {1}
type Unshift<Arr, Value> = Arr extends readonly any[] ? [Value, ...Arr] : never

type Result = Unshift<[1, 2], 0> // [0, 1, 2,]
type Result2 = Unshift<[], 1> // [1]
type Result3 = Unshift<[1, 2], '3'> // ['3', 1, 2]
type Result4 = Unshift<['1', 2, '3'], boolean> // [boolean, '1', 2, '3']
```
</details>