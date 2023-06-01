import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import RegistrationForm from './pages/RegistrationForm';
import ProfilePage from './pages/ProfilePage';

const App = () => {
  return (
    <Router>
      <div className="App">
        <Routes>
          <Route exact path="/" element={<RegistrationForm />} />
          <Route exact path="/profile" element={<ProfilePage/>} />
        </Routes>
      </div>
    </Router>
  );
};

export default App;
