---
sidebar_position: 5
tags: [easy, built-in, object-keys]
---

# Tuple to Object

Given an array, transform it into an object type and the key/value must be in the provided array.

For example:

```ts twoslash
// @errors: 2304
const tuple = ['tesla', 'model 3', 'model X', 'model Y'] as const

type Result = TupleToObject<typeof tuple> // expected { 'tesla': 'tesla', 'model 3': 'model 3', 'model X': 'model X', 'model Y': 'model Y'}
```

<details>
  <summary>Solution ✅</summary>

```ts twoslash {3}
const tuple = ['tesla', 'model 3', 'model X', 'model Y'] as const

type TupleToObject<T extends readonly any[]> = {[P in T[number]]: P}

type Result = TupleToObject<typeof tuple> // expected { 'tesla': 'tesla', 'model 3': 'model 3', 'model X': 'model X', 'model Y': 'model Y'}
```
</details>