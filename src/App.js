import React from 'react';
import { BrowserRouter as Router, Route, Switch} from 'react-router-dom'
import './App.css';
import Header from './Header/Header';
import SideNav from './Side-Nav/SideNav';
import NewIn from './NewIn/NewIn';
import Clothing from './Clothing/Clothing';
import Shoes from './Shoes/Shoes';
import Bags from './Bags/Bags';
import Hats from './Hats/Hats';
import Accessories from './Accessories/Accessories';


const App = () => {
  return (
    <div className="App">
 
      <Router>
      <Header />

      <SideNav />
        <Switch>
        
          <Route path='/' exact component={NewIn} />
          <Route path='/clothing' exact component={Clothing} />
          <Route path='/shoes' exact component={Shoes} />
          <Route path='/bags' exact component={Bags} />
          <Route path='/hats' exact component={Hats} />
          <Route path='/accessories' exact component={Accessories} />

        </Switch>
      </Router>
     
    </div>
  );
}

export default App;
