import React from 'react';
import ReactDOM from 'react-dom';

import MesNotifs from './MesNotifs';
// import * as serviceWorker from './serviceWorker';
import NotificationProvider from "./NotificationProvider";

ReactDOM.render(
  <React.StrictMode>
    <NotificationProvider>
      <MesNotifs />
    </NotificationProvider>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
// serviceWorker.unregister();