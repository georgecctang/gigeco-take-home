import './App.css';
import { Switch, Route } from 'react-router-dom';
import Landing from './components/Landing';
import SignUp from './components/SignUp';
import Login from './components/Login';
import Home from './components/Home';
import Error from './components/Error';

function App() {
  return (
    <div>
      <Switch>
        <Route exact path="/"><Landing /></Route>
        <Route exact path="/signup"><SignUp /></Route>
        <Route exact path="/login"><Login /></Route>
        <Route exact path="/home"><Home /></Route>
        <Route><Error /></Route>
      </Switch>
    </div>
  );
}

export default App;
