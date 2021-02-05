[Typescript release-notes](https://www.typescriptlang.org/docs/handbook/release-notes/typescript-3-7.html)

**PS 看官方举例、恍然大悟**：
# 你不知道的Tyescript 操作符
## 可选链和可选属性访问操作符 `?.`
### 可选属性访问
可选链的`核心 `是让我们在写 Typescript 代码时，当我们的代码运行进入 null 或者 undefined时，可以立即停止运行某些表达式。可选链最重要的是可选访问操作符`?.`。代码如下：
```js
let x = foo?.bar.baz();
```
这就是说，当foo被定义时，foo.bar.baz()将被计算;但当foo为null或undefined时，停止我们正在做的，返回undefined "

更简单地说，该代码片段与下面的代码相同:
```js
let x = foo === null || foo === undefined ? undefined : foo.bar.baz();

```
**注意**，如果bar为null或undefined，我们的代码在访问baz时仍然会触发错误。同样，如果baz为null或undefined，我们将在调用`?.`地方触发错误。可选访问操作符 `?.`只检查它左边的值是null还是unfined——而不检查任何后续属性。
```js
// Before
if (foo && foo.bar && foo.bar.baz) {
  // ...
}

// After-ish
if (foo?.bar?.baz) {
  // ...
}

```
记住`?.`与那些`&&`操作符不同，因为`&&`将特别作用于“假”值(例如空字符串、0、NaN，以及false)，但这是该构造有意为之的特性。它不会短路有效的数据，如0或空字符串。
### 可选元素访问
`可选链`还包括两个其他操作。首先是可选元素访问，它类似于可选属性访问，但允许我们访问非标识符属性(例如任意字符串、数字和符号):
```js
/**
 * Get the first element of the array if we have an array.
 * Otherwise return undefined.
 */
function tryGetFirstElement<T>(arr?: T[]) {
  return arr?.[0];
  // equivalent to
  //   return (arr === null || arr === undefined) ?
  //       undefined :
  //       arr[0];
}

```
### 可选调用
还有一个可选调用，它允许我们在表达式不为null或undefined的情况下有条件地调用表达式。
```js
async function makeRequest(url: string, log?: (msg: string) => void) {
  log?.(`Request started at ${new Date().toISOString()}`);
  // roughly equivalent to
  //   if (log != null && log!=undefined) {
  //       log(`Request started at ${new Date().toISOString()}`);
  //   }

  const result = (await fetch(url)).json();

  log?.(`Request finished at at ${new Date().toISOString()}`);

  return result;
}
```
### 可选链`短路`行为
可选链具有的“短路”行为是有限的**属性访问**、**元素访问**、**可选调用**、——它不会从这些表达式进一步展开。换句话说：
```js
let result = foo?.bar / someComputation();
```
不会阻止**除法**或**someComputation()** 调用的发生。它等于
```js
let temp = foo === null || foo === undefined ? undefined : foo.bar;

let result = temp / someComputation();
```
这可能会导致除数undefined，这就是为什么在**strictNullChecks**中，以下是一个错误。
```js
function barPercentage(foo?: { bar: number }) {
  return foo?.bar / 100;
  //     ~~~~~~~~
  // Error: Object is possibly undefined.
}
```
## 空合并(Nullish Coalescing )操作符
nullish合并操作符是另一个即将推出的ECMAScript特性，它与可选链密切相关；

你可以想到这个功能——`??操作符`——在处理null或undefined时，作为一种**回退**到**默认值**的方法。当我们写代码的时候
```js
let x = foo ?? bar();
```
这是一种新的方式，说明foo值在“**存在**”时将被使用;但当它为**null**或**undefined**时，计算bar()代替它。
同样，上面的代码等价于下面的代码。
```js
let x = foo !== null && foo !== undefined ? foo : bar();
```
### `??`操作符使用场景
 **??操作符** 当尝试使用默认值时，操作符可以替换||的用法。例如，下面的代码片段试图获取上次保存在localStorage中的volume(如果它曾经保存过);然而，它有一个错误，因为它使用||。
```js

function initializeAudio() {
  let volume = localStorage.volume || 0.5;

  // ...
}

```
当localStorage。如果volume设置为0，页面会将volume设置为0.5，这不是我们想要的。
## 总结
`??操作符`避免`0`、`NaN`和`""`被当作`假值`处理的一些意外行为。

