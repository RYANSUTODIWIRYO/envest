import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';

import { Provider } from "react-redux"
import { Store, Persistor } from "./store"
import { PersistGate } from 'redux-persist/integration/react';

ReactDOM.render(
  <React.StrictMode>
    <Provider store={Store}>
      <PersistGate loading={null} persistor={Persistor}>
        <App />
      </PersistGate>
    </Provider>
  </React.StrictMode>,
  document.getElementById('root')
);