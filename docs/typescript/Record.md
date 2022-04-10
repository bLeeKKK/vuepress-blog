# Record 的使用

组装成新的 接口，第一个参数的联合类型作为 key 值
第二个 参数作为 value 值

Record<Keys, Type>

```ts
interface CatInfo {
  age: number;
  breed: string;
}
 
type CatName = "miffy" | "boris" | "mordred";
 
const cats: Record<CatName, CatInfo> = {
  miffy: { age: 10, breed: "Persian" },
  boris: { age: 5, breed: "Maine Coon" },
  mordred: { age: 16, breed: "British Shorthair" },
};
 
```