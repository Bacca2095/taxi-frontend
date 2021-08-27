import React, { StrictMode } from 'react';
import ReactDOM from 'react-dom';
import { ThemeProvider } from '@material-ui/core/styles';
import { SessionProvider } from 'context/SessionContext';
import { theme } from 'styles';
import { GlobalErrorBoundary } from 'config/errors/GlobalErrorBoundary';
import App from './App';
import reportWebVitals from './reportWebVitals';

ReactDOM.render(
  <StrictMode>
    <GlobalErrorBoundary>
      <ThemeProvider theme={theme}>
        <SessionProvider>
          <App />
        </SessionProvider>
      </ThemeProvider>
    </GlobalErrorBoundary>
  </StrictMode>,
  document.getElementById('root'),
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
