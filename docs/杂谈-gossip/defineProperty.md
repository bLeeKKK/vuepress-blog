# Object.defineProperty

## 基本使用

```js
let person = { name: "lee", sex: "男" };
Object.defineProperty(person, "age", {
  value: 25,
  enumerable: true, // 控制属性是否可以枚举，默认值：false
  writable: true, // 控制属性是否可以被修改，默认值：false
  configurable: true, // 控制属性是否可以被删除，默认值：false
})
```

## getter 和 setter
```js
let num = 26;
let person = { name: "lee", sex: "男" };
Object.defineProperty(person, "age", {
  // value: 25,
  // enumerable: true, // 控制属性是否可以枚举，默认值：false
  // writable: true, // 控制属性是否可以被修改，默认值：false
  // configurable: true, // 控制属性是否可以被删除，默认值：false

  // 当有人读取 age 时，调用
  get: function () {
    return num;
  },

  // 当有人写入 age 时，调用
  set: function (newValue) {
    num = newValue;
  },
})
```