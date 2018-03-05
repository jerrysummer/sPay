import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
// import registerServiceWorker from './registerServiceWorker';
import { Provider } from "react-redux";
import { createStore } from "redux";
import reducers from "./reducers";
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';


ReactDOM.render(
  <Provider store={createStore(reducers, window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__())}>
    <MuiThemeProvider>
      <App />
    </MuiThemeProvider>
  </Provider>, document.getElementById('root')
);
