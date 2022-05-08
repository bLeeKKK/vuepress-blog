# 自定义 Equal 比较

```ts
type Equals<X, Y> = (
  <T>() => T extends X ? 1 : 2) extends
  <T>() => T extends Y ? 1 : 2 ? true :false;
```

参考原理：<https://stackoverflow.com/questions/68961864/how-does-the-equals-work-in-typescript/68963796#68963796>