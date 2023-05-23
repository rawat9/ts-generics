---
sidebar_position: 6
tags: [easy, built-in, object-keys]
---

# If

Implement the util type `If<C, T, F>` which accepts condition `C`, a truthy value `T`, and a falsy value `F`. `C` is expected to be either `true` or `false` while `T` and `F` can be any type.

For example:

```ts twoslash
// @errors: 2304
type A = If<true, 'a', 'b'>  // expected to be 'a'
type B = If<false, 'a', 'b'> // expected to be 'b'
```

<details>
  <summary>Solution ✅</summary>

```ts twoslash {1}
type If<C, T, F> = C extends true ? T : C extends false ? F : never

type A = If<true, 'a', 'b'>  // expected to be 'a'
type B = If<false, 'a', 'b'> // expected to be 'b'
type C = If<{}, 'a', 'b'> // expected to be never
```
</details>