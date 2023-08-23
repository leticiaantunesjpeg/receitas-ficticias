import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import ListaReceitas from './components/ListaReceitas.js';
import AdicionarReceita from "./components/AdicionarReceita.js";
import DetalhesReceita from "./components/DetalhesReceita.js";

const AppRouter = () => (
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<ListaReceitas />} />
      <Route path="/adicionar" element={<AdicionarReceita />} />
      <Route path="/receitas/:id" element={<DetalhesReceita />} />
    </Routes>
  </BrowserRouter>
);

export default AppRouter;
