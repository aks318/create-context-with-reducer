import { useContext, useEffect } from 'react';
import './App.css';
import UserList from './component/UserList';
import {Context as AuthContext} from "./contexts/Auth"

function App() {
  const {state : authState,
    loginWithEmail
  } = useContext(AuthContext)

  console.log(authState)

  useEffect(() => {
    loginWithEmail()
  } , [])

  return (
    <div className="App">
      <UserList />
    </div>
  );
}

export default App;
