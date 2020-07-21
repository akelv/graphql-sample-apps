import React from 'react';
import ReactDOM from 'react-dom';
import { ApolloProvider } from '@apollo/react-hooks';
import { createMuiTheme, makeStyles, ThemeProvider } from '@material-ui/core/styles';

import './index.css';
import App from './App';
import client from "./graphql/config";

import * as serviceWorker from './serviceWorker';

const theme = createMuiTheme({
  // status: {
  //   danger: orange[500],
  // },
});

ReactDOM.render(
  <React.StrictMode>
   <ApolloProvider client={client}>
    <ThemeProvider theme={theme}>
      <App />
    </ThemeProvider>
    </ApolloProvider>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
