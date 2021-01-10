import React from 'react';
import './App.css';
import ResponsiveTable from './Components/ResponsiveTable';
import SortableTable from './Components/SortableTable';
import ThemeProvider from './Components/ThemeProvider.js';

function App() {
  return (
    <ThemeProvider>
      <ResponsiveTable />
      <SortableTable />
    </ThemeProvider>
  );
}

export default App;
