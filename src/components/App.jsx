import React from 'react'
import ReactDOM from 'react-dom/client';
import './App.css';
import TopNavbar from './navigation/TopNavbar';
import BottomNavbar from './navigation/BottomNavbar';
import Card from './contents/card/Card'

function App() {
  return (
    <div className='app'>
      <TopNavbar />
      <Card />
      <BottomNavbar />
    </div>
  )
}

export default App;
