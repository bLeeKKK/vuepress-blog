# 字母大小写

## 让字母变换大小写

* Uppercase&lt;string&gt;
* Lowercase&lt;string&gt;
* Capitalize&lt;string&gt;
* Uncapitalize&lt;string&gt;

```ts
// ABC
type S1 = Uppercase<"abc">;
// abc
type S2 = Lowercase<"ABC">;
// Abc
type S3 = Capitalize<"abc">;
// aBC
type S4 = Uncapitalize<"ABC">;
```