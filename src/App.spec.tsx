import React, { StrictMode } from 'react';
import ReactDOM from 'react-dom';
import { ThemeProvider } from '@material-ui/core/styles';
import { SessionProvider } from 'context/SessionContext';
import { theme } from 'styles';
import App from './App';

describe('Test App Component', () => {
  it('renders without crashing', () => {
    const root = document.createElement('root');

    ReactDOM.render(
      <ThemeProvider theme={theme}>
        <SessionProvider>
          <App />
        </SessionProvider>
      </ThemeProvider>,
      root,
    );
    ReactDOM.unmountComponentAtNode(root);
  });
});
