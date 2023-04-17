---
sidebar_position: 2
tags: [easy, built-in]
---

# Readonly

Implement the built-in `Readonly<T>` generic without using it.

Constructs a type with all properties of `T` set to readonly, meaning the properties of the constructed type cannot be reassigned.

For example:

```ts twoslash
// @errors: 2552
interface Todo {
  title: string
  description: string
}

const todo: MyReadonly<Todo> = {
  title: "Hey",
  description: "foobar"
}

todo.title = "Hello" // Error: cannot reassign a readonly property
todo.description = "barFoo" // Error: cannot reassign a readonly property
```

<details>
  <summary>Solution ✅</summary>

```ts twoslash {6}
// @errors: 2540
interface Todo {
  title: string
  description: string
}

type MyReadonly<T> = {readonly [P in keyof T]: T[P]}

const todo: MyReadonly<Todo> = {
  title: "Hey",
  description: "foobar"
}

todo.title = "Hello"
todo.description = "barFoo"
```
</details>