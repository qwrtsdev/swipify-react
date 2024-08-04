import React from 'react'
import UpNavbar from './navigation/UpNavbar';
import DownNavbar from './navigation/DownNavbar';
import Card from './contents/card/Card'

function App() {
  return (
    <div className='app'>
      <div className="appNav" id='up'>
        <UpNavbar />
      </div>
      <div className="appContent">
        <Card />
      </div>
      <div className="appNav" id='down'>
        <DownNavbar />
      </div>
    </div>
  )
}

export default App;
