import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import HomePage from './components/homepage';
import SignIn from './components/SignIn';

function App() {
  const [user, setUser] = useState(null);

  useEffect(() => {
    // Check for token in local storage on app load
    const token = localStorage.getItem('token');
    if (token) {
      const decoded = JSON.parse(atob(token.split('.')[1]));
      setUser({ username: decoded.user.username });
    }
  }, []);

  return (
    <Router>
      <Routes>
        <Route path="/" element={<HomePage user={user} setUser={setUser} />} />
        <Route path="/signin" element={<SignIn setUser={setUser} />} />
      </Routes>
    </Router>
  );
}

export default App;
