---
sidebar_position: 8
tags: [easy, promise, built-in]
---

# Awaited

If we have a type which is wrapped type like Promise. How we can get a type which is inside the wrapped type?

For example: if we have `Promise<ExampleType>` how to get ExampleType?

```ts twoslash
// @errors: 2552
type ExampleType = Promise<string>

type Result = MyAwaited<ExampleType> // string
```

<details>
  <summary>Solution ✅</summary>

```ts twoslash {4}
type ExampleType = Promise<string>
type AnotherType = Promise<Promise<string>>

type MyAwaited<T> = T extends Promise<infer Inner> ? MyAwaited<Inner> : never

type Result = Awaited<ExampleType> // string
type NewResult = Awaited<AnotherType> // string
```
</details>