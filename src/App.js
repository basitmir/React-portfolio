import React from 'react';
import ResponsiveDrawer from '../src/components/Drawer'
import ErrorBoundary from './components/ErrorBoundary';

function App() {
  return <ErrorBoundary>
      <ResponsiveDrawer />
      </ErrorBoundary>
  
}

export default App;
