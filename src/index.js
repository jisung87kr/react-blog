import React from 'react';
import ReactDOM from 'react-dom';
import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap/dist/js/bootstrap.js';
import App from './App';
import reportWebVitals from './reportWebVitals';

import { createStore, applyMiddleware } from 'redux';
import { Provider } from 'react-redux';
import rootReducer from './module/index';
import { createLogger } from 'redux-logger';
import ReduxThunk from 'redux-thunk';
import { composeWithDevTools } from "redux-devtools-extension";
// import { createBrowserHistory } from "history";
import { BrowserRouter as Router } from "react-router-dom";

// const customHistory = createBrowserHistory();
const logger = createLogger();
const store = createStore(
    rootReducer,
    composeWithDevTools(
        applyMiddleware(
            // ReduxThunk.withExtraArgument({ history: customHistory }),
            ReduxThunk,
            logger
        )
    )
); // 여러개의 미들웨어를 적용 할 수 있습니다.

ReactDOM.render(
  <React.StrictMode>
    <Router>
        <Provider store={store}>
            <App />
        </Provider>
    </Router>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
