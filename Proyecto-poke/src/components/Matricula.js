import { NavLink } from "react-router-dom";
import "./style.css";

export default function Matricula() {
  return (
    <div>
      <ul>
        <li>
          <NavLink
            to="/"
            className={({ isActive }) => (isActive ? "active" : "")}
          >
            Home
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/Matricula"
            className={({ isActive }) => (isActive ? "active" : "")}
          >
            Matricula
          </NavLink>
        </li>
        <li>
          <NavLink
            className={({ isActive }) => (isActive ? "active" : "")}
            to="/pokemons"
          >
            Pokemons
          </NavLink>
          
        </li>
        <li>
          <NavLink
            className={({ isActive }) => (isActive ? "active" : "")}
            to="/pokemon/:pokemonId"
          >
            :pokemonId
          </NavLink>
          
        </li>

      </ul>
    </div>
  );
}
