import axios from "axios";

const api = axios.create({
  baseURL: "http://localhost:3001",
});

export const getReceitas = () => {
  return api.get("/receitas").then(response => response.data);
};

export const adicionarReceita = (novaReceita) => {
  return api.post("/receitas", novaReceita)
    .then(response => {
      window.location.href = "/";
      return response.data;
    });
};

export const getReceitaPorId = (id) => {
  return api.get(`/receitas/${id}`).then(response => response.data);
};
