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



export default function App() {
 
  return (

    
    <Router>
       
      <Matricula />
      
      <Routes>
        <Route path="/" element={<MatriculaId  />} />
        <Route path="/pokemons" element={<Carrera />} />
        <Route path="/Matricula/*" element={<UserPage />} />
        <Route path="/Matricula" element={<Nombre />} />
        <Route path="/myusers/" element={<Navigate replace to="/Matricula" />} />
        <Route path="/pokemon/:pokemonId" element={<UserPage />} />
        <Route path="/dashboard/*" element={<DashboardPage />}>
        <Route path="welcome" element={<p>Welcome!</p>} />
        </Route>
        <Route path="*" element={<NotFoundPage />} />
      </Routes>
      
  
    </Router>

    
  );
}

