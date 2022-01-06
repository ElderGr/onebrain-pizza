import React from 'react';
import AppRoute from './routes';

import AppProvider from './hooks';

import './global/reset.css'
import './global/global.css'
import 'react-toastify/dist/ReactToastify.css';
import { ToastContainer } from 'react-toastify';

function App() {
  return (
    <div className='container'>
      <AppProvider>
        <AppRoute />
        <ToastContainer />
      </AppProvider>
    </div>
  );
}

export default App;
