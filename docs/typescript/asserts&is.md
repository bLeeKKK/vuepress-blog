# 类型谓词 asserts 和 is


is（谓词签名）
```ts
type Fish = {
  name: string;
  swim: () => void;
}

type Bird = {
  name: string;
  fly: () => void;
}

function isFish(pet: Fish | Bird): pet is Fish { // 类型谓词的使用，要求函数必须返回一个布尔值
  return (pet as Fish).swim !== undefined
}

function getSmallPet(): Fish | Bird {
  let fish: Fish = {
    name: "shrakey",
    swim: () => { },
  }
  let bird: Bird = {
    name: "shrakey",
    fly: () => { },
  }
  return true ? fish : bird
}
// 这里推断，就算三目运算符左边虽然是 true，但还是推断为 【Fish | Bird】类型
let p: Fish | Bird = getSmallPet()

if (isFish(p)) { // 不管函数返回什么，经过 if 判断后这个函数后 p 的数据类型都变成了 【Fish】
  p.swim()
} else {
  p.fly()
}
```


## asserts（断言函数）

“在该语法中，`asserts x is T`和 `asserts x` 表示类型判定，它只能作为函数的返回值类型。asserts和is是关键字；x必须为函数参数列表中的一个形式参数名；T表示任意的类型；“is T”部分是可选的。若一个函数带有asserts类型判定，那么该函数就是一个断言函数。接下来将分别介绍这两种断言函数。”


下面案例中 assert 函数执行通过，就表示 `if(typeof str === "string") { return str.toUpperCase() }` 通过
```ts
function yell(str: any) {
  assert(typeof str === "string"); // 通过这个函数执行后，表示条件成立
  return str.toUpperCase();
}

function assert(condition: any): asserts condition {
  if (!condition) {
    throw new Error('错误');
  }
}
```

```ts
function yell(str: any) {
  assert(str); // 通过这个函数执行后，表示条件成立
  return str.toFixed();
}

function assert(condition: any): asserts condition is number {
  if (typeof condition !== "number") {
    throw new Error('错误');
  }
}
```
