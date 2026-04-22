import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Homepage from './view/pages/Homepage';
import NewStoriesPage from './view/pages/NewStoriesPage';
import FullStoriesPage from './view/pages/FullStoriesPage';
import LoginPage from './view/pages/LoginPage';
import RegisterPage from './view/pages/RegisterPage';

function App() {
  return (
    <Router>
      <div className="app-container">
        <Routes>
          <Route path="/" element={<Homepage />} />
          <Route path="/truyen-moi" element={<NewStoriesPage />} />
          <Route path="/truyen-full" element={<FullStoriesPage />} />
          <Route path="/login" element={<LoginPage/>} />
          <Route path="/register" element={<RegisterPage/>} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;