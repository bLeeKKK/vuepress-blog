# Pick 和 Omit

## Pick<Type, Keys>
Pick：选择出第二个联合类型中的属性【留下】
```ts
interface Todo {
  title: string;
  description: string;
  completed: boolean;
}
 
type TodoPreview = Pick<Todo, "title" | "completed">;
const todo: TodoPreview = {
  title: "Clean room",
  completed: false,
};
```

## Omit<Type, Keys>
Omit：选择出第二个联合类型中的属性【去掉】
```ts
interface Todo {
  title: string;
  description: string;
  completed: boolean;
  createdAt: number;
}

type TodoPreview = Omit<Todo, "description">;
const todo: TodoPreview = {
  title: "Clean room",
  completed: false,
  createdAt: 1615544252770,
}

type TodoInfo = Omit<Todo, "completed" | "createdAt">
const todoInfo: TodoInfo = {
  title: "Pick up kids",
  description: "Kindergarten closes at 5pm",
}
```

