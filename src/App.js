import React from 'react';
import './App.css';
import { useRoutes } from 'react-router-dom'
import House from './pages/home';
import Slides from './pages/slides';

function App() {
  const routes = useRoutes([
    {
      path:'/', element: <House /> 
    },
    {
      path:'/slides', element: <Slides /> 
    },
   
   
  ])
  return (
   <>
   {routes}
   </>
  );
}

export default App;
