import React from 'react';
import { Provider } from 'react-redux';
import './App.css';
import Header from "./Components/Header/Header";
import Router from "./Components/Router/Router";
import {createStore, combineReducers, applyMiddleware} from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import thunk from 'redux-thunk';

//Import reducers
import match from "./Redux/Reducers/match"



const reducer = combineReducers({
    match
});


// here is our redux-store
const store = createStore(reducer,
    composeWithDevTools(applyMiddleware(thunk))
);

function App() {
  return (
      <Provider store={store}>
          <div className="header">
              <Header />
          </div>
          <div className="corp">
              <Router/>
          </div>
      </Provider>
  );
}

export default App;
