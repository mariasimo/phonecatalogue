import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import { BrowserRouter as Router } from 'react-router-dom';
import { Provider } from 'react-redux';
import storeFn from './store'


const store = storeFn();

ReactDOM.render(
<Provider store={store}>
    <Router><App/></Router>
</Provider>
, document.getElementById('root'));