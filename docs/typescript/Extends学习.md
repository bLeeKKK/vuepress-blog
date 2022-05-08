# Extends 条件判断
注：extends 运用在 type 和 class 中时完全是两种作用的效果。

条件类型是一种条件表达式进行类型的关系检测
## 值匹配
```ts
type Equal<X, Y> = X extends Y ? true : false;

type Num = Equal<1, 1>; // true
type Str = Equal<'a', 'a'>; // true
type Boo = Equal<true, false>; // false
```
## 类型匹配<br/>
而条件类型的判断逻辑，和上面的的 ”可被分配“ 相同逻辑：
```ts
const num: number = 1; // 可被分配
const str: string = 2; // 不可被分配
```

```ts
type IsNum<T> = T extends number ? number : string

type Num = IsNum<1>   // number;
type Str = IsNum<'1'> // string;
```
## 嵌套类型匹配<br/>
就像 if 语句一个道理，可以无限嵌套。下面写一个：根据值类型，获取值类型名称的函数类型（这也是官方给的例子）：
```ts
type TypeName<T> =
  T extends string    ? "string" :
  T extends number    ? "number" :
  T extends boolean   ? "boolean" :
  T extends undefined ? "undefined" :
  T extends Function  ? "function" :
  "object";

  type T0 = TypeName<string>;  // "string"
  type T1 = TypeName<"a">;     // "string"
  type T2 = TypeName<true>;    // "boolean"
  type T3 = TypeName<() => void>;  // "function"
  type T4 = TypeName<string[]>;    // "object"

```

