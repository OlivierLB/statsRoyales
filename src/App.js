import React from 'react';
import { Provider } from 'react-redux';
import { createStore, combineReducers } from 'redux';
import './App.css';
import Header from "./Components/Header/Header";
import Router from "./Components/Router/Router";

const store  = createStore(
    combineReducers({

    })
);

function App() {
  return (
      <Provider store={store}>
          <Header />
          <React.Fragment>
              <Router/>
          </React.Fragment>
      </Provider>
  );
}

export default App;
