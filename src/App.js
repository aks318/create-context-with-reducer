import { useContext, useEffect } from 'react';
import './App.css';
import {Context as ExampleContext} from "./contexts/Auth"

function App() {
  const {state : exampleState,
    loginWithEmail
  } = useContext(ExampleContext)
  console.log(exampleState)
  useEffect(() => {
    loginWithEmail()
  } , [])
  return (
    <div className="App">
    </div>
  );
}

export default App;
