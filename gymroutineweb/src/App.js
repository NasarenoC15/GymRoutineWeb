import './App.css';
import Login from './components/Login-Register';
import CreateRoutine from './components/CreateRoutineCMD';

const App = () => {
  return (
    <div className="Container">
      <Login/>
      <CreateRoutine/>
    </div>
  );
}

export default App;
