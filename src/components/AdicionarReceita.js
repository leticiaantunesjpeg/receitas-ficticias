import React, { useState } from "react";
import { Link } from "react-router-dom";
import { adicionarReceita } from "../services/api.js";
import "./styles.css";

function AdicionarReceita() {
  const [titulo, setTitulo] = useState("");
  const [ingredientes, setIngredientes] = useState("");
  const [modoPreparo, setModoPreparo] = useState("");

  const adicionarReceitaNova = () => {
    const novaReceita = {
      titulo,
      ingredientes: ingredientes.split("\n"),
      modoPreparo,
    };

    adicionarReceita(novaReceita).then(() => {
      window.location.href = "/";
    });
  };

  return (
    <div className="adicionar-receita">
      <h1 className="titulo-principal">Adicionar Nova Receita</h1>
      <label className="label">Título:</label>
      <input
        className="input"
        type="text"
        value={titulo}
        onChange={(e) => setTitulo(e.target.value)}
      />
      <label className="label">Ingredientes:</label>
      <textarea
        className="input textarea"
        value={ingredientes}
        onChange={(e) => setIngredientes(e.target.value)}
      />
      <label className="label">Modo de Preparo:</label>
      <textarea
        className="input textarea"
        value={modoPreparo}
        onChange={(e) => setModoPreparo(e.target.value)}
      />
      <button className="button" onClick={adicionarReceitaNova}>
        Adicionar Receita
      </button>
      <Link className="link-cancelar" to="/">
        Cancelar
      </Link>
    </div>
  );
}

export default AdicionarReceita;
