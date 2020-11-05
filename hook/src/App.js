
import './App.css';
import { Button } from './components/Button/Button';
import { UseContextDemo } from './components/UseContextDemo';
import { UseDiyHookDemo } from './components/UseDiyHookDemo';
import { UseReducerDemo } from './components/UseReducerDemo';

function App() {
  return (
    <div className="App">
      <Button/>
      <UseContextDemo/>
      <UseReducerDemo/>
      <UseDiyHookDemo/>
    </div>
  );
}

export default App;
