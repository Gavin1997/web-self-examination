# 变量和类型

## js 规定了几种语言类型

:::tip
众所周知，JavaScript 是一门弱类型语言，不对变量进行类型强制，变量可以随时持有任何类型的值，所以在 JavaScript 中，类型对于我们开发人员来说可以理解为值的内部特征，类型定义了值的行为，以使其能够区别于其他值。
JavaScript 中共有七种内置数据类型，包括基本类型和对象类型。
:::

---

### 基本类型

基本类型分为以下六种：

- `Undefined(未定义)`
- `Null(空值)`
- `Boolean(布尔)`
- `String(字符串)`
- `Number(数字)`
- `Symbol (符号)`<br>

  `string` 、`number` 、`boolean` 和 `symbol` 这四种类型统称为**原始类型（Primitive）**，表示不能再细分下去的基本类型；`symbol` 表示独一无二的值，通过 `Symbol` 函数调用生成，由于生成的 `symbol` 值为原始类型，所以 `Symbol` 函数不能使用 `new` 调用；`null` 和 `undefined` 通常被认为是特殊值，这两种类型的值唯一，就是其本身。

---

### 对象类型

对象类型（ `object` ）也称引用类型，以此和 JavaScript 的基本类型区分开来。对象在逻辑上是属性的无序集合，是存放各种值的容器。对象值存储的是引用地址，所以和基本类型值不可变的特性不同，对象值是可变的。

声明一个对象通常有以下几种方式：

```js
const obj = {} // 字面量形式，推荐
const obj = new Object() // new 调用
const obj = Object() // 与 new 调用相同
cosnt obj = Object.create(null) // 空对象
```

### 包装对象

我们知道对象拥有属性和方法。但比如字符串这种基本类型值不属于对象为什么还拥有属性和方法呢？实际上在引用字符串的属性或方法时，会通过调用 `new String()` 的方式转换成对象，该对象继承了字符串的方法来处理属性的引用，一旦引用结束，便会销毁这个临时对象，这就是包装对象的概念。
不仅仅只是字符串有包装对象的概念，数字和布尔值也有相对应的 `new Number()` 和 `new Boolean()` 包装对象。`null` 和 `undefined` 没有包装对象，访问它们的属性会报类型错误。
字符串、数字和布尔值通过构造函数显式生成的包装对象，既然属于对象，和基本类型的值必然是有区别的，这点可以通过 t`ypeof` 检测出来。

```js
typeof "seymoe"; // 'string'
typeof new String("seymoe"); // 'object'
```

---

## js 对象的底层数据结构是什么

### 概述 2

需要阅读一些书籍解决，待解决

---

## Symbol 类型在实际开发中的应用

### 概述

:::tip
Symbol 类型在实际开发中的应用、可手动实现一个简单的 Symbol
:::

### 引入 Symbol 原因

ES5 的对象属性名都是字符串，这容易造成属性名的冲突。比如，你使用了一个他人提供的对象，但又想为这个对象添加新的方法（`mixin` 模式），新方法的名字就有可能与现有方法产生冲突。如果有一种机制，保证每个属性的名字都是独一无二的就好了，这样就从根本上防止属性名的冲突。这就是 ES6 引入 `Symbol` 的原因,它是原始数据类型的一种，表示独一无二的值。

### 如何使用 Symbol

- `Symbol` 值通过 `Symbol` 函数生成。这就是说，对象的属性名现在可以有**两种类型**，一种是原来就有的字符串，另一种就是新增的 `Symbol` 类型。

```js
let s = "Hello world!";

let sl = Symbol();

typeof s; // string

typeof sl; // symbol
```

上面代码表明， 变量 sl 是独一无二的值，`typeof` 运算符的结果，表明变量 `sl` 是 `Symbol` 数据类型，而不是字符串之类的其他类型。

- `Symbol` 函数可以接受一个字符串作为参数，表示对 `Symbol` 实例的描述，主要是为了在控制台显示，或者转为字符串时，比较容易区分。

---

```js
let s1 = Symbol("foo");
let s2 = Symbol("bar");

s1; // Symbol(foo)
s2; // Symbol(bar)

s1.toString(); // "Symbol(foo)"
s2.toString(); // "Symbol(bar)"
```

---

- `Symbol` 函数前不能使用 `new` 命令，否则会报错。这是因为生成的 `Symbol` 是一个原始类型的值，不是对象

```js
var s = Symbol("foo");
console.log(s instanceof Symbol); // false
```

---

- 如果 `Symbol` 的参数是一个对象，就会调用该对象的`toString`方法，将其转为字符串，然后才生成一个 `Symbol` 值。

```js
const obj = {
  toString() {
    return "abc";
  }
};
const sym = Symbol(obj);
sym; // Symbol(abc)
```

---

- 注意，`Symbol`函数的参数只是表示对当前 `Symbol` 值的描述，因此相同参数的`Symbol`函数的返回值是不相等的。

