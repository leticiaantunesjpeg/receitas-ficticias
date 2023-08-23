import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { getReceitaPorId } from "../services/api";
import "./styles.css";

function DetalhesReceita() {
  const { id } = useParams();
  const [receita, setReceita] = useState(null);

  useEffect(() => {
    getReceitaPorId(id)
      .then(receitaData => {
        setReceita(receitaData);
      })
      .catch(error => {
        console.error("Erro ao buscar detalhes da receita:", error);
      });
  }, [id]);

  if (!receita) {
    return <p className="detalhes-mensagem">Carregando detalhes da receita...</p>;
  }

  return (
    <div className="container">
      <h1 className="titulo-principal">{receita.titulo}</h1>
      <h2>Ingredientes:</h2>
      <ul>
        {receita.ingredientes.map((ingrediente, index) => (
          <li className="item-receita" key={index}>{ingrediente}</li>
        ))}
      </ul>
      <h2>Modo de Preparo:</h2>
      <p>{receita.modoPreparo}</p>
    </div>
  );
}

export default DetalhesReceita;
