import { ThemeProvider } from '@mui/material';
import { Provider } from 'react-redux';
import { PersistGate } from 'redux-persist/integration/react';
import { theme } from './constants';
import Router from './modules/routing';
import { persistor, store } from './utils';

import 'slick-carousel/slick/slick-theme.css';
import 'slick-carousel/slick/slick.css';


function App() {
  return (
    <Provider store={store}>
      <PersistGate persistor={persistor} loading={null}>
        <ThemeProvider theme={theme}>
          <Router />
        </ThemeProvider>
      </PersistGate>
    </Provider>
  );
}

export default App;
