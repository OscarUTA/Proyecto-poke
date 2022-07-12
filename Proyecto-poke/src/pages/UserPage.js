import { useParams } from "react-router-dom";

export default function Nombre() {
  const params = useParams();

  return (
    <div>
      User <h1>{params.id}</h1>
    </div>
  );
}
