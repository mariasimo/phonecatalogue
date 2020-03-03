import React, { Component } from 'react';
import  { Switch, Route} from 'react-router-dom';
import PhoneList from './components/PhoneList/PhoneList';
import Home from './components/Home/Home';
import './globalStyles/base.scss';
import PhoneDetails from './components/PhoneDetails/PhoneDetails';


class App extends Component {    
  render() {
    return(
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
            component={PhoneDetails}
          />
        </Switch>
    )
  }
}
 export default App;