import {
  BrowserRouter as Router,
  Navigate,
  Route,
  Routes,
} from "react-router-dom";

import React from 'react';
import HomePage from "./pages/HomePage";
import AboutPage from "./pages/AboutPage";
import UsersPage from "./pages/UsersPage";
import UserPage from "./pages/UserPage";
import Matricula from "./components/Matricula";
import DashboardPage from "./pages/DashboardPage";
import NotFoundPage from "./pages/NotFoundPage";
import Main from './components/Main';
import './components/style.css'


export default function App() {
 
  return (

    
    <Router>
       
      <Matricula />
      
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/about" element={<AboutPage />} />
        <Route path="/users/*" element={<UserPage />} />
        <Route path="/users" element={<UsersPage />} />
        <Route path="/myusers/" element={<Navigate replace to="/users" />} />
        <Route path="/users/:id" element={<UserPage />} />
        <Route path="/dashboard/*" element={<DashboardPage />}>
          <Route path="welcome" element={<p>Welcome!</p>} />
        </Route>
        <Route path="*" element={<NotFoundPage />} />
      </Routes>
      <>
      <Main/>
    </>
  );
    </Router>

    
  );
}

