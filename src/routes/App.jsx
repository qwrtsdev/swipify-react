import React from 'react'
import './App.css';

import TopNavbar from '../components/navigation/TopNavbar';
import BottomNavbar from '../components/navigation/BottomNavbar';

import { Routes, Route } from 'react-router-dom';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

import MainPage from './MainPage/MainPage';
import RegisterPage from './Authen/RegisterPage/RegisterPage';
import LoginPage from './Authen/LoginPage/LoginPage';
import ProfileMenu from './ProfileMenu/ProfileMenu';
import PageNotFound from './ErrorPage/ErrorPage';


function App() {
  return (
    <div className='app'>
      <div className="appNav" id='top'>
        <TopNavbar />
      </div>
      <div className="appContent">
        <Routes>
          <Route path="/" element={<MainPage />} />
          <Route path="/register" element={<RegisterPage />} />
          <Route path="/login" element={<LoginPage />} />
          <Route path="/profile" element={<ProfileMenu />} />
          <Route path="*" element={<PageNotFound />} />
        </Routes>
      </div>
      <div className="appNav" id='bottom'>
        <BottomNavbar />
      </div>
      <ToastContainer
      position="top-center"
      autoClose={5000}
      hideProgressBar={false}
      newestOnTop
      closeOnClick
      rtl={false}
      pauseOnFocusLoss
      draggable
      pauseOnHover
      theme="light"
      />
    </div>
  )
}

export default App;
