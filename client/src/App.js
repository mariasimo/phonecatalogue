import React, { Component } from 'react';
import  { Switch, Route} from 'react-router-dom';
import PhoneList from './components/PhoneList';
import PhoneDetail from './components/PhoneDetail';
import Home from './components/Home/Home';
import './globalStyles/base.scss';
import Navbar from './components/Navbar/Navbar';


class App extends Component {    
  render() {
    return(
        < >
        <Navbar/>
        <Switch>
          <Route
            path="/"
            exact
            component={Home}
          />
          <Route
            path="/phones"
            exact
            component={PhoneList}
          />
          <Route
            path="/phones/:id"
            exact
            component={PhoneDetail}
          />
        </Switch>
        </>
    )
  }
}
 export default App;