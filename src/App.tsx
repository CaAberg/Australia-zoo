import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import HomePage from './pages/HomePage';
import GroupPage from './pages/GroupPage';
import AnimalDetailPage from './pages/AnimalDetailsPage';

const App: React.FC = () => (
  <Router>
    <div className="flex flex-col min-h-screen font-custom">
      <Header />
      <div className="flex-grow container mx-auto mt-4">
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/mammals" element={<GroupPage groupName="mammals" />} />
          <Route path="/birds" element={<GroupPage groupName="birds" />} />
          <Route path="/reptiles" element={<GroupPage groupName="reptiles" />} />
          <Route path="/:group/:animal" element={<AnimalDetailPage />} />
        </Routes>
      </div>
      <Footer />
    </div>
  </Router>
);

export default App;
