import React from "react";
import ReactDOM from "react-dom";
import { Provider } from "react-redux";
import { createStore, applyMiddleware } from "redux";
import promise from "redux-promise";
import App from "./components/App";
import reducers from './reducers/index'

import 'bootstrap/dist/css/bootstrap.css'
import './index.css'

const createStoreWithMiddleware = applyMiddleware(promise)(createStore);

ReactDOM.render(
  <Provider store={createStoreWithMiddleware(reducers)}>
  <div className="app-bg">
    <App />
  </div>
  </Provider>,
  document.getElementById('root')
);

