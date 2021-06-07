# PureComponent

`PureComponent`和`Component`的用法差不多，但是纯组件，会使用浅比较，props和state是否相同，进行重新渲染。所以一般用于性能调优，减少render的次数。
比如例子中

```js
// 不会触发render
this.setState({ data });

// 进行浅复制，则会重新render因为前后的state地址不一样了
this.setState({ data:{...data} });
```