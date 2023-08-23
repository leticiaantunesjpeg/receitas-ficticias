import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { getReceitas } from "../services/api";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlus } from "@fortawesome/free-solid-svg-icons";
import "./styles.css";

function ListaReceitas() {
  const [receitas, setReceitas] = useState([]);

  useEffect(() => {
    getReceitas().then((data) => {
      setReceitas(data);
    });
  }, []);

  return (
    <div className="container">
      <h1 className="titulo">Lista de Receitas</h1>
      <Link className="link-adicionar" to="/adicionar">
        <FontAwesomeIcon icon={faPlus} /> Adicionar Receita
      </Link>
      <ul className="lista">
        {receitas.map((receita) => (
          <li key={receita.id}>
            <Link className="link-receita" to={`/receitas/${receita.id}`}>
              {receita.titulo}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default ListaReceitas;
