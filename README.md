# 🎯 Interview Questions Answer
## 🧩 Interface vs Type in TypeScript

In TypeScript, both `interface` and `type` are used to define the shape of objects, but there are key differences:

1. `type` is more flexible than `interface`.
2. `type` does not support multiple declarations, but `interface` does (declaration merging).
3. `type` does not support implementation in classes, but `interface` can be used for implementation and extension in classes.
4. `type` does not support extending union types, while `interface` supports extending other interfaces.
5. `type` can represent primitives, tuples, and unions — but `interface` is limited to object shapes only.

---

### ✅ Example:

```ts
// Interface
interface User {
  name: string;
  age: number;
}

// Type
type Admin = {
  name: string;
  role: string;
};

// Extending interface
interface SuperUser extends User {
  accessLevel: number;
}

// Intersection with type
type PowerUser = User & Admin;

```

## 🔑 `keyof` Keyword in TypeScript

The `keyof` keyword in TypeScript is used to extract the keys of an object type as a union of string literal types.  
It creates a union of all the keys in a given object type, and is especially useful when writing **generic** or **reusable** logic.

---

### ✅ Example:

```ts
interface Person {
  name: string;
  age: number;
  email: string;
}

// 'keyof Person' becomes: "name" | "age" | "email"
type PersonKeys = keyof Person;

function getValue<T, K extends keyof T>(obj: T, key: K): T[K] {
  return obj[key];
}

const user: Person = { name: "Tisha", age: 25, email: "tisha@example.com" };

const userName = getValue(user, "name");   // ✅ "Tisha"
const userEmail = getValue(user, "email"); // ✅ "tisha@example.com"
// getValue(user, "address"); ❌ Error: Argument of type '"address"' is not assignable

```