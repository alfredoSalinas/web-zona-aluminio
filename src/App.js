import logo from './logo.svg';
import './App.css';
import { db, auth } from './services/firebase'
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
import AdminTutoriales from './pages/adminTutoriales'
import MiPedido from './pages/miPedido';
import Barra from './components/barra';
import { Provider } from 'react-redux';
import { createStore, combineReducers, applyMiddleware } from 'redux'
import ReduxThunk from 'redux-thunk';
import productReducer from './store/reducers/product.reducer'
import clientReducer from './store/reducers/client.reducer'
import quoteReducer from './store/reducers/quote.reducer'
import authReducer from './store/reducers/auth.reducer';
import adminReducer from './store/reducers/admin.reducer'
import fotosReducer from './store/reducers/fotos.reducer';
import { signIn, signOut, authReady } from './store/actions/auth.actions';
import { isAdmin } from './store/actions/admin.actions';
import watchUserChanges from './services/auth'


const allReducers = combineReducers({
  admin: adminReducer,
  auth: authReducer,
  product: productReducer,
  client: clientReducer,
  quote: quoteReducer,
  fotos: fotosReducer,
});

const middleWares = [ReduxThunk];

const rootReducer = (state, action)=>{
  return allReducers(state, action)
}


function App() {
  const store = createStore(
    rootReducer,
    applyMiddleware(...middleWares),
  )
/*
  watchUserChanges((user)=>{
    console.log(user)
    store.dispatch(authReady(true))
    if(user !=null){
      store.dispatch(signIn(user))
    }
    if(user != null){
      //getAdmin(user, (admin)=>{
      //  store.dispatch(isAdmin(admin))
      //})
    }
  })
*/
  return (
    <Provider store={store}>
      <Router>
        <Header/>
        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/productos" component={Productos} />
          <Route exact path="/cotizar" component={Cotizar} />
          <Route exact path="/tutoriales" component={Tutoriales} />
          <Route exact path="/adminProductos" component={AdminProductos} />
          <Route exact path="/adminTutoriales" component={AdminTutoriales} />
          <Route exact path="/pedido" component={MiPedido} />
        </Switch>
      </Router>
    </Provider>
  );
}

export default App;
