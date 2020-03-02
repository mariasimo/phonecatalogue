import React, { Component } from 'react';
import  { Switch, Route} from 'react-router-dom';
import PhoneList from './components/PhoneList';
import PhoneDetail from './components/PhoneDetail';

class App extends Component {    
  render() {
    return(
      <div>
        <Switch>
          <Route
            path="/"
            exact
            component={PhoneList}
          />
          <Route
            path="/phone/:id"
            exact
            component={PhoneDetail}
          />
        </Switch>
      </div>
    )
  }
}
 export default App;