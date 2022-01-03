import React from 'react';
import AppRoute from './routes';

import AppProvider from './hooks';

import './global/reset.css'
import './global/global.css'


function App() {
  return (
    <div className='container'>
      <AppProvider>
        <AppRoute />
      </AppProvider>
    </div>
  );
}

export default App;
