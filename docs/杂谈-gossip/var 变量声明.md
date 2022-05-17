# var

1. 声明作用域
关键的问题在于，使用 var 操作符定义的变量会成为包含它的函数的局部变量。比如，使用 var
在一个函数内部定义一个变量，就意味着该变量将在函数退出时被销毁：

2. message 的作用域在函数内部

```js
function test() { 
 var message = "hi"; // 局部变量
} 
test(); 
console.log(message); // 出错！
```


3. message 为全局变量

```js
function test() { 
 message = "hi"; // 全局变量
} 
test(); 
console.log(message); // "hi" 
```


> 注意：不推荐这样，声明全局变量

4. 如果需要定义多个变量，可以在一条语句中用逗号分隔每个变量（及可选的初始化）：
```js
var message = "hi", 
    found = false, 
    age = 29; 
```

在严格模式下，不能定义名为 eval 和 arguments 的变量，否则会导致语法错误。

5. 可以 变量提升 和 重复声明

```js
function foo() {
  console.log(age);
  var age = 26;
}
foo();

function foo() {
  var age = 16;
  var age = 26;
  var age = 36;
  console.log(age);
}
foo(); // 36
```