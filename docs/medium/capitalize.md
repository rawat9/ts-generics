---
tags: [medium, template-literal]
---

# Capitalize

Implement `Capitalize<T>` which converts the first letter of a string to uppercase and leave the rest as-is.

For example:

```ts twoslash
// @errors: 2304
type capitalized = Capitalize<'hello world'> // expected to be 'Hello world'
```

<details>
  <summary>Solution ✅</summary>

```ts twoslash {1}
type MyCapitalize<S> = S extends `${infer First}${infer Rest}` ? `${Uppercase<First>}${Rest}` : ''

type case1 = MyCapitalize<'foobar'> // expected to be 'Foobar'
type case2 = MyCapitalize<'foo bar'> // expected to be 'Foo bar'
type case3 = MyCapitalize<'FOOBAR'> // expected to be 'FOOBAR'
type case4 = MyCapitalize<''> // expected to be ''
type case5 = MyCapitalize<'a'> // expected to be 'A'
```
</details>