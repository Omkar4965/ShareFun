import React, { useContext } from 'react';
import Home from './pages/home';
import Profile from './pages/profile';
import LoginPage from './pages/login';
import RegisterPage from './pages/register';
import NoPage from './pages/NoPage';
import EditDetails from './pages/editDetails';
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import { UserContext } from './context/UserContext'; // Assuming you're using UserContext for user data
import Messenger from './pages/messenger'

function App() {
  const { user } = useContext(UserContext); // Access the current logged-in user
  
  return (
    <BrowserRouter>
      <Routes>
        {/* Home page */}
        <Route path="/" element={<Home />} />
        
        {/* Profile routes: 
            - /profile for current user 
            - /profile/:id for other users */}
        <Route 
          path="/profile" 
          element={user ? <Profile user={user} /> : <Navigate to="/login" />} // Current user profile
        />
        <Route path="/profile/:id" element={<Profile />} /> {/* Other user profile */}
        
        {/* Login and Register */}
        <Route path="/login" element={<LoginPage />} />
        <Route path="/register" element={<RegisterPage />} />

        <Route path='/editDetails' element={<EditDetails/>} />

        <Route path='/messenger' element={ <Messenger/>} />
        
        {/* No match route */}
        <Route path="*" element={<NoPage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
