---
sidebar_position: 4
tags: [easy, built-in, tuple]
---

# Length of Tuple

For given a tuple, you need create a generic `Length`, pick the length of the tuple


For example:

```ts twoslash
// @errors: 2304
type tesla = ['tesla', 'model 3', 'model X', 'model Y']
type spaceX = ['FALCON 9', 'FALCON HEAVY', 'DRAGON', 'STARSHIP', 'HUMAN SPACEFLIGHT']

type teslaLength = Length<tesla>  // expected 4
type spaceXLength = Length<spaceX> // expected 5
```

<details>
  <summary>Solution ✅</summary>

```ts twoslash {5}
type tesla = ['tesla', 'model 3', 'model X', 'model Y']
type spaceX = ['FALCON 9', 'FALCON HEAVY', 'DRAGON', 'STARSHIP', 'HUMAN SPACEFLIGHT']
type empty = []

type Length<A> = A extends any[] ? A['length'] : never

type teslaLength = Length<tesla>  // expected 4
type spaceXLength = Length<spaceX> // expected 5
type emptyLength = Length<empty> // expected 0
```
</details>