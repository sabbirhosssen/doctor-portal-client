import './App.css';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";
import Home from './Components/Pages/Home/Home/Home';
import Appointment from './Components/Pages/Appointment/Appointment/Appointment';


function App() {
  return (
    <div className="App">
      <Router>
        <Switch>
          <Route path="/appointment">
            <Appointment />
          </Route>
          <Route path="/Home">
            <Home />
          </Route>
          <Route path="/">
            <Home />
          </Route>
        </Switch>
      </Router>

    </div>
  );
}

export default App;
