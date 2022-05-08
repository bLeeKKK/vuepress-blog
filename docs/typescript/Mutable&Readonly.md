# Mutable 和 Readonly 的使用

## Mutable&lt;T&gt;

将所有属性变成【可修改】
注：只处理第一层

实现：
```ts
type Mutable<T> = { -readonly [P in keyof T]: T[P];};
```

## Readonly&lt;T&gt;

将所有属性变成【不可修改】
注：只处理第一层

```ts
type Readonly<T> = { 
    readonly [P in keyof T]: T[P] 
};
```

