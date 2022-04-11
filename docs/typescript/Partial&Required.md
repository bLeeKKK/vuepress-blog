# Partial 和 Required 的使用

Partial<T>

将所有属性变成【可选】
注：只处理第一层

```ts
interface UserInfo { id: string; name: string; }

let UserInfo: Partial<UserInfo> = { name: 'xiaoming' }
```


Required<T>

将所有属性变成【必选】
注：只处理第一层

```ts
interface UserInfo { id?: string; name?: string; }
let UserInfo: Required<UserInfo> = { name: 'xiaoming' } // 类型 "{ name: string; }" 中缺少属性 "id"，但类型 "Required<UserInfo>" 中需要该属性
```

ts 实现：type Required<T> = { [P in keyof T]-?: T[P] }。
"-?"表示去掉 "?"
