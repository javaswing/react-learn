# Redux异步action例子

## 开启调试redux

```js
// 调试redux
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const middlewares = [thunk, createLogger()]
const store = createStore(reducer, composeEnhancers(applyMiddleware(...middlewares)))
```

## React中CSS的方案
- namespace (bem)
- css in js （用于类似JS的写法来写CSS）
- CSS Module 结合webpack实现CSS局部作用域



## 开启SCSS以及css module

- https://create-react-app.dev/docs/adding-a-css-modules-stylesheet
- https://create-react-app.dev/docs/adding-a-sass-stylesheet