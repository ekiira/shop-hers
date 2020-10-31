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
import SignUp from './auth/SignUp';


const App = ( ) => {
  return (
    <div className="App">
 
      <Router>
      <Header />
      <SideNav />  
        <Switch>
        
          <Route path='/' exact component={NewIn} />
      <Route path='/login' exact component={SignUp} />

          <Route path='/clothing' exact component={Clothing} />
          <Route path='/shoes' exact component={Shoes} />
          <Route path='/bags' exact component={Bags} />
          <Route path='/hats' exact component={Hats} />
          <Route path='/accessories' exact component={Accessories} />

        </Switch>
      <Footer />

      </Router>
     
    </div>
  );
}

export default App;
