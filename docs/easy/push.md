---
sidebar_position: 9
tags: [easy, array]
---

# Push

Implement the generic version of `Array.push`

For example:


```ts twoslash
// @errors: 2304
type Result = Push<[1, 2], '3'> // [1, 2, '3']
```

<details>
  <summary>Solution ✅</summary>

```ts twoslash {1}
type Push<Arr, Value> = Arr extends readonly any[] ? [...Arr, Value] : never;

type Result = Push<[1, 2], '3'> // [1, 2, '3']
type Result2 = Push<[], 1> // [1]
type Result3 = Push<[1, 2], '3'> // [1, 2, '3']
type Result4 = Push<['1', 2, '3'], boolean> // ['1', 2, '3', boolean]
```
</details>