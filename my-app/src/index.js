import React from 'react';
import ReactDOM from 'react-dom';
import Counter from './components/Counter'
import './index.css';
import { createStore } from 'redux';
import counter from './reducers'

const store = createStore(counter)

const render = () => ReactDOM.render(
  <div className="App">
    <Counter
      value={store.getState()}
      onIncrement={() => store.dispatch({ type: 'INCREMENT' })}
      onDecrement={() => store.dispatch({ type: 'DECREMENT' })}
    ></Counter>
  </div>,
  document.getElementById('root')
);

render()
store.subscribe(render)

console.log(store.getState());