```js
/ 没有参数的情况
let s1 = Symbol();
let s2 = Symbol();

s1 === s2 // false

// 有参数的情况
let s1 = Symbol('foo');
let s2 = Symbol('foo');

s1 === s2 // false
```

---

- `Symbol` 值不能与其他类型的值进行运算，会报错。

```js
let sym = Symbol("My symbol");

"your symbol is " +
  sym`your symbol is ${
    sym // TypeError: can't convert symbol to string
  }`;
// TypeError: can't convert symbol to string
```

---

- `Symbol` 值可以显式转为字符串,也可以转为布尔值，但是**不能转为数值**。

```js
let sym = Symbol();
Boolean(sym); // true
!sym; // false

if (sym) {
  // ...
}

Number(sym); // TypeError
sym + 2; // TypeError
```

---

### 作为属性名的 Symbol

由于每一个 `Symbol` 值都是不相等的，这意味着 `Symbol` 值可以作为标识符，用于对象的属性名，就能保证不会出现同名的属性。这对于一个对象由多个模块构成的情况非常有用，能防止某一个键被不小心改写或覆盖。

- 将对象的属性名指定为一个 Symbol 值。

```js
let mySymbol = Symbol();

// 第一种写法
let a = {};
a[mySymbol] = "Hello!";

// 第二种写法
let a = {
  [mySymbol]: "Hello!"
};

// 第三种写法
let a = {};
Object.defineProperty(a, mySymbol, { value: "Hello!" });

// 以上写法都得到同样结果
a[mySymbol]; // "Hello!"
```

---

- 注意，`Symbol` 值作为对象属性名时，不能用点运算符。

```js
const mySymbol = Symbol();
const a = {};

a.mySymbol = "Hello!";
a[mySymbol]; // undefined
a["mySymbol"]; // "Hello!"
```

---

- `Symbol` 类型还可以用于定义一组常量，保证这组常量的值都是不相等的。

```js
log.levels = {
  DEBUG: Symbol("debug"),
  INFO: Symbol("info"),
  WARN: Symbol("warn")
};
log(log.levels.DEBUG, "debug message");
log(log.levels.INFO, "info message");
```

### Symbol 实例，也就是作用 消除魔术字符串

魔术字符串指的是，在代码之中多次出现、与代码形成强耦合的某一个具体的字符串或者数值。风格良好的代码，应该尽量消除魔术字符串，改由含义清晰的变量代替。

```js
function getArea(shape, options) {
  let area = 0;

  switch (shape) {
    case "Triangle": // 魔术字符串
      area = 0.5 * options.width * options.height;
      break;
    /* ... more code ... */
  }

  return area;
}

getArea("Triangle", { width: 100, height: 100 }); // 魔术字符串
```

上面代码中，字符串 Triangle 就是一个魔术字符串。它多次出现，与代码形成“强耦合”，不利于将来的修改和维护。

常用的消除魔术字符串的方法，就是把它写成一个变量。

---

```js
const shapeType = {
  triangle: Symbol();
};

function getArea(shape, options) {
  let area = 0;
  switch (shape) {
    case shapeType.triangle:
      area = 0.5 * options.width * options.height;
      break;
  }
  return area;
}

getArea(shapeType.triangle, { width: 100, height: 100 });
```

```js
const COLOR_RED = Symbol();
const COLOR_GREEN = Symbol();
function getComplement(color) {
  switch (color) {
    case COLOR_RED:
      return COLOR_GREEN;
    case COLOR_GREEN:
      return COLOR_RED;
    default:
      throw new Error("Undefined color");
  }
}
```

常量使用 `Symbol` 值最大的好处，就是其他任何值都不可能有相同的值了，因此可以保证上面的 switch 语句会按设计的方式工作。

---

### Symbol 作为属性名有哪些特性

- `Symbol` 作为属性名，该属性不会出现在`for...in`、`for...of`循环中，也不会被`Object.keys()`、`Object.getOwnPropertyNames()`、`JSON.stringify()`返回。但是，它也不是私有属性，有一个`Object.getOwnPropertySymbols`方法，可以获取指定对象的所有 `Symbol` 属性名

`

- `Object.getOwnPropertySymbols`方法返回一个数组，成员是当前对象的所有用作属性名的 Symbol 值。

```js
const obj = {};
let a = Symbol("a");
let b = Symbol("b");

obj[a] = "Hello";
obj[b] = "World";

const objectSymbols = Object.getOwnPropertySymbols(obj);

objectSymbols;
// [Symbol(a), Symbol(b)]
```

---

- 下面是另一个例子，`Object.getOwnPropertySymbols`方法与`for...in`循环、`Object.getOwnPropertyNames`方法进行对比的例子。

```js
const obj = {};

let foo = Symbol("foo");

Object.defineProperty(obj, foo, {
  value: "foobar" // 定义一个对象，属性值为foobar
});

for (let i in obj) {
  console.log(i); // 无输出
}

Object.getOwnPropertyNames(obj);
// []

