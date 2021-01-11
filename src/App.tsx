import React from 'react';
import './App.css';
import ResponsiveTable from './Components/ResponsiveTable';
import ExportableTable from './Components/ExportableTable';
import ThemeProvider from './Components/ThemeProvider.js';
import { BrowserRouter } from "react-router-dom";
import { Switch } from 'react-router-dom';
import { Route } from 'react-router-dom';

function App() {
  return (
    <BrowserRouter>
        <Switch>
          <Route path="/" exact >
            <ThemeProvider>
              <ResponsiveTable />
            </ThemeProvider>
          </Route>
        <Route path="/export" exact >
            <ExportableTable />
        </Route>
        </Switch>
    </BrowserRouter>
      );
}

export default App;
