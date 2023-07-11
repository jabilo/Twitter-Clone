import logo from './logo.svg';
import './App.css';
import Left from './Left'
import Center from './Center';
import Right from './Right';
import Login from './Login'
import {useAuthState} from 'react-firebase-hooks/auth';
import {auth} from './firebase'
import MainPage from './MainPage';

function App() {
  const [user] = useAuthState(auth);
  return (
    <div className="app">
      
      {user ? <MainPage/> : <Login/>}
    </div>
  );
}

export default App;
