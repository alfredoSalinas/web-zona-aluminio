import logo from './logo.svg';
import './App.css';
import {
  BrowserRouter as Router,
  Route,
  Switch
} from "react-router-dom"

import Header from './components/header';
import Home from './pages/home';


function App() {
  return (
    <Router>
        <Header/>
        <Switch>
          <Route exact path="/" component={Home} />
          
        </Switch>
      </Router>
  );
}

export default App;
