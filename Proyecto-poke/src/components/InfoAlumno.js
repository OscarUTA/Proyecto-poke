import React from 'react';
import '../components/style.css';

function InfoAlumno(props) {
  return (
    <div className='contenedor-alumno'>
      <div className='contenedor-texto-alumno'>
        <p className='nombre-alumno'>
          <strong>{props.nombre}</strong> en {props.pais}
        </p>
        <p className='cargo-alumno'>
        {props.carrera} en <strong>{props.universidad}</strong>
        </p>
        <p className='texto-alumno'>{props.alumno}</p>
      </div>
    </div>
  );
}

export default InfoAlumno;