import React from 'react';
import { BrowserRouter as Router, Route, Switch, withRouter } from 'react-router-dom'
import './App.css';
import Header from './Components/Navigation/Header/Header';
import SideNav from './Components/Navigation/Side-Nav/SideNav';
import NewIn from './Components/NewIn/NewIn';
import Clothing from './Components/Clothing/Clothing';
import Shoes from './Components/Shoes/Shoes';
import Bags from './Components/Bags/Bags';
import Hats from './Components/Hats/Hats';
import Accessories from './Accessories/Accessories';
// import MainTab from './Components/Navigation/Tab/Tab';
import Footer from './Components/Navigation/Footer/Footer';
import Auth from './auth/Auth';


import { persistReducer, persistStore } from 'redux-persist'
import { PersistGate } from 'redux-persist/integration/react'

import storage from 'redux-persist/lib/storage'

import { Provider } from 'react-redux'
import { createStore } from 'redux'
import rootReducer from './redux/reducers/rootReducer';
import Admin from './admin/Admin';
import Add from './admin/Add';

// const persistConfig = {
//   key: 'root',
//   storage,
//   whitelist: []
// }

// const persistedReducer = persistReducer(persistConfig, rootReducer)
// let store = createStore (
//   persistedReducer,
//   window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__() 
// )

// let persistor = persistStore(store);

const App = ( ) => {
  return (
    // <Provider store={store}>
      // <PersistGate loading={null} persistor={persistor}>
      <div className="App">
 
 <Router>
   {window.location.pathname !== '/login' ? (
     <>
     <Header />
 <SideNav />  
     </>
   ) : null}

   <Switch>
   
     <Route path='/' exact component={NewIn} />
 <Route path='/login' exact component={Auth} />
 <Route path='/login' exact component={Auth} />
 <Route path='/admin' exact component={Admin} />
 <Route path='/admin/add' exact component={Add} />

     <Route path='/clothing' exact component={Clothing} />
     <Route path='/shoes' exact component={Shoes} />
     <Route path='/bags' exact component={Bags} />
     <Route path='/hats' exact component={Hats} />
     <Route path='/accessories' exact component={Accessories} />

   </Switch>

   {window.location.pathname !== '/login' ? <Footer /> : null}
 

 </Router>

</div>

      // </PersistGate>

    // </Provider>

  );
}

export default App;
