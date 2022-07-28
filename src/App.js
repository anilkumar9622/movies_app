import React from 'react';
import './App.css';
import { useRoutes } from 'react-router-dom'
import Home from './pages/home';

function App() {
  const routes = useRoutes([
    {
      path:'/', element: <Home /> 
    }
   
  ])
  return (
   <>
   {routes}
   </>
  );
}

export default App;
