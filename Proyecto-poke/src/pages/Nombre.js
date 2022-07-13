import React from 'react'
import '../App.css';
import InfoAlumno from '../components/InfoAlumno';

export default function Nombre() {
  return (
    <div className='App'>
      <div className='contenedor-principal'>
        <h1>Matricula: 171398</h1>
        <InfoAlumno
          nombre='Oscar Leonardo Flores Bueno'
          pais='Mexico Aguascalientes Ags.'
          carrera='Ingeniería en Desarrollo y Gestión de Software IDGS'
          universidad='Universidad Tecnológica de Aguascalientes UTA'/>
      </div>
    </div>
  );
}
