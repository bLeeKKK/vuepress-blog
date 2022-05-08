# Exclude 和 Extract

## Exclude<UnionType, ExcludedMembers>

* Exclude：从联合属性中【去掉】，第二个参数中的存在值
* Extract：从联合属性中【留下】，第二个参数中的存在值

```ts
type T0 = Exclude<"a" | "b" | "c", "a">;
// "b" | "c"

type T1 = Exclude<"a" | "b" | "c", "a" | "b">;
// "c"

type T2 = Exclude<string | number | (() => void), Function>;
type T2 = string | number
```

## Extract<Type, Union>

```ts
type T0 = Extract<"a" | "b" | "c", "a" | "f">;
// "a"

type T1 = Extract<string | number | (() => void), Function>;
type T1 = () => void
```