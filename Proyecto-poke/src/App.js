import {
  BrowserRouter as Router,
  Navigate,
  Route,
  Routes,
} from "react-router-dom";

import React from 'react';
import MatriculaId  from "./pages/MatriculaId";
import Carrera from "./pages/Carrera";
import Nombre from "./pages/Nombre";
import UserPage from "./pages/UserPage";
import Matricula from "./components/Matricula";
import DashboardPage from "./pages/DashboardPage";
import NotFoundPage from "./pages/NotFoundPage";
import Pokemon from './components/Pokemon';
import './components/style.css'


export default function App() {
 
  return (

    
    <Router>
       
      <Matricula />
      
      <Routes>
        <Route path="/" element={<MatriculaId  />} />
        <Route path="/about" element={<Carrera />} />
        <Route path="/users/*" element={<UserPage />} />
        <Route path="/users" element={<Nombre />} />
        <Route path="/myusers/" element={<Navigate replace to="/users" />} />
        <Route path="/users/:id" element={<UserPage />} />
        <Route path="/dashboard/*" element={<DashboardPage />}>
          <Route path="welcome" element={<p>Welcome!</p>} />
        </Route>
        <Route path="*" element={<NotFoundPage />} />
      </Routes>
      <>
      <Pokemon/>
    </>
  );
    </Router>

    
  );
}

