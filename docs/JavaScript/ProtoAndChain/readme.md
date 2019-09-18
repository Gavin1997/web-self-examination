# 原型和原型链

## 理解原型设计模式以及 JavaScript 中的原型规则

### 原型设计模式

原型模式 （Prototype pattern）：通俗点讲就是创建一个共享的原型，并通过拷贝这些原型创建新的对象。用于创建重复的对象，这种类型的设计模式属于创建型模式，它提供了一种创建对象的不错选择

### 原型规则

1. 所有的引用类型（数组、对象、函数），都具有对象特性，即可自由扩展属性；
2. 所有的引用类型（数组、对象、函数），都有一个`_proto_`=属性（隐式原型），属性值是一个普通的对象；
3. 所有的函数，都具有一个 prototype（显式原型），属性值也是一个普通对象；
4. 所有的引用类型（数组、对象、函数），其隐式原型指向其构造函数的显式原型；`（obj._proto_ === Object.prototype）`；
5. 当试图得到一个对象的某个属性时，如果这个对象本身没有这个属性，那么会去它的`_proto_`（即它的构造函数的 prototype）中去寻找；

## instanceof 的底层实现原理，手动实现一个 instanceof

```js
function instance_of(L, R) {
  //L 表示左表达式，R 表示右表达式
  var O = R.prototype;
  L = L.__proto__;
  while (true) {
    if (L === null) return false;
    if (O === L)
      // 这里重点：当 O 严格等于 L 时，返回 true
      return true;
    L = L.__proto__;
  }
}
```

---

## 实现继承的几种方式以及他们的优缺点

1. 原型继承
   缺点: 子类实例共享属性，造成实例间的属性会相互影响

```js
function Parent1() {
  this.name = ["super1"];
  this.reName = function() {
    this.name.push("super111");
  };
}
function Child1() {}
Child1.prototype = new Parent1();
var child11 = new Child1();
var child12 = new Child1();
var parent1 = new Parent1();
child11.reName();
console.log(child11.name, child12.name); // [ 'super1', 'super111' ] [ 'super1', 'super111' ], 可以看到子类的实例属性皆来自于父类的一个实例，即子类共享了同一个实例
console.log(child11.reName === child12.reName); // true, 共享了父类的方法
```

2. 构造函数继承
   缺点: 父类的方法没有被共享，造成内存浪费

```js
function Child2() {
  Parent1.call(this);
}

var child21 = new Child2();
var child22 = new Child2();
child21.reName();
console.log(child21.name, child22.name); // [ 'super1', 'super111' ] [ 'super1' ], 子实例的属性都是相互独立的
console.log(child21.reName === child22.reName); // false, 实例方法也是独立的，没有共享同一个方法
```

3. 组合继承
   缺点: 父类构造函数被调用两次,子类实例的属性存在两份。造成内存浪费

```js
function Parent3() {
  this.name = ["super3"];
}
Parent3.prototype.reName = function() {
  this.name.push("super31");
};
function Child3() {
  Parent3.call(this); // 生成子类的实例属性(但是不包括父对象的方法)
}
Child3.prototype = new Parent3(); // 继承父类的属性和方法(副作用: 父类的构造函数被调用的多次，且属性也存在两份造成了内存浪费)
var child31 = new Child3();
var child32 = new Child3();
child31.reName();
console.log(child31.name, child32.name); // [ 'super3', 'super31' ] [ 'super3' ], 子类实例不会相互影响
console.log(child31.reName === child32.reName); //true, 共享了父类的方法
```

4. 寄生继承
   完美：子类都有各自的实例不会相互影响，且共享了父类的方法

```js
function Parent4() {
  this.name = ["super4"];
}
Parent4.prototype.reName = function() {
  this.name.push("super41");
};
function Child4() {
  Parent4.call(this); // 生成子类的实例属性(但是不包括父对象的方法)
}
Child4.prototype = Object.create(Parent4.prototype); // 该方法会使用指定的原型对象及其属性去创建一个新的对象
var child41 = new Child4();
var child42 = new Child4();
child41.reName();
console.log(child41.name, child42.name); //[ 'super4','super41' ] [ 'super4' ], 子类实例不会相互影响
console.log(child41.reName === child42.reName); //true, 共享了父类的方法
```

5. ES6 CLASS
   和寄生继承实现的效果一致 写法更易理解

```js
class Parent5 {
  constructor() {
    this.name = ["super5"];
  }
  reName() {
    this.name.push("new 5");
  }
}

class Child5 extends Parent5 {
  constructor() {
    super();
  }
}

var child51 = new Child5();
var child52 = new Child5();
child51.reName();
console.log(child51.name, child52.name); // [ 'super5', 'new 5' ], 子类实例不会相互影响
console.log(child51.reName === child52.reName); //true, 共享了父类的方法
```

---

## apply/call/bind 自我实现

1. call/apply/bind 的区别

三者都可用于显示绑定 this;
call/apply 的区别方式在于参数传递方式的不同；
fn.call(obj, arg1, arg2, ...)， 传参数列表，以逗号隔开；
fn.call(obj, [arg1, arg2, ...])， 传参数数组；
bind 返回的是一个待执行函数，是函数柯里化的应用，而 call/apply 则是立即执行函数

