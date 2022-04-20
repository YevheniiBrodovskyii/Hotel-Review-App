import React from 'react';
import { createRoot } from "react-dom/client";
import App from './App';
import * as serviceWorkerRegistration from './serviceWorkerRegistration';
import { Provider } from 'react-redux';
import store from  "./store";
import * as actions from "./components/actions/actions"
import { bindActionCreators } from 'redux';


const container = document.getElementById('root');
const root = createRoot(container);
const {dispatch} = store;
const {authenticate, fetchHotels, toSignUp, toBack, showSignUpError, showLoginError} = bindActionCreators(actions, dispatch);

root.render(<Provider store={store}>
    <App />
  </Provider>);


serviceWorkerRegistration.register();
export {authenticate, fetchHotels, toSignUp, toBack, showSignUpError, showLoginError}

