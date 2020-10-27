import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import * as serviceWorker from './serviceWorker';
import { GlobalStyles } from './global-styles';
import { FirebaseContext } from './context/firebase';

const config = {
  apiKey: "AIzaSyBbGNl6IqFG1HcVvliHPNqPgsWA2rIL3ig",
  authDomain: "netflix-clone-ef549.firebaseapp.com",
  databaseURL: "https://netflix-clone-ef549.firebaseio.com",
  projectId: "netflix-clone-ef549",
  storageBucket: "netflix-clone-ef549.appspot.com",
  messagingSenderId: "664676776514",
  appId: "1:664676776514:web:f499ef4338992822960bdb"
}

const firebase = window.firebase.initializeApp(config)

ReactDOM.render(
  <React.StrictMode>
    <FirebaseContext.Provider value={{ firebase: window.firebase }}>
      <GlobalStyles />
      <App />
    </FirebaseContext.Provider>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
