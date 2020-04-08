import React from 'react';
import ReactDOM from 'react-dom';
import * as serviceWorker from './serviceWorker';
import App from './App';
import GlobalStyle from './theme/GlobalStyle';
import { ThemeProvider } from 'styled-components';
import Theme from './theme/Theme';

ReactDOM.render(
    <React.StrictMode>
        <ThemeProvider theme={Theme}>
            <GlobalStyle />
            <App />
        </ThemeProvider>
    </React.StrictMode>,
    document.getElementById('root')
);

// online/offline modes
serviceWorker.unregister();