import React from 'react'
import './App.css';
import TopNavbar from '../components/navigation/TopNavbar';
import BottomNavbar from '../components/navigation/BottomNavbar';
import { Switch, Route } from 'react-router-dom'
import MainPage from './MainPage/MainPage';
import ProfileMenu from './ProfileMenu/ProfileMenu';
import PageNotFound from './PageNotFound/PageNotFound';

function App() {
  return (
    <div className='app'>
      <div className="appNav" id='top'>
        <TopNavbar />
      </div>
      <div className="appContent">
        <Switch>
          <Route path="/" element={<MainPage />} />
          <Route path="/profile" element={<ProfileMenu />} />
          <Route path="*" element={<PageNotFound />} />
        </Switch>
      </div>
      <div className="appNav" id='bottom'>
        <BottomNavbar />
      </div>
    </div>
  )
}

export default App;
