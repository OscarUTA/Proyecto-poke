import React from 'react'
import PokemonUnic from '../components/PokemonUnic';
import '../components/style.css'
import { useParams } from "react-router-dom";

export default function Nombre() {
  const params = useParams();

  return ( <div>
  <>
        <PokemonUnic/>
      </>
  
      
    </div>
  );
}