Object.getOwnPropertySymbols(obj);
// [Symbol(foo)]
```

---

- Reflect.ownKeys 方法可以返回所有类型的键名，包括常规键名和 Symbol 键名。

```js
let obj = {
  [Symbol("my_key")]: 1,
  enum: 2,
  nonEnum: 3
};

Reflect.ownKeys(obj);
//  ["enum", "nonEnum", Symbol(my_key)]
```

---

### 汇总一些 Symbol 方法和属性

```js
Symbol.for(); // 我们希望重新使用同一个 Symbol 值，Symbol.for方法可以做到这一点

Symbol.keyFor(); // Symbol.keyFor方法返回一个已登记的 Symbol 类型值的key。

Symbol.hasInstance;

Symbol.isConcatSpreadable;

Symbol.species;

Symbol.match;

Symbol.replace;

Symbol.search;

Symbol.split;

Symbol.iterator;

Symbol.toPrimitive;

Symbol.toStringTag;

Symbol.unscopables;
```

---

### 手动实现简单的 Symbol

:::tip
当调用 Symbol 的时候，会采用以下步骤：

1. 如果使用 new ，就报错
2. 如果 description 是 undefined，让 descString 为 undefined
3. 否则 让 descString 为 ToString(description)
4. 如果报错，就返回
   返回一个新的唯一的 Symbol 值，它的内部属性 [[Description]] 值为 descString
   考虑到还需要定义一个 [[Description]] 属性，如果直接返回一个基本类型的值，是无法做到这一点的，所以最终还是返回一个对象。
   :::

```js
(function() {
  var root = this;

  var SymbolPolyfill = function Symbol(description) {
    // 实现特性：Symbol 函数前不能使用 new 命令
    if (this instanceof SymbolPolyfill)
      throw new TypeError("Symbol is not a constructor");

    // 实现特性：如果 Symbol 的参数是一个对象，就会调用该对象的 toString 方法，将其转为字符串，然后才生成一个 Symbol 值。
    var descString =
      description === undefined ? undefined : String(description);
    // 没有继承任何原型方法，也就是说它的原型链没有上一层
    var symbol = Object.create(null);

    Object.defineProperties(symbol, {
      __Description__: {
        value: descString,
        writable: false,
        enumerable: false,
        configurable: false
      }
    });

    // 实现特性，因为调用该方法，返回的是一个新对象，两个对象之间，只要引用不同，就不会相同
    return symbol;
  };

  root.SymbolPolyfill = SymbolPolyfill;
})();
```

### 参考

[阮一峰-ECMAScript 6 入门](https://shengchangwei.github.io/es6/#docs/symbol)

[ES6 系列之模拟实现 Symbol 类型](https://segmentfault.com/a/1190000015262174#articleHeader8)

## 变量在内存中的存储形式

:::tip 的数据类型包括两种：

- 基本数据类型：String、Boolean、Number、undefined、null、Symbol

- 引用数据类型（复杂数据类型）：Object

在内存中分为栈区（stack）和堆区（heap）,基本数据类型存放在栈区，引用数据类型存放在堆区
:::

### 基本数据类型：

1. 声明一个变量 a 的时候，会在栈里面开辟出一块新的内存空间，用来存放这个变量 a 的值
2. 当变量 a 储存的数值发生改变时，栈区里对应的那块内存里存的数据也会发生改变
3. 再声明一个变量 b,并把变量 a 赋值给变量 b，此时会在栈内开辟一个新空间用来储存变量 b。
4. 这时变量 a 和变量 b 对应栈内存中两个空间，修改其中一个不会影响到另一个。

![avatar](/varandTypes/stack.png)

### 复杂数据类型

1. 声明一个对象`var obj1 = {name: 'sheng'}`, 此时会在堆中开辟一块空间存放`obj1值{name: 'sheng'}`
2. 在栈中开辟一个空间存放指向 obj1 值的指针,obj1 通过这个指针可以拿到堆中的值
3. 如果将 obj1 这个对象赋值给 obj2 时，此时其实赋值给 obj2 是栈中的指针，
4. 那么 obj1 和 obj2 通过相同的指针指向是同一个值，修改其中一个对象的值，会影响到另一个对象。
5. 如果对 obj1 重新赋值的话，那么这个对象会堆中的另一块区域，不会在与 obj2 共享同一块区域。

![avatar](/varandTypes/heap.png)

```js
/**************按值传递***********/
//两个变量赋值时,总是将原变量中的值复制一个副本给对方
var a = 3; //原始类型
var b = a; //复制a中的值给b
// 5  5
a--;
console.log(b); //5

/**************引用类型***********/
var arr = [1, 2, 3, 4, 5]; //引用类型,不能存在变量本地,只能存在地址
var brr = arr; //复制a中的地址给b
// 地址  地址
arr.length--; //时这两个变量用同一地址指向同一个数值
console.log(brr.lenght); ///4
```

---

## null 和 undefined 的区别

---

## 三种判断 JavaScript 数据类型的方式

---

## 出现小数精度丢失的原因

---

## 可能发生隐式类型转换的场景以及转换原则

---

## 基本类型对应的内置对象

---

## 理解值类型和引用类型
