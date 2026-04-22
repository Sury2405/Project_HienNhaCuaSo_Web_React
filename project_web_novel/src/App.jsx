import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Homepage from './view/pages/Homepage';
import NewStoriesPage from './view/pages/NewStoriesPage';
import FullStoriesPage from './view/pages/FullStoriesPage';

function App() {
  return (
    <Router>
      <div className="app-container">
        <Routes>
          <Route path="/" element={<Homepage />} />
          <Route path="/truyen-moi" element={<NewStoriesPage />} />
          <Route path="/truyen-full" element={<FullStoriesPage />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;