2. call 的实现

```js
// ES6 版本
Function.prototype.myCall = function(context, ...params) {
  // ES6 函数 Rest 参数，使其可指定一个对象，接收函数的剩余参数，合成数组
  if (typeof context === "object") {
    context = context || window;
  } else {
    context = Object.create(null);
  }

  // 用 Symbol 来作属性 key 值，保持唯一性，避免冲突
  let fn = Symbol();
  context[fn] = this;
  // 将参数数组展开，作为多个参数传入
  const result = context[fn](...params);
  // 删除避免永久存在
  delete context[fn];
  // 函数可以有返回值
  return result;
};

// 测试
var mine = {
  name: "以乐之名"
};

var person = {
  name: "无名氏",
  sayHi: function(msg) {
    console.log("我的名字：" + this.name + "，", msg);
  }
};

person.sayHi.myCall(mine, "很高兴认识你！");
// 我的名字：以乐之名，很高兴认识你！
```

3. apply 实现

```js
Function.prototype.myApply = function(context, params) {
    // apply 与 call 的区别，第二个参数是数组，且不会有第三个参数
    if (typeof context === 'object') {
        context = context || window;
    } else {
        context = Object.create(null);
    }

    let fn = Symbol();
    context[fn] = this;
    const result context[fn](...params);
    delete context[fn];
    return result;
}
```

4. bind 的源码实现
   bind 与 call/apply 的区别就是返回的是一个待执行的函数，而不是函数的执行结果;
   bind 返回的函数作为构造函数与 new 一起使用，绑定的 this 需要被忽略;
   调用绑定函数时作为 this 参数传递给目标函数的值。如果使用 new 运算符构造绑定函数，则忽略该值。—— MDN

```js
Function.prototype.bind = function(context, ...initArgs) {
  // bind 调用的方法一定要是一个函数
  if (typeof this !== "function") {
    throw new TypeError("not a function");
  }
  let self = this;
  let F = function() {};
  F.prototype = this.prototype;
  let bound = function(...finnalyArgs) {
    // 将前后参数合并传入
    return self.call(
      this instanceof F ? this : context || this,
      ...initArgs,
      ...finnalyArgs
    );
  };
  bound.prototype = new F();
  return bound;
};
```

## 至少说出一种开源项目(如 Node)中应用原型继承的案例

---

## 可以描述 new 一个对象的详细过程，手动实现一个 new 操作符

比如 `var person = new Person('David', '25', 'student')`;

第一步：创建新对象，即 `var obj = new Object()`;

第二步：设置原型链，即 `obj.__proto__ = Person.prototype`;

第三步：使用指定参数调用构造函数，并将 this 绑定到新对象上，即 `var result = Person.call(obj, 'David', '25', 'student')`;

第四部：判断构造函数的返回值，即 result 的值，如果是基础类型或者没有返回值，则返回 obj；如果是引用类型，则返回 result。即 `return typeof result === 'object' ? result : obj`;

---

```js
// 需要返回一个对象 借助函数来实现new操作
// 传入需要的参数： 类 + 属性
const person = new Otaku("乔峰", 5000);
const person1 = objectFactory(Otaku, "鸠摩智", 5000);

// 开始来实现objectFactory 方法
function objectFactory(obj, name, age) {}
// 这种方法将自身写死了 如此他只能构造以obj为原型，并且只有name 和 age 属性的 obj
// 在js中 函数因为arguments 使得函数参数的写法异常灵活，在函数内部可以通过arguments来获得函数的参数
function objectFactory() {
  console.log(arguements); //{ '0': [Function: Otaku], '1': '鸠摩智', '2': 5000 }
  // 通过arguments类数组打印出的结果，我们可以看到其中包含了构造函数以及我们调用objectfactory时传入的其他参数
  // 接下来就是要想如何得到其中这个构造函数和其他的参数
  // 由于arguments是类数组，没有直接的方法可以供其使用，我们可以有以下两种方法:
  // 1. Array.from(arguments).shift(); //转换成数组 使用数组的方法shift将第一项弹出
  // 2.[].shift().call(arguments); // 通过call() 让arguments能够借用shift方法
  const Constructor = [].shift.call(arguments);
  const args = arguments;
  // 新建一个空对象 纯洁无邪
  let obj = new Object();
  // 接下来的想法 给obj这个新生对象的原型指向它的构造函数的原型
  // 给构造函数传入属性，注意：构造函数的this属性
  // 参数传进Constructor对obj的属性赋值，this要指向obj对象
  // 在Coustructor内部手动指定函数执行时的this 使用call、apply实现
  Constructor.call(obj, ...args);
  return obj;
}
```

```js
function myNew(Obj, ...args) {
  var obj = Object.create(Obj.prototype); //使用指定的原型对象及其属性去创建一个新的对象
  Obj.apply(obj, args); // 绑定 this 到obj, 设置 obj 的属性
  return obj; // 返回实例
}
```

## 理解 es6 class 构造以及继承的底层实现原理

```

```
