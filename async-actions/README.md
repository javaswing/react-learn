# Redux异步action例子

## 开启调试redux

```js
// 调试redux
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const middlewares = [thunk, createLogger()]
const store = createStore(reducer, composeEnhancers(applyMiddleware(...middlewares)))
```

## 开启SCSS以及css module

- https://create-react-app.dev/docs/adding-a-css-modules-stylesheet
- https://create-react-app.dev/docs/adding-a-sass-stylesheet