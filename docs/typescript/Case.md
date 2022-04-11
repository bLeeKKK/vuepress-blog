# TS 字母大小写

## Uppercase、Lowercase、Capitalize、Uncapitalize

让字母变换大小写

Uppercase<string>
Lowercase<string>
Capitalize<string>
Uncapitalize<string>

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