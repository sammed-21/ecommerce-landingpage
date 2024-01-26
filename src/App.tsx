import React from 'react';
import logo from './logo.svg';
import './App.css';
import Navbar from './components/Navbar';
import Welcome from './components/Welcome';
import Analysis from './components/Analysis';
import Functionality from './components/Functionality';

function App() {
  return (
    <div className="w-full relative flex flex-col items-center justify-center ">
     <Navbar/>
     <Welcome/>
     <Analysis/>
     <Functionality/>
    </div>
  );
}

export default App;
