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
import Cotizar from './pages/cotizar';
import Tutoriales from './pages/tutoriales'
import AdminProductos from './pages/adminProductos';


function App() {
  return (
    <Router>
        <Header/>
        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/productos" component={Productos} />
          <Route exact path="/cotizar" component={Cotizar} />
          <Route exact path="/tutoriales" component={Tutoriales} />
          <Route exact path="/adminProductos" component={AdminProductos} />
        </Switch>
      </Router>
  );
}

export default App;
