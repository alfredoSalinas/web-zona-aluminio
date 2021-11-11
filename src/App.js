import logo from './logo.svg';
import './App.css';
import {
  BrowserRouter as Router,
  Route,
  Switch
} from "react-router-dom"

import Header from './components/header';
import Home from './pages/home';
import Productos from './pages/productos';


function App() {
  return (
    <Router>
        <Header/>
        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/productos" component={Productos} />
        </Switch>
      </Router>
  );
}

export default App;
