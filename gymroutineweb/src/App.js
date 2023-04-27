import './App.css';
import Login from './components/Login-Register';
import CreateRoutine from './components/CreateRoutineCMD';
import NavBar from './components/Nav/index';
const App = () => {
  return (
    <div className="Container">
      <CreateRoutine/>
    </div>
  );
}

export default App;
