---
sidebar_position: 1
tags: [easy, built-in]
---

# Pick

Implement the built-in `Pick<T, K>` generic without using it.
Constructs a type by picking the set of properties `K` from `T`
For example:

```ts twoslash
// @errors: 2552
interface Todo {
  title: string
  description: string
  completed: boolean
}

type TodoPreview = MyPick<Todo, 'title' | 'completed'>

const todo: TodoPreview = {
  title: 'Clean room',
  completed: false,
}
```

<details>
  <summary>Solution ✅</summary>

```ts twoslash {7}
interface Todo {
  title: string
  description: string
  completed: boolean
}

type MyPick<T, K extends keyof T> = { [P in K] : T[P] }

type TodoPreview = MyPick<Todo, 'title' | 'completed'>

const todo: TodoPreview = {
  title: 'Clean room',
  completed: false,
}
```
</details>