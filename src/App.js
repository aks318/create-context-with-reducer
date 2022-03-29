import { useContext } from 'react';
import './App.css';
import {ExampleContext} from "./contexts/Example"

function App() {
  const {state : exampleState} = useContext(ExampleContext)
  console.log(exampleState)
  return (
    <div className="App">
    </div>
  );
}

export default App;
