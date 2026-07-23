import { useState } from 'react';
import ProductCard from './components/productCard.jsx';
import { MdHomeFilled } from "react-icons/md";
import "./App.css";
import HomePage from './pages/HomePage.jsx';
import LoginPage from './pages/LoginPage.jsx';
import RegisterPage from './pages/RegisterPage.jsx';
import AdminPage from './pages/AdminPage.jsx';
import TestPage from './pages/TestPage.jsx';
import {Route, Routes } from 'react-router-dom';
import {Toaster} from "react-hot-toast";



function App() {
  return (
    <div className=" " >

      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/register" element={<RegisterPage />} />
        <Route path="/admin/*" element={<AdminPage />} />
        <Route path="/test" element={<TestPage />} />
      </Routes>

      <Toaster position="top-center" />
    </div>
  );
}

export default App;